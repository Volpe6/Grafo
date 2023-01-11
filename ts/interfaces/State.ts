import Mode from "../enums/Mode";
import GraphContext from "./GraphContext";

interface State {
    context:GraphContext,
    mode:Mode,
    mouseDown:Function,
    mouseMove:Function,
    mouseUp:Function,
    click:Function,
    wheel:Function
}

export default State;