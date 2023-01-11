import { parse, stringify } from "flatted";
import Position from "../../interfaces/Position";
import NodeElement from "../NodeElement";

class GraphNodeList {
    nodes:NodeElement[];

    constructor(nodes:NodeElement[]=[]) {
        this.nodes = nodes;
    }

    updateNodes = (nodes:NodeElement[]|null=null):void => {
        if(nodes===null) {
            return;
        }
        this.nodes = nodes;
    };
    
    add = (node:NodeElement):void => {
        this.nodes.push(node);
    };
    
    remove = (node:NodeElement|null):void => {
        if(node === null) {
            console.log('node nulo');
            return;
        }
        const index = this.nodes.indexOf(node);
        if(index !== -1) {
            this.nodes.splice(index, 1);
        }
    };

    getNodeOfPosition = (position:Position):NodeElement|undefined => {
        return this.nodes.find(node=>node.isMouseOverNode(position));
    };

    /**
     * Nao clona o obj NodeElement por inteiro, por exemplo, o metodo "isMouseOver" não é copiado
     */
    simpleClone = ():NodeElement[] => {
        /**
         * "parse(stringify(this.nodes))" é um hack pra fazer uma copia profunda. Por algum motivo alguns atrinutos
         * do node nao estao sendo clonados, como: "isMouseOver". Entao cuidado ao usar um atributos do array clonado, 
         * pode dar algum erro
         */
        let clone = parse(stringify(this.nodes));
        if(clone === undefined) {
            clone = [];
        }
        return clone;
    };

    deepArrayNodesCopy = (nodes:NodeElement[]):NodeElement[] => {
        const nNodes = nodes.map(nd=>new NodeElement(nd.id, nd.position));

        return nodes.map(nd=>{
            const newNode = nNodes.find(n=>n.id === nd.id);

            for (let i = 0; i < nd.successors.length; i++) {
                /*
                percorre todos os sucessores do nodo atual, e para cada um, 
                adiciona o nodo atual como sucessor. Como todos os nodos seram percorridos,
                na vez que o nodo atual for um sucessor, os seus sucessores serao populados com o nodo
                da vez, isso funciona por que quando ha uma conexao com os nodos, ambos os nodos possuem
                uma representacao de cada noso. Suponha q haja dois nodos: n e m, quando for feita uma conexao entre
                eles, sera algo assim: n->m, m->n, assim cada nodo tem uma representação do outro.
                Essa logica funciona pq na implementação atual o grafo é bidirecional
                */
                let successor = nd.successors[i];
                // recupera o nodo da lista criada anteriormente
                successor = nNodes.find(n=>n.id === successor.id) as NodeElement;
                const findNode = successor.successors.find(n=>n.id === newNode?.id);
                if(findNode === undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    successor.successors.push(newNode!);
                }
            }
            
            return newNode as NodeElement;
        });
    };
}

export default GraphNodeList;