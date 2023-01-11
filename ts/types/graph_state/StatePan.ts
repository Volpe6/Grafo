import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";


class StatePan implements State {
    context: GraphContext;
    mode:Mode = Mode.Pan;

    constructor(context:GraphContext) {
        this.context = context;
        this.context.changeCursorStyle('move');
    }

    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };
    
    mouseDown = (data:any):void => {
        data.dragStart(data.event);
    };

    mouseMove = (data:any):void => {
        data.panMove(data.event);
    };

    mouseUp = (data:any):void => {
        data.dragEnd(data.event);
    };

    wheel = (data:any):void => {};
}

export default StatePan;