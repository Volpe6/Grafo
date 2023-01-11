
/**
 * referencia: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
 */
import { useRef, useEffect, useCallback } from 'react';

const useAnimationFrame = (animation:CallableFunction):void => {
    // const requestRef = useRef<number>();
    const previusTimeRef = useRef<number>();

    const animate = useCallback((time:number):void => {
        if(previusTimeRef.current !== undefined) {
            const deltaTime = time-previusTimeRef.current;
            animation(deltaTime);
        }
        previusTimeRef.current = time;
        requestAnimationFrame(animate);
    }, [animation]);

    useEffect(() => {
        // requestRef.current = requestAnimationFrame(animate);
        // return () => cancelAnimationFrame(requestRef.current!);
        const id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    },[animate]);
};

export default useAnimationFrame;