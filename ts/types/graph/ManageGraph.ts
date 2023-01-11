import SearchType from "../../enums/SearchType";
import NodeElement from "../NodeElement";
import BidirecionalSearch from "./BidirecionalSearch";
import BreadthSearch from "./BreadthSearch";
import DepthSearch from "./DepthSearch";
import DepthSearchWithMaxDepth from "./DepthSearchWithMaxDepth";
import DepthSearchWithMaxDepthProgressive from "./DepthSearchWithMaxDepthProgressive";
import Graph from "./Graph";

class ManageGraph {
    currentSearch:Graph | undefined;

    constructor(searchType:SearchType) {
        this.setSearch(searchType);
    }
    
    setSearch = (searchType:SearchType):void => {
        switch(searchType) {
        case SearchType.breadthSearch:
            this.currentSearch = new BreadthSearch();
            break;
        case SearchType.depthSearch:
            this.currentSearch = new DepthSearch();
            break;
        case SearchType.depthSearchWithMaxDepth:
            this.currentSearch = new DepthSearchWithMaxDepth();
            break;
        case SearchType.depthSearchWithMaxDepthProgressive:
            this.currentSearch = new DepthSearchWithMaxDepthProgressive();
            break;
        case SearchType.bidirecionalSearch:
            this.currentSearch = new BidirecionalSearch();
            break;
        default:
            alert(`nao foi encontrada a busca para o tipo informado`);
            break;
        }
    };

    search = async (initialNode:NodeElement, finalNode:NodeElement, nodes:NodeElement[], maxDepth:number, sleepTime:number):Promise<void> => {
        if(this.currentSearch === undefined) {
            alert('tipo da busca não foi definida');
            return;
        }
        this.currentSearch.maxDepth = maxDepth;
        this.currentSearch.sleepTime = sleepTime;
        await this.currentSearch.search(initialNode, finalNode, nodes);
    };
}

export default ManageGraph;