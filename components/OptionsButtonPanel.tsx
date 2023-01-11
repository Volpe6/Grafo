import React, { useEffect, useRef, useState } from 'react';
import Mode from '../ts/enums/Mode';
import CanvasButton from './CanvasButton';
import SearchOptions from './SearchOptions';

interface Props {
    controller: any,
}

function OptionsButtonPanel({ controller }: Props):JSX.Element {
    
    const [showSearchOptions, setShowSearchOptions] = useState<boolean>(false);
    const [mode, setMode] = useState<Mode>();

    const firstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        controller.attach({id:'buttonsPanel', update: (data:any) => {
            setMode(data.mode);
        }});
        return () => controller.detach('buttonsPanel');
    });
    
    return (
        <>
            <SearchOptions show={showSearchOptions} toogleVisibility={setShowSearchOptions} controller={controller}/>
            <div className='fixed'>
                <div className='absolute z-50 bg-blue-500 p-2 md:space-y-2 rounded border-solid border-2 border-black-500/100 shadow-xl'>
                    {/* <CanvasButton 
                        active={false}
                        tooltip='print grafo' 
                        onClick={() => controller.contextRef.current?.printGrafo()}>
                        <span>print grafo</span>
                    </CanvasButton> */}
                    <CanvasButton 
                        active={mode === Mode.Move}
                        tooltip='move o nodo' 
                        onClick={() => controller.toMode(Mode.Move)}>
                        <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
                        </svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={mode === Mode.Add}
                        tooltip='adiciona novo nodo' 
                        onClick={() => controller.toMode(Mode.Add)}>
                        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={mode === Mode.Conect}
                        tooltip='conecta os nodo selecionados' 
                        onClick={() => controller.toMode(Mode.Conect)}>
                        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={mode === Mode.Erase}
                        tooltip='apaga o nodo selecionado' 
                        onClick={() => controller.toMode(Mode.Erase)}>
                        <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />  <path d="M18 12.3l-6.3 -6.3" /></svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={mode === Mode.Pan}
                        tooltip='desloca o conteúdo do canvas' 
                        onClick={() => controller.toMode(Mode.Pan)}>
                        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="5 9 2 12 5 15" />  <polyline points="9 5 12 2 15 5" />  <polyline points="15 19 12 22 9 19" />  <polyline points="19 9 22 12 19 15" />  <line x1="2" y1="12" x2="22" y2="12" />  <line x1="12" y1="2" x2="12" y2="22" /></svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={mode === Mode.Zoom}
                        tooltip='zoom' 
                        onClick={() => controller.toMode(Mode.Zoom)}>
                        <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="8" y1="8" x2="12" y2="12" />  <line x1="12" y1="8" x2="8" y2="12" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    </CanvasButton>
                    <CanvasButton 
                        active={showSearchOptions}
                        tooltip='opções de busca' 
                        onClick={() => setShowSearchOptions(!showSearchOptions)}>
                        <svg className="h-8 w-8 text-white white" width="52px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1"><path fill='white' d="M32.26,52a2.92,2.92,0,0,1-2.37-1.21l-3.48-4.73h-.82L22.11,50.8a2.93,2.93,0,0,1-3.5,1L13,49.45a2.93,2.93,0,0,1-1.78-3.17l.89-5.8-.59-.59-5.8.89A2.93,2.93,0,0,1,2.55,39L.23,33.39a2.92,2.92,0,0,1,1-3.5l4.73-3.48v-.82L1.21,22.11a2.92,2.92,0,0,1-1-3.5L2.55,13a2.93,2.93,0,0,1,3.17-1.78l5.8.89.59-.59-.89-5.8A2.93,2.93,0,0,1,13,2.55L18.61.23a2.93,2.93,0,0,1,3.5,1l3.48,4.74h.82l3.48-4.73a2.93,2.93,0,0,1,3.5-1L39,2.55a2.93,2.93,0,0,1,1.78,3.17l-.89,5.8.59.59,5.8-.89A2.93,2.93,0,0,1,49.45,13l2.32,5.61a2.92,2.92,0,0,1-1,3.5l-4.73,3.48v.82l4.73,3.48a2.92,2.92,0,0,1,1,3.5L49.45,39a2.93,2.93,0,0,1-3.17,1.78l-5.8-.89-.59.59.89,5.8A2.93,2.93,0,0,1,39,49.45l-5.61,2.32A2.82,2.82,0,0,1,32.26,52Zm-17-5.93,4.09,1.69,3.3-4.49a2.94,2.94,0,0,1,2.37-1.21H27a3,3,0,0,1,2.37,1.2l3.3,4.5,4.09-1.69-.85-5.51A3,3,0,0,1,36.68,38L38,36.69a3,3,0,0,1,2.53-.83l5.51.85,1.69-4.09-4.49-3.3A2.94,2.94,0,0,1,42.06,27v-1.9a2.94,2.94,0,0,1,1.21-2.37l4.49-3.3L46.07,15.3l-5.51.84A3,3,0,0,1,38,15.31L36.69,14a3,3,0,0,1-.83-2.53l.85-5.51L32.62,4.24l-3.3,4.5A3,3,0,0,1,27,9.94h-1.9a2.94,2.94,0,0,1-2.37-1.21l-3.3-4.49L15.29,5.93l.85,5.51A3,3,0,0,1,15.31,14L14,15.31a3,3,0,0,1-2.53.83L5.93,15.3,4.24,19.38l4.49,3.3a2.94,2.94,0,0,1,1.21,2.37V27a2.94,2.94,0,0,1-1.21,2.37l-4.49,3.3,1.69,4.09,5.51-.85a2.94,2.94,0,0,1,2.53.83L15.31,38a2.94,2.94,0,0,1,.83,2.53Zm31.6-30.9Zm-.31-2h0ZM26,38A12,12,0,1,1,38,26,12,12,0,0,1,26,38Zm0-20a8,8,0,1,0,8,8A8,8,0,0,0,26,18Z"/></svg>
                    </CanvasButton>
                </div>
            </div>
        </>
    );
};

export default OptionsButtonPanel;