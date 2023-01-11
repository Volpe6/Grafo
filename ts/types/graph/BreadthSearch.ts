import Graph from "./Graph";

class BreadthSearch extends Graph {
    description:any = {
        title: 'Busca em Largura',
        info: 'A busca em largura começa por um vértice, digamos s, especificado pelo usuário.  O algoritmo visita s, depois visita todos os vizinhos de s, depois todos os vizinhos dos vizinhos, e assim por diante. O algoritmo numera os vértices, em sequência, na ordem em que eles são descobertos (ou seja, visitados pela primeira vez).',
        sources: [
            'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/bfs.html'
        ]
    };
}

export default BreadthSearch;