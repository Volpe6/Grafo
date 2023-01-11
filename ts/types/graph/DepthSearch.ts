import NodeValues from "../../interfaces/NodeValues";
import NodeElement from "../NodeElement";
import Graph from "./Graph";

class DepthSearch extends Graph {
    description:any = {
        title: 'Busca em Profundidade',
        info: 'A busca em profundidade começa por um vértice, digamos s, especificado pelo usuário.  O algoritmo visita s, em seguida se aprofunda até que o alvo da busca seja encontrado ou até encontrar um vétice que não possua mais filhos, nesse ponto a busca retrocede e começa no próximo vértice.',
        sources: [
            'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/bfs.html',
            'https://pt.wikipedia.org/wiki/Busca_em_profundidade'
        ]
    };

    getCurrentNode = (options: NodeValues):NodeElement => {
        const node = options.openNodes?.pop();
        if(node === undefined) {
            console.log('nao definido');
            throw new Error("node is undefined");
        }
        return node;
    };
}

export default DepthSearch;