import { stringify } from "flatted";
import GraphContext from "../../interfaces/GraphContext";
import NodeValues from "../../interfaces/NodeValues";
import Position from "../../interfaces/Position";
import State from "../../interfaces/State";
import GraphNodeList from "../graph/GraphNodeList";
import NodeElement from "../NodeElement";
import StatePan from "./StatePan";

class StateContext implements GraphContext {
    state:State;
    canvasRef:any;
    graphNode:GraphNodeList;
    selectedNode:NodeElement|undefined;
    visitedNodes: NodeElement[] = [];
    openNodes:NodeElement[] = [];
    nodeValues:NodeValues|undefined;

    constructor(canvasReference:any) {
        this.graphNode = new GraphNodeList();
        this.canvasRef = canvasReference;
        this.state = new StatePan(this);
    }

    changeCursorStyle = (cursor:String):void => {
        this.canvasRef.current.style.cursor = cursor;
    };

    printGrafo = ():void => {
        console.log(stringify(this.graphNode.nodes));
    };

    clearOpenAndVisitedNodes = ():void => {
        this.openNodes = [];
        this.visitedNodes = [];
        this.nodeValues = {
            nodes: [],
            openNodes: [],
            visitedNodes: [],
            metaNode: null,
            currentNode: null,
            solutionPath: [],
            searchComplete: true
        };
    };

    /**
     * TODO: procurar meio mais eficiente de realizar essa tarefa
     * Adiciona o nodo selecionado na ultima posição do array.
     * Isso é feito pq os nodos sao desenhados de modo sequencial, o q faz com q o ultimo nodo sempre
     * seja desenhado por cima dos outros, entao este metodo garante q o nodo selecionado seja desenhado 
     * acima dos demais nodos. So utilizado na função de movimento
     * @param node nodo a ser reposicionado
     */
    addNodeInLastPositionOfNodeArray = (node:NodeElement|null|undefined):void => {
        if(node == null) {
            return;
        }
        this.removeNode(node);
        this.addNode(node);
    };

    getNodeOfPosition = (position:Position):NodeElement|undefined => {
        return this.graphNode.getNodeOfPosition(position);
    };
    
    getSelectedNode = ():NodeElement|undefined => {
        return this.selectedNode;
    };

    setSelectedNode = (node:NodeElement|undefined):void => {
        this.selectedNode = node;
    };

    addNode = (node:NodeElement):void => {
        this.graphNode.add(node);
    };
    
    removeNode = (node:NodeElement):void => {
        this.graphNode.remove(node);
    };

    updateNodes = (nodes:NodeElement[]|null=null):void => {
        this.graphNode.updateNodes(nodes);
    };

    changeState = (state:State):void => {
        this.state = state;
    };

    updateOpenNodes = (nodes:NodeElement[]):void => {
        this.openNodes = nodes;
    };
    
    updateVisitedNodes = (nodes:NodeElement[]):void => {
        this.visitedNodes = nodes;
    };

    updateiteratednodes = (data:any):void => {
        if(data.searchComplete as boolean) {
            if(data.metaNode == null) {
                alert('não encontrou');
                return;
            }
            alert('encontrou');
        }
        this.nodeValues = data;
        this.updateOpenNodes(data.openNodes);
        this.updateVisitedNodes(data.visitedNodes);
    };

    mouseDown = (data:any):void => {
        this.state.mouseDown(data);
    };

    mouseMove = (data:any):void => {
        this.state.mouseMove(data);
    };

    mouseUp = (data:any):void => {
        this.state.mouseUp(data);
    };

    wheel = (data:any):void => {
        this.state.wheel(data);
    };

    click = (data:any):void => {
        this.state.click(data);
    };
}

export default StateContext;