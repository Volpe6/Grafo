import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";
import NodeElement from "../NodeElement";

class StateConnect implements State {
    context: GraphContext;
    mode:Mode = Mode.Conect;

    constructor(context:GraphContext ) {
        this.context = context;
        this.context.changeCursorStyle('url(/mouse_link_icon.png), auto');
    }

    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };

    mouseDown = (data:any):void => {
        const position = data.getTranformedPoint(data.event);
        /**
         * O modo como foi implementado torna a conexao dos nodos bidirecional,
         * ou seja, a conexao entre os nodos é uma via de mão dupla
         */
        if(this.context.getSelectedNode() === undefined) {
            // para conectar os nodos primeiro tem q ter um nodo selecionado
            this.context.setSelectedNode(this.context.getNodeOfPosition(position
            ));
            return;
        }
        const prevSelectedNode:NodeElement = this.context.getSelectedNode();
        this.context.setSelectedNode(undefined);
        // em seguida obtem-se o segundo nodo
        const findNode = this.context.getNodeOfPosition(position);
        if(findNode === undefined || findNode === null) {
            return;
        }
        if(findNode.id === prevSelectedNode.id) {
            alert('não é possível conectar um nodo a si mesmo');
            return;
        }
        if(findNode.successors.length>0 && (Boolean(findNode.successors.find((node:NodeElement) => node.id === prevSelectedNode.id)))) {
            alert('Os nodos selecionados ja estao conectados');
            return;
        }
        findNode.successors.push(prevSelectedNode);
        prevSelectedNode.successors.push(findNode);
        this.context.updateNodes();
    };

    mouseMove = (data:any):void => {};

    mouseUp = (data:any):void => {};

    wheel = (data:any):void => {};
}

export default StateConnect;