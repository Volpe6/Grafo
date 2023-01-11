import NodeValues from "./NodeValues";

interface GraphContext {
    canvasRef:any,
    nodeValues:NodeValues|undefined,
    changeCursorStyle:Function,
    clearOpenAndVisitedNodes:Function,
    printGrafo:Function,
    addNodeInLastPositionOfNodeArray:Function,
    getNodeOfPosition:Function,
    getSelectedNode:Function,
    setSelectedNode:Function,
    addNode:Function,
    removeNode:Function,
    updateNodes:Function,
    changeState:Function,
    updateiteratednodes:Function,
    mouseDown:Function,
    mouseMove:Function,
    mouseUp:Function,
    wheel:Function,
    click:Function,
}

export default GraphContext;