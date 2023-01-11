import NodeValues from "../../interfaces/NodeValues";
import Observer from "../../interfaces/Observer";
import NodeElement from "../NodeElement";

class Graph {
    observers:Observer[] = [];
    description:any;
    maxDepth:number = 10;
    sleepTime = 1000;
    sleep = (ms: number):any => new Promise((resolve) => setTimeout(resolve, ms));

    attach = (obs:Observer):void => {
        this.observers.push(obs);
    };

    detach = (id:number):void => {
        this.observers = this.observers.filter(obs=>obs.id!==id);
    };
    
    notify = (data:any):void => {
        this.observers.forEach((obs:Observer) => obs.update(data));
    };

    getCurrentNode = (options:NodeValues):NodeElement => {
        const node = options.openNodes?.shift();
        if(node === undefined) {
            console.log('nao definido');
            throw new Error("node is undefined");
        }
        return node;
    };

    getMeta = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues):NodeElement|null => {
        if(currentNode.id === finalNode.id) {
            console.log('encontrou');
            options.metaNode = currentNode;
            return options.metaNode;
        }
        return null;
    };
    
    /**
     * Valida se executa a função de atribuição dos proximos nodos
     * @param currentNode nodo atual
     * @param finalNode nodo q espera-se alcançar
     * @param options dados associados ao grafo como um todo
     * @returns boolean
     */
    validateNextNodes = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues):boolean => {
        return true;
    };
    
    /**
     * Processamento anterior a atribuição do nodo ao array de nodos abertos
     * @param currentNode nodo atual
     * @param finalNode nodo q espera-se alcançar
     * @param options dados associados ao grafo como um todo
     */
    beforeAddOpenNodes = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues):void => {};
    
    /**
     * Logica de atribuição dos proximos nodos a serem visitados
     * @param currentNode 
     * @param options 
     */
    nextNodes = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues):void => {
        if(!this.validateNextNodes(currentNode, finalNode, options)) {
            return;
        }
        currentNode.successors.forEach(nd=> {
            if((options.visitedNodes?.find(e => e.id === nd.id) == null) && (options.openNodes?.find(e => e.id === nd.id) == null)) {
                if(nd.predecessor == null){
                    nd.predecessor = currentNode;
                }
                this.beforeAddOpenNodes(nd, finalNode, options);
                options.openNodes?.push(nd);
            }
        });
    };

    
    search = async (initialNode:NodeElement, finalNode:NodeElement, nodes:NodeElement[], nodeOptions:NodeValues|null=null):Promise<NodeValues> => {
        /**
         * Basicamente o q muda entre a busca em largura e a busca em profundidade é o modo como se recupera
         * os nodos abertos
         */
        if(initialNode.id === finalNode.id) {
            // se nodo inicial é o mesmo q o final não é necessário realizar toda a logica de busca
            const opt = {
                nodes,
                openNodes: [],
                visitedNodes: [],
                metaNode: initialNode,
                currentNode: null,
                solutionPath: [],
                searchComplete: true
            };
            this.notify(opt);
            return opt;
        }
        let options:NodeValues = {
            currentNode:null,
            nodes,
            openNodes: [initialNode],
            visitedNodes: [],
            metaNode: null,
            solutionPath:[],
            searchComplete: false
        };
        if(nodeOptions != null) {
            options = nodeOptions;
        }
        while(options.openNodes.length>0) {
            console.log('procurando');
            const crrNode = this.getCurrentNode(options);
            options.currentNode = crrNode;

            const hasMeta = this.getMeta(crrNode, finalNode, options);
            if(hasMeta != null) {
                options.visitedNodes.push(crrNode);
                break;
            }
            this.nextNodes(crrNode, finalNode, options);
            if(options.visitedNodes.find(e => e.id === crrNode.id) == null) {
                options.visitedNodes.push(crrNode);
            }
            this.notify({
                event: {
                    type: 'updateiteratednodes'
                },
                ...options
            });
            await this.sleep(this.sleepTime);
        }
        options.searchComplete = true;
        this.notify({
            event: {
                type: 'updateiteratednodes'
            },
            ...options
        });
        if(options.metaNode == null) {
            console.log('não encontrou');
        }
        return options;
    };
}

export default Graph;