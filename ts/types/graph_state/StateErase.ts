import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";
import NodeElement from "../NodeElement";


class StateErase implements State {
    context: GraphContext;
    mode:Mode = Mode.Erase;

    constructor(context:GraphContext) {
        this.context = context;
        this.context.changeCursorStyle('url(/mouse_erase_icon.png), auto');
    }

    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };
    
    mouseDown = (data:any):void => {
        const position = data.getTranformedPoint(data.event);
        const findNode = this.context.getNodeOfPosition(position);
        if(findNode === undefined) {
            return;
        }
        findNode.successors.forEach((node:NodeElement)=>node.removeSuccessor(findNode));
        this.context.removeNode(findNode);
    };

    mouseMove = (data:any):void => {};

    mouseUp = (data:any):void => {};

    wheel = (data:any):void => {};
}

export default StateErase;