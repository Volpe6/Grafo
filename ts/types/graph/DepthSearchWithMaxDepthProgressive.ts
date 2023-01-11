import NodeValues from "../../interfaces/NodeValues";
import Observer from "../../interfaces/Observer";
import NodeElement from "../NodeElement";
import DepthSearchWithMaxDepth from "./DepthSearchWithMaxDepth";
import Graph from "./Graph";

class DepthSearchWithMaxDepthProgressive extends Graph {
    maxDepth:number = 10;
    description:any = {
        title: 'Busca com Profundidade Progressiva',
        info: 'A busca com profundidade Progressiva começa por um vértice, digamos s, especificado pelo usuário.  O algoritmo visita s, em seguida se aprofunda até que o alvo da busca seja encontrado ou até encontrar um vétice que não possua mais filhos, nesse ponto a busca retrocede e começa no próximo vértice. A grande diferença aqui é que o usuário pode estabelecer um nível máx. de iteração iniciando do zero, a cada iteração o nível aumenta até o máx. definido.',
        sources: [
            'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/bfs.html',
            'https://pt.wikipedia.org/wiki/Busca_em_profundidade'
        ]
    };
    
    search = async (initialNode:NodeElement, finalNode:NodeElement, nodes:NodeElement[], nodeOptions:NodeValues|null=null):Promise<NodeValues> => {
        let result:NodeValues = {
            nodes,
            openNodes: [],
            visitedNodes: [],
            metaNode: initialNode,
            currentNode: null,
            solutionPath: [],
            searchComplete: false
        };
        const depthSearchWithMaxDepth = new DepthSearchWithMaxDepth();
        depthSearchWithMaxDepth.sleepTime = this.sleepTime;
        depthSearchWithMaxDepth.notify = (data:any):void => {
            if(depthSearchWithMaxDepth.maxDepth < this.maxDepth && data.metaNode == null) {
                data.searchComplete = false;
            }
            this.observers.forEach((obs:Observer) => obs.update(data));
        };
        for (let i:number = 0; i < this.maxDepth; i++) {
            depthSearchWithMaxDepth.maxDepth = i;
            result = await depthSearchWithMaxDepth.search(initialNode, finalNode, nodes);
            if(result.metaNode !== null) {
                break;
            }
        }
        if(result.metaNode === null) {
            result.searchComplete = true;
            this.notify({
                event: {
                    type: 'updateiteratednodes'
                },
                ...result
            });
        }
        return result;
    };
}

export default DepthSearchWithMaxDepthProgressive;