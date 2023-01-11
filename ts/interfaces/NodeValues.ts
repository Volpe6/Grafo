import NodeElement from "../types/NodeElement";

interface NodeValues {
    nodes: NodeElement[],
    visitedNodes: NodeElement[]
    openNodes: NodeElement[],
    metaNode: NodeElement|null,
    currentNode:NodeElement|null,
    solutionPath:NodeElement[],
    searchComplete:boolean
}

export default NodeValues;