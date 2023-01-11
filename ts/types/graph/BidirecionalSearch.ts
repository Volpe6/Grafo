// import NodeValues from "../../interfaces/NodeValues";
// import Observer from "../../interfaces/Observer";
// import NodeElement from "../NodeElement";
import Graph from "./Graph";

class BidirecionalSearch extends Graph {
    description:any = {
        title: 'Busca Bidirecional',
        info: 'A busca bidirecional começa pelo vértice inicial e final definidos pelo usuário. Nessa implementação é iniciado duas buscas em largura, uma começando no vértice inicial e outra no final, quando encontrado um vértice em comum entre ambas  as buscas, a busca é finalizada.',
        sources: [
            'eu'
        ]
    };
    
    /**
     * Rever toda a logica do modo q foi feito ta entrando em loop
     */
    // search = async (initialNode:NodeElement, finalNode:NodeElement, nodes:NodeElement[], nodeOptions:NodeValues|null=null):Promise<NodeValues> => {
    //     const notify = (values:NodeValues):void => {
    //         if(values.currentNode != null) {
    //             sharedNodeValues.visitedNodes?.push(values.currentNode);
    //         }
    //         // removendo os q ja foram visitados
    //         sharedNodeValues.openNodes = sharedNodeValues.openNodes.filter(nd => {
    //             return (sharedNodeValues.visitedNodes?.find(it => it.id === nd.id)) == null;
    //         });
    //         // removendo os q ja estao na lista
    //         const openNodes = values.openNodes.filter(nd => {
    //             return (sharedNodeValues.openNodes?.find(it => it.id === nd.id)) == null;
    //         });
    //         // concatenando os dois arrays de abertos
    //         sharedNodeValues.openNodes = [...sharedNodeValues.openNodes, ...openNodes];
    //         if(values.solutionPath!=null && values.solutionPath.length > 0) {
    //             sharedNodeValues.solutionPath = [...sharedNodeValues.solutionPath, ...values.solutionPath];
    //         }
    //         sharedNodeValues.searchComplete = values.searchComplete;
    //         this.observers.forEach((obs:Observer) => obs.update({
    //             event: {
    //                 type: 'updateiteratednodes'
    //             },
    //             ...sharedNodeValues
    //         }));
    //     };
    //     // arrays 
    //     const n1:NodeElement[] = nodes;
    //     const n2:NodeElement[] = [...nodes];
    //     // nodos inciais e finais
    //     const initial1 = n1.find(n=>n.id===initialNode.id);
    //     const final1 = n1.find(n=>n.id===finalNode.id);
    //     const initial2 = n2.find(n=>n.id===initialNode.id);
    //     const final2 = n2.find(n=>n.id===finalNode.id);

    //     if(initial1 === undefined || final1 === undefined || initial2 === undefined || final2 === undefined) {
    //         const opt = {
    //             nodes,
    //             openNodes: [],
    //             visitedNodes: [],
    //             metaNode: initialNode,
    //             currentNode: null,
    //             solutionPath: [],
    //             searchComplete: true
    //         };
    //         this.notify(opt);
    //         return opt;
    //     }

    //     const sharedNodeValues:NodeValues = {
    //         nodes:n1,
    //         openNodes: [initial1],
    //         visitedNodes: [],
    //         metaNode: null,
    //         currentNode: null,
    //         solutionPath: [],
    //         searchComplete: false
    //     };

    //     const firstOptions:NodeValues = {
    //         nodes:n1,
    //         openNodes: [initial1],
    //         visitedNodes: [],
    //         metaNode: null,
    //         currentNode: null,
    //         solutionPath: [],
    //         searchComplete: false
    //     };
    //     const secondOptions:NodeValues = {
    //         nodes: n2,
    //         openNodes: [final2],
    //         visitedNodes: [],
    //         metaNode: null,
    //         currentNode: null,
    //         solutionPath: [],
    //         searchComplete: false
    //     };
    //     const firstGraph = new Graph(); 
    //     firstGraph.sleepTime = this.sleepTime;
    //     const secondGraph = new Graph(); 
    //     secondGraph.sleepTime = this.sleepTime;
    //     firstGraph.notify = (options:NodeValues) => {
    //         notify(options);
    //     };
    //     secondGraph.notify = (options:NodeValues) => {
    //         notify(options);
    //     };
    //     firstGraph.getMeta = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues) => {
    //         const commomNode = firstOptions.visitedNodes?.find(nd=>{
    //             return secondOptions.visitedNodes?.find(n=>n.id === nd.id);
    //         });
    //         if(commomNode != null) {
    //             options.metaNode = commomNode;
    //             console.log('se encontraram grafo 1');
    //             return options.metaNode;
    //         }
    //         return null;
    //     };
    //     secondGraph.getMeta = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues) => {
    //         const commomNode = secondOptions.visitedNodes?.find(nd=>{
    //             return firstOptions.visitedNodes?.find(n=>n.id === nd.id);
    //         });
    //         if(commomNode != null) {
    //             options.metaNode = commomNode;
    //             console.log('se encontraram grafo 2');
    //             return options.metaNode;
    //         }
    //         return null;
    //     };
    //     void firstGraph.search(initial1, final1, n1, firstOptions).then((options:NodeValues) => {
    //         const solutionPath = [];
    //         let node = options.metaNode;
    //         while(node != null) {
    //             solutionPath.push(node);
    //             node = node.predecessor;
    //         }
    //         options.currentNode = null;
    //         options.solutionPath = solutionPath ;
    //         notify(options);
    //     });
    //     void secondGraph.search(final2, initial2, n2, secondOptions).then((options:NodeValues) => {
    //         const solutionPath = [];
    //         let node = options.metaNode?.predecessor;
    //         while(node != null) {
    //             solutionPath.push(node);
    //             node = node.predecessor;
    //         }
    //         options.currentNode = null;
    //         options.solutionPath = solutionPath;
    //         console.log(options);
    //         notify(options);
    //     });
    //     return sharedNodeValues;
    // };
}

export default BidirecionalSearch;