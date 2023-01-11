import { useRef } from 'react';
import Observer from '../ts/interfaces/Observer';
import Position from '../ts/interfaces/Position';

const useCanvasPanFunctions = (canvasReference:any, options:any={}):any => {
    
    const observersRef = useRef<Observer[]>([]);

    const canvasRef = canvasReference;
    const canvasOffsetRef = useRef<Position>({x:0, y:0});
    const startDragRef = useRef<Position>({x:0, y:0});
    const dragRef = useRef<boolean>(false);
    const scaleRef = useRef<number>(1);
    const zoomFactorRef = useRef<number>(1);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const MAX_ZOOM = 2 || options.maxZoom;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const MIN_ZOOM = .1 || options.minZoom;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const SCROLL_SENSITIVITY = 1000 || options.scrollSensitivity;

    const attach = (obs:Observer):void => {
        observersRef.current.push(obs);
    };

    const detach = (id:number):void => {
        observersRef.current = observersRef.current.filter(obs=>obs.id!==id);
    };

    const notify = (data:any):void => {
        observersRef.current.forEach((obs:Observer) => obs.update(data));
    };

    const update = (data:any):void => {
        notify({
            event: data,
            zoomFactorRef,
            getTranformedPoint,
            handleZoom,
            dragStart,
            dragEnd,
            panMove
        });
    };
  
    /**
   * Ponto com as correçoes de offset e escala
   */
    const getTranformedPoint = (e:any):DOMPoint => {
        const canvas = canvasRef.current;
        const point = new DOMPoint(e.offsetX, e.offsetY);
        const newPoint = canvas?.getContext('2d')?.getTransform().invertSelf().transformPoint(point);
        return newPoint??point;
    };

    const handleZoom = (e:any):void => {
        let zoomAmount = 1 - (e.deltaY/SCROLL_SENSITIVITY);
        zoomAmount = Math.min( zoomAmount, MAX_ZOOM );
        zoomAmount = Math.max( zoomAmount, MIN_ZOOM );
        scaleRef.current = scaleRef.current*zoomAmount;
        zoomFactorRef.current = zoomAmount;
    
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const position = getTranformedPoint(e);

        ctx?.translate(position.x, position.y);
        ctx?.scale(zoomAmount, zoomAmount);
        ctx?.translate(-position.x, -position.y);
    };

    const dragStart = (e:any):void => {
        const position = getTranformedPoint(e);
        dragRef.current = true;
        startDragRef.current = position;
    };

    const dragEnd = (e:any):void => {
        dragRef.current = false;
    };

    const panMove = (e:any):void => {
        if(!dragRef.current) return;
        const position = getTranformedPoint(e);
        position.x = position.x-startDragRef.current.x;
        position.y = position.y-startDragRef.current.y;
        canvasOffsetRef.current = position;
    
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        ctx?.translate( position.x, position.y );
    };

    return {dragRef, zoomFactorRef, getTranformedPoint, handleZoom, dragStart,dragEnd, panMove, attach, detach, update};
};

export default useCanvasPanFunctions;