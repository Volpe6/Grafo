import Position from "../ts/interfaces/Position";

function useDraw():any {
    const drawText = (ctx: CanvasRenderingContext2D, text:string, position:Position):void => {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, position.x, position.y);
    };

    const drawFillCircle = (ctx: CanvasRenderingContext2D, radius:number, position:Position):void => {
        ctx.beginPath();
        ctx.lineWidth   = 1;
        ctx.fillStyle   = 'white';
        ctx.arc(position.x, position.y, radius, 0, 2*Math.PI);
        ctx.fill();
    };

    const drawVoidCircle = (ctx: CanvasRenderingContext2D, radius:number, position:Position, color:string='black'):void => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.arc(position.x, position.y, radius, 0, 2*Math.PI);
        ctx.stroke();
    };

    const drawLine = (ctx: CanvasRenderingContext2D, positionInitial:Position, positionfinal:Position):void => {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';
        ctx.moveTo(positionInitial.x, positionInitial.y);
        ctx.lineTo(positionfinal.x, positionfinal.y);
        ctx.stroke();
    };

    return { drawFillCircle, drawVoidCircle, drawText, drawLine };
};

export default useDraw;