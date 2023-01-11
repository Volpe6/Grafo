import React, { ReactNode } from 'react';
import ToolTip from './ToolTip';

interface Props {
    children: ReactNode,
    onClick: Function,
    active?: boolean,
    tooltip?: string
}

function CanvasButton({children, onClick, active=false, tooltip}:Props):JSX.Element {
    const handleClick = onClick;
    return (
        <ToolTip tooltip={tooltip}>
            <button
                onClick={e => handleClick(e)}
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                className={`mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800  rounded-lg p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ${active &&'ring-4 outline-none ring-blue-300'}`}
            >
                {children}
            </button>
        </ToolTip>
    );
}

export default CanvasButton;