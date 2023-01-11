import React, { ReactNode, useRef } from 'react';

interface Props {
    children: ReactNode,
    tooltip?: string
}

function ToolTip({ children, tooltip }: Props):any {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const handleMouseEnter = (e:any):void => {
        const tooltip = tooltipRef.current;
        const container = containerRef.current;
        if((tooltip == null) || (container == null)) return;
        const { left } = container.getBoundingClientRect();
        tooltip.style.left = `${(e.clientX - left)}px`;
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            className='group relative inline-block'
        >
            {children}
            <span ref={tooltipRef} className='invisible z-50 group-hover:visible opacity-0 group-hover:opacity-100 transition bg-slate-800 text-white p-1 rounded absolute top-full mt-1 whitespace-nowrap'>
                {tooltip}
            </span>
        </div>
    );
}

export default ToolTip;