import { useEffect, useRef } from 'react';
import Observer from '../ts/interfaces/Observer';

function useMouseListener (targetRef:any=null): any {
    const observersRef = useRef<Observer[]>([]);

    useEffect(() => {
        function handleMouse(e: MouseEvent):void {
            notify(e);
        }
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const finalTarget = targetRef.current || document;
        finalTarget.addEventListener('mousedown', handleMouse);
        finalTarget.addEventListener('mousemove', handleMouse);
        finalTarget.addEventListener('wheel', handleMouse);
        finalTarget.addEventListener('click', handleMouse);
        document.addEventListener('mouseup', handleMouse);
        return () => {
            finalTarget.removeEventListener('mousedown', handleMouse);
            finalTarget.removeEventListener('mousemove', handleMouse);
            finalTarget.removeEventListener('wheel', handleMouse);
            finalTarget.removeEventListener('click', handleMouse);
            document.removeEventListener('mouseup', handleMouse);
        };
    }, [targetRef]);

    const attach = (obs:Observer):void => {
        observersRef.current.push(obs);
    };

    const detach = (id:number):void => {
        observersRef.current = observersRef.current.filter(obs=>obs.id!==id);
    };

    const notify = (data:any):void => {
        observersRef.current.forEach((obs:Observer) => obs.update(data));
    };

    return { attach, detach };
}   

export default useMouseListener;