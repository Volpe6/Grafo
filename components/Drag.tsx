import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Position from '../ts/interfaces/Position';

interface Props {
    children: ReactNode,
    position?: any
}
function Drag({ children, position = { x: 50, y: 50 } }: Props):JSX.Element {

    const containerRef = useRef<HTMLDivElement>(null);
    const [startDrag, setStartDrag] = useState<Position>({ x: 0, y: 0 });
    const [drag, setDrag] = useState<boolean>(false);

    const getPosition = (e: any): Position => {
        return { x: e.clientX, y: e.clientY };
    };

    useEffect(() => {
        const resizeCanvas = ():void => {
            const container = containerRef.current;
            if(container === null) {
                return;
            }
            const { innerWidth, innerHeight } = window;
            container.style.left = `${(container.offsetLeft*100)/innerWidth}%`;
            container.style.top = `${(container.offsetTop*100)/innerHeight}%`;
        };
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const dragStart = (e: any):void => {
        const position = getPosition(e);
        setDrag(true);
        setStartDrag(position);
    };

    const dragMove = (e: any):void => {
        if (!drag) return;
        const container = containerRef.current;
        if(container === null) {
            return;
        }
        const position = getPosition(e);
        position.x = startDrag.x - position.x;
        position.y = startDrag.y - position.y;
        setStartDrag(getPosition(e));
        container.style.top = `${(container.offsetTop - position.y)}px`;
        container.style.left = `${(container.offsetLeft - position.x)}px`;
    };

    const dragEnd = (e: any):void => {
        setDrag(false);
    };

    return (
        <div
            ref={containerRef}
            style={{
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                top: `${position.y}%`,
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                left: `${position.x}%`
            }}
            onMouseDown={dragStart}
            onMouseMove={dragMove}
            onMouseUp={dragEnd}
            className={`absolute cursor-move hover:z-50 translate-x-[-50%] translate-y-[-50%]`}>
            {children}
        </div>
    );
}

export default Drag;