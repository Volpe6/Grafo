import Position from "../interfaces/Position";

const RADIUS = 20;

class NodeElement {

    id:String;
    position:Position;
    successors:NodeElement[];
    predecessor:NodeElement|null;
    depth:number;
    
    constructor(id:any, position:Position, successors:NodeElement[]=[], predecessor:NodeElement|null=null, depth:number=0) {
        this.id = id;
        this.position = position;
        this.successors = successors;
        this.predecessor = predecessor;
        this.depth = depth;
    }

    updatePosition = (position:Position):void => {
        this.position = position;
    };

    isMouseOverNode = (mousePosition:Position):boolean => {
        const top = this.position.y - RADIUS;
        const bottom = this.position.y + RADIUS;
        const left = this.position.x - RADIUS;
        const right = this.position.x + RADIUS;

        if((mousePosition.x>left)&&(mousePosition.x<right)&&(mousePosition.y>top)&&(mousePosition.y<bottom)) {
            return true;
        }
        return false;
    };

    removeSuccessor = (node:NodeElement):void => {
        const index = this.successors.indexOf(node);
        if(index !== -1) {
            this.successors.splice(index, 1);
        }
    };
}

export default NodeElement;

export {RADIUS};