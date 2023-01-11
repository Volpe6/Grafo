import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";

class StateZoom implements State {
    context: GraphContext;
    mode:Mode = Mode.Zoom;

    constructor(context:GraphContext) {
        this.context = context;
        this.context.changeCursorStyle('zoom-in');
    }

    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };

    mouseDown = (data:any):void => {};

    mouseMove = (data:any):void => {};

    mouseUp = (data:any):void => {};

    wheel = (data:any):void => {
        this.context.changeCursorStyle(data.zoomFactorRef.current>1?'zoom-in':'zoom-out');
        data.handleZoom(data.event);
    };
}

export default StateZoom;