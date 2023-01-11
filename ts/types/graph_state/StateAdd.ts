import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";
import NodeElement from "../NodeElement";

class StateAdd implements State {
    context: GraphContext;
    mode:Mode = Mode.Add;

    constructor(context:GraphContext) {
        this.context = context;
        this.context.changeCursorStyle('url(/mouse_add_icon.png), auto');
    }

    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };
    
    mouseDown = (data:any):void => {
        const newNode = new NodeElement(`${new Date().getTime()}`, data.getTranformedPoint(data.event));
        this.context.addNode(newNode);
    };

    mouseMove = (data:any):void => {};

    mouseUp = (data:any):void => {};

    wheel = (data:any):void => {};
}

export default StateAdd;