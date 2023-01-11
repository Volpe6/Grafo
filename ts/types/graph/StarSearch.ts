import Graph from "./Graph";

class StarSearch extends Graph {
    // search = async (initialNode:NodeElement, finalNode:NodeElement, nodes:NodeElement[], nodeOptions:NodeValues|null=null):Promise<NodeValues> => {
    //     if(initialNode.id === finalNode.id) {
    //         // se nodo inicial é o mesmo q o final não é necessário realizar toda a logica de busca
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
    //     const pq = new PriorityQueue();
    //     pq.enqueue(initialNode, 0);
    //     const options:NodeValues = {
    //         currentNode:null,
    //         nodes: nodeList.getNodes(),
    //         openNodes: [initialNode],
    //         visitedNodes: Array<NodeElement>(),
    //         metaNode: null,
    //         solutionPath:Array<NodeElement>()
    //     };
    //     while(pq.items.length>0) {
    //         console.log('procurando');
    //         const crr = pq.dequeueMin();
    //         options.currentNode = crr?.element;
    //         // checando se é meta
    //         if(crr!.element.id === finalNode.id) {
    //             console.log('encontrou');
    //             options.metaNode = crr!.element;
    //             break;
    //         }
    //         crr!.element.successors.forEach((nd:NodeElement)=> {
    //             const x  = nd.position.x - crr!.element.position.x;
    //             const y  = nd.position.y - crr!.element.position.y;
    //             const nodeDistance = Math.round(Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2))));
                
    //             if((options.visitedNodes!.find(e => e.id === nd.id) == null) && (pq.items.find(e=>e.element.id === nd.id) == null)) {
    //                 if(nd.predecessor == null){
    //                     nd.predecessor = crr!.element!;
    //                 }
    //                 pq.enqueue(nd, nodeDistance);
    //             } else if(pq.items.find(e=>e.element.id === nd.id) != null) {
    //                 const index = pq.items.indexOf(pq.items.find(e=>e.element.id === nd.id)!);
    //                 if(index !== -1) {
    //                     pq.items.splice(index, 1);
    //                 }
    //                 pq.enqueue(nd, nodeDistance);
    //             }
    //         });
    //         options.visitedNodes!.push(crr!.element);
    //         options.openNodes = pq.items.map(e=>e.element);
    //         // notifyVisited(options);
    //         await sleep(1000);
    //     }
    //     // notifyVisited(options);
    //     if(options.metaNode == null) {
    //         alert('não encontrou');
    //         console.log('não encontrou');
    //     }
    //     return options;
    // };
}

export default StarSearch;