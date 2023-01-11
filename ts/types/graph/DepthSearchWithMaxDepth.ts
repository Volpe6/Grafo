import NodeValues from "../../interfaces/NodeValues";
import NodeElement from "../NodeElement";
import Graph from "./Graph";

class DepthSearchWithMaxDepth extends Graph {
    maxDepth:number = 10;

    description:any = {
        title: 'Busca com Profundidade Máxima',
        info: 'A busca com profundidade máxima começa por um vértice, digamos s, especificado pelo usuário.  O algoritmo visita s, em seguida se aprofunda até que o alvo da busca seja encontrado ou até encontrar um vétice que não possua mais filhos, nesse ponto a busca retrocede e começa no próximo vértice. A grande diferença aqui é que o usuário pode estabelecer um nível máx. na profundidade que pode ser visitada no grafo. Nessa implementação o nível é definido em relação a distância do vértice atual ao vértice raiz',
        sources: [
            'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/bfs.html',
            'https://pt.wikipedia.org/wiki/Busca_em_profundidade'
        ]
    };

    getCurrentNode = (options:NodeValues):NodeElement => {
        const node = options.openNodes?.pop();
        if(node === undefined) {
            console.log('nao definido');
            throw new Error("node is undefined");
        }
        return node;
    };
    
    validateNextNodes = (currentNode: NodeElement, finalNode: NodeElement, options: NodeValues):boolean => {
        if(currentNode.depth<this.maxDepth) {
            return true;
        }
        return false;
    };

    beforeAddOpenNodes = (currentNode:NodeElement, finalNode:NodeElement, options:NodeValues):void => {
        if(currentNode.predecessor === null) {
            console.log('sem predecessor');
            throw new Error("without predecessor");
        }
        currentNode.depth = currentNode.predecessor.depth+1;
    };
}

export default DepthSearchWithMaxDepth;