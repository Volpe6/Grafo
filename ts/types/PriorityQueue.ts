// import Element from "../interfaces/Element";

class PriorityQueue {
    // items:Array<Element> = [];
    minPriority:number = 9999;
    maxPriority:number = 0;

    // dequeueMin = () => {
    //     return this.items.shift();
    // }

    // dequeueMax = () => {
    //     return this.items.pop();
    // }

    // enqueue = (element:any, priority:number) => {
    //     const el = new Element(element, priority);
    //     if(el.priority<this.minPriority) {
    //        this.minPriority=el.priority;
    //        this.items.unshift(el);
    //        return;
    //     }
    //     if(el.priority>this.maxPriority) {
    //        this.maxPriority=el.priority;
    //        this.items.push(el);
    //        return;
    //     }
    //     this.items.push(el);
    //     let index = this.items.length - 1;
    //     const current = this.items[index];

    //     while (index > 0) {
    //         let parentIndex = Math.floor((index - 1) / 2);
    //         let parent = this.items[parentIndex];

    //         if (parent.priority <= current.priority) {
    //             this.items[parentIndex] = current;
    //             this.items[index] = parent;
    //             index = parentIndex;
    //         } else {
    //             break;
    //         };
    //     }
    // }
}

export default PriorityQueue;