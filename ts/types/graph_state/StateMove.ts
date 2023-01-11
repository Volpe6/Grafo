import Mode from "../../enums/Mode";
import GraphContext from "../../interfaces/GraphContext";
import State from "../../interfaces/State";


class StateMove implements State {
    context: GraphContext;
    mode:Mode = Mode.Move;

    constructor(context:GraphContext) {
        this.context = context;
        this.context.changeCursorStyle('grab');
    }
    
    click = (data:any):void => {
        this.context.clearOpenAndVisitedNodes();
    };

    mouseDown = (data:any):void => {
        this.context.changeCursorStyle('grabbing');
        const position = data.getTranformedPoint(data.event);
        const findNode = this.context.getNodeOfPosition(position);
        this.context.setSelectedNode(findNode);
        this.context.addNodeInLastPositionOfNodeArray(findNode);
    };

    mouseMove = (data:any):void => {
        if(this.context.getSelectedNode() === undefined) {
            return;
        }
        this.context.changeCursorStyle('grabbing');
        const position = data.getTranformedPoint(data.event);;
        this.context.getSelectedNode().updatePosition(position);
        this.context.updateNodes();
    };

    mouseUp = (data:any):void => {
        this.context.changeCursorStyle('grab');
        this.context.setSelectedNode(undefined);
    };

    wheel = (data:any):void => {};
}

export default StateMove;