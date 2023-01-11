import React, {  useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas';
import useCanvasPanFunctions from '../hooks/useCanvasPanFunctions';
import useDraw from '../hooks/useDraw';
import useGraphController from '../hooks/useGraphController';
import useMouseListener from '../hooks/useMouseListener';
import NodeElement, { RADIUS } from '../ts/types/NodeElement';
import OptionsButtonPanel from './OptionsButtonPanel';

function Canvas():JSX.Element {    

    const draw = useDraw();
    
    const { canvasRef } = useCanvas(render);
    const mouseListener = useMouseListener(canvasRef);
    const panCanvasListener = useCanvasPanFunctions(canvasRef);
    const controller = useGraphController({canvasRef});

    const firstRenderRef = useRef<boolean>(true);
    
    useEffect(()=>{
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        panCanvasListener.attach({id:'controller', update:controller.update});
        mouseListener.attach({id:'canvas', update:panCanvasListener.update});
        return () => {
            mouseListener.detach('canvas');
            panCanvasListener.detach('controller');
        };
    }, [canvasRef, controller.update, mouseListener, panCanvasListener]);

    function render(ctx:CanvasRenderingContext2D|null):void {
        
        controller.contextRef.current.visitedNodes?.forEach((node:NodeElement) => {
            draw.drawVoidCircle(ctx, RADIUS + 10, node.position, 'green');
        });

        let metadata = controller.contextRef.current.nodeValues?.metaNode;
        while (metadata!==undefined&&metadata!==null) {
            draw.drawVoidCircle(ctx, RADIUS + 15, metadata.position, 'red');
            metadata = metadata.predecessor;
        }

        /* primeiro desenha as conexoes depois desenha os nodos. é feito desse modo pois em
        alguns momentos as linhas podem acabar em cima dos nodos */
        controller.contextRef.current.graphNode.nodes?.forEach((parentNode: NodeElement) => {
            if (parentNode.successors.length > 0) {
                /* nessa parte de baixo esta sendo executada duas vezes, uma para o nodo atual e uma
                para o filho, tem q corrgir isso. Tipo como esta implementado hj, todos sao filhos de todos,
                entao uma vez q caia nessa condição de desenho pelo outro nodo, essa parte sera executada novamente
                sem necessidade. Ex.: tem o nodo "A" e "B", "A" tem "B" como sucessor e vise versa, entao vc ja
                entende q essa parte sera executa mais de uma vez */
                // desenha as conexoes
                parentNode.successors.forEach(node => {
                    draw.drawLine(ctx, parentNode.position, node.position);
                    const x = node.position.x - parentNode.position.x;
                    const y = node.position.y - parentNode.position.y;
                    const nodeDistance = Math.round(Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2))));

                    const xMidpoint = (node.position.x + parentNode.position.x) / 2;
                    const yMidpoint = (node.position.y + parentNode.position.y) / 2;

                    draw.drawText(ctx, `${nodeDistance}`, { x: xMidpoint, y: yMidpoint - 10 });
                });
            }
        });
        controller.contextRef.current.graphNode.nodes?.forEach((parentNode: NodeElement) => {
            const label = parentNode.id.substring(parentNode.id.length - 5, parentNode.id.length);
            draw.drawFillCircle(ctx, RADIUS, parentNode.position);
            draw.drawVoidCircle(ctx, RADIUS, parentNode.position);
            draw.drawText(ctx, label, parentNode.position);
        });
    };

    return <>
        <OptionsButtonPanel controller={controller} />
        <div>
            <canvas className='w-full h-full' ref={canvasRef}/>
        </div>
    </>;
}

export default Canvas;