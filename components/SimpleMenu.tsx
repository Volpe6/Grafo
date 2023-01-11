import React, { ReactNode } from 'react';
import Position from '../ts/interfaces/Position';
import Drag from './Drag';

interface Props {
    title: string,
    show: boolean,
    toogleVisibility: Function,
    children: ReactNode,
    position?: Position
}

function SimpleMenu({title, toogleVisibility, show, position, children}:Props):JSX.Element|null {
  
    if (!show) return null;

    return (
        <Drag position={position}>
            <div className='opacity-20 hover:opacity-100 w-[300px] h-fit rounded border-solid border-2 border-black-500/100 shadow-xl bg-blue-500'>
                <header className='w-full p-4 dark:bg-blue-700 flex justify-between'>
                    <h1 className='text-white'>{title}</h1>
                    <span className='cursor-pointer' onClick={() => toogleVisibility(false)}>
                        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                    </span>
                </header>
                <div className='max-h-[500px] overflow-auto'>
                    {children}
                </div>
            </div>
        </Drag>
    );
}

export default SimpleMenu;