import { useEffect, useRef } from 'react';
import useAnimationFrame from './useAnimationFrame';

const useCanvas = (draw:Function, options:any={}):any => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dragRef = useRef<boolean>(false);

    useEffect(() => {
        const resizeCanvas = ():void => {
            const canvas = canvasRef.current;
            if(canvas === null) {
                return;
            }
            const ctx = canvas.getContext('2d');
            const { innerWidth, innerHeight } = window;
            if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
                const { devicePixelRatio:ratio=1 } = window;
                canvas.width = innerWidth*ratio;
                canvas.height = innerHeight*ratio;
                ctx?.scale(ratio, ratio);
            }
        };
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    },[]);

    useAnimationFrame((deltaTime:number) => {
        // console.log(deltaTime)
        /**
         * Um explicação do pq nao estava funcionando como eu esperava. 
         * https://stackoverflow.com/questions/62648501/state-is-unchanged-from-within-a-function-returned-by-a-hook
         * Basicamente ainda nao compreendi muito bem como o react lida com o useState
         */
        const canvas = canvasRef.current;
        
        if(canvas===null) {
            return;
        }

        const ctx = canvas?.getContext('2d');
  
        /**
         * Essa parte é para conseguir limpar todo o canvas apos uma translação.
         * fontes:
         * https://stackoverflow.com/questions/11144193/html5-translate-method-how-to-reset-to-default
         * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
         * https://roblouie.com/article/617/transforming-mouse-coordinates-to-canvas-coordinates/#secret-sauce
         */
        ctx?.save();
        ctx?.setTransform(1,0,0,1,0,0);
        ctx?.clearRect(0,0, canvas.width, canvas.height);
        ctx?.restore();

        draw(ctx);
    });
  

    return {canvasRef, dragRef};
};

export default useCanvas;