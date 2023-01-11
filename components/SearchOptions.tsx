import React, { useEffect, useRef, useState } from 'react';
import SearchType from '../ts/enums/SearchType';
import SimpleMenu from './SimpleMenu';

interface Props {
    controller: any,
    show: boolean,
    toogleVisibility: Function
}

function SearchOptions({ controller, show, toogleVisibility }: Props):JSX.Element {

    const [searchType, setSearchType] = useState<SearchType>(controller.searchTypeRef.current);
    const [maxDepth, setMaxDepth] = useState<number>(controller.maxDepthRef.current);
    const [initialNode, setInitialNode] = useState<string>('');
    const [finalNode, setFinalNode] = useState<string>('');
    const [showMaxDepth, setShowMaxDepth] = useState<boolean>(false);
    const [searchSpeed, setSearchSpeed] = useState<number>(controller.sleepTimeRef.current);
    const [searchInfo, setSearchInfo] = useState<any>();

    const [showVisitedNodes, setShowVisitedNodes] = useState<boolean>(false);
    const [showOpenNodes, setShowOpenNodes] = useState<boolean>(false);
    const [showSoluctionNodes, setShowSoluctionNodes] = useState<boolean>(false);
    const [soluctionNodes, setSoluctionNodes] = useState<any[]|null|undefined>();
    const [openNodes, setOpenNodes] = useState<any[]|null|undefined>();
    const [visitedNodes, setVisitedNodes] = useState<any[]|null|undefined>();

    const visitedRef = useRef(null);
    const openRef = useRef(null);
    const soluctionRef = useRef(null);

    useEffect(()=>{
        setSearchInfo(controller.manageGraphRef.current?.currentSearch?.description);
        controller.attach({ id: 'options', update: (data:any) => {
            const soluctionNods = [];
            let metadata = controller.contextRef.current.nodeValues?.metaNode;
            while (metadata !== undefined && metadata !== null) {
                soluctionNods.unshift(metadata);
                metadata = metadata.predecessor;
            }
            setOpenNodes(data.openNodes);
            setVisitedNodes(data.visitedNodes);
            setSoluctionNodes(soluctionNods);
        }});
        return () => controller.detach('options');
    }, [controller, soluctionNodes]);

    useEffect(()=>{
        scrollToBottom(visitedRef);
        scrollToBottom(openRef);
        scrollToBottom(soluctionRef);
    }, [visitedNodes, openNodes, soluctionNodes]);

    function scrollToBottom(ref:any):void {
        const container = ref.current as HTMLDivElement|null;
        if(container == null) return;
        container.scrollTo(0, container.scrollHeight);
    }

    const handleSelect = (e: any):void => {
        const type = parseInt(e.target.value);
        setShowMaxDepth(false);
        if (type === SearchType.depthSearchWithMaxDepth || type === SearchType.depthSearchWithMaxDepthProgressive) {
            setShowMaxDepth(true);
        }
        handleSearchType(type);
    };

    const handleSearchType = (type:SearchType):void => {
        setSearchType(type);
        controller.setSearchType(type);
    };

    const handleMaxDepth = (e: any):void => {
        setMaxDepth(e.target.value);
    };

    const handleInitialNode = (e: any):void => {
        setInitialNode(e.target.value);
    };

    const handleFinalNode = (e: any):void => {
        setFinalNode(e.target.value);
    };

    const handleSubmit = ():void => {
        controller.sleepTimeRef.current = searchSpeed;
        controller.search(initialNode, finalNode, maxDepth);
    };

    return (
        <>
            <SimpleMenu 
                title='Nodos Visitados' 
                position={{x:60, y:15}}
                show={showVisitedNodes} 
                toogleVisibility={setShowVisitedNodes}>
                <div ref={visitedRef} className='overflow-auto max-h-[80px] min-h-[80px]'>
                    <ul>
                        {visitedNodes?.map((n, i) => <li key={i} className='p-2'>{n.id.substring(n.id.length - 5, n.id.length)}</li>)}
                    </ul>
                </div>
            </SimpleMenu>
            <SimpleMenu 
                position={{x:60, y:30}}
                title='Nodos Abertos' 
                show={showOpenNodes} 
                toogleVisibility={setShowOpenNodes}>
                <div ref={openRef} className='overflow-auto max-h-[80px] min-h-[80px]'>
                    <ul>
                        {openNodes?.map((n, i) => <li key={i} className='p-2'>{n.id.substring(n.id.length - 5, n.id.length)}</li>)}
                    </ul>
                </div>
            </SimpleMenu>
            <SimpleMenu 
                position={{x:60, y:50}}
                title='Nodos Solução' 
                show={showSoluctionNodes} 
                toogleVisibility={setShowSoluctionNodes}>
                <div ref={soluctionRef} className='overflow-auto max-h-[80px] min-h-[80px]'>
                    <ul>
                        {soluctionNodes?.map((n, i) => <li key={i} className='p-2'>{n.id.substring(n.id.length - 5, n.id.length)}</li>)}
                    </ul>
                </div>
            </SimpleMenu>
            <SimpleMenu 
                position={{x:40, y:50}}
                title='Opções de Busca' 
                show={show} 
                toogleVisibility={toogleVisibility}>
                <div className='p-5 space-y-4'>
                    <div className="w-full">
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="search-type">Tipo de busca:</label>
                        <select value={searchType} onChange={handleSelect} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="search-type" id="search-type">
                            <option value={SearchType.breadthSearch}>Busca em Largura</option>
                            <option value={SearchType.depthSearch}>Busca em Profundidade</option>
                            <option value={SearchType.depthSearchWithMaxDepth}>Busca com profundidade máx.</option>
                            <option value={SearchType.depthSearchWithMaxDepthProgressive}>Busca com profundidade máx. progressiva</option>
                            {/* <option value={SearchType.bidirecionalSearch}>Busca Bidirecional</option> */}
                        </select>
                    </div>
                    <div className="w-full">
                        <h4 className='text-gray-700 text-sm font-bold mb-2'>{searchInfo?.title}:</h4>
                        <p className='max-h-[80px] overflow-auto'>
                            {searchInfo?.info}
                        </p>
                    </div>
                    {
                        !showMaxDepth ? null : (
                            <div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="depth">
                                        Profundidade Máxima:
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-[20%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="depth"
                                        type="text"
                                        value={maxDepth}
                                        onChange={handleMaxDepth}
                                    />
                                </div>
                            </div>
                        )
                    }

                    <div className='flex flex-row space-x-1.5'>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="initial-node">
                                Nodo inicial:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="initial-node"
                                type="text"
                                value={initialNode}
                                onChange={handleInitialNode}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="final-node">
                                Nodo final:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="final-node"
                                type="text"
                                value={finalNode}
                                onChange={handleFinalNode}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search-speed">
                                Velocidade da Busca(ms):
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-[30%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="search-speed"
                                type="text"
                                value={searchSpeed}
                                onChange={(e: any) => { setSearchSpeed(e.target.value); }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div>
                            <div>
                                <input
                                    checked={showVisitedNodes}
                                    onChange={(e: any) => {
                                        setShowVisitedNodes(e.target.checked);
                                    }}
                                    className="h-4 w-4 border border-black-500/100 rounded-sm bg-white checked:bg-blue-600 checked:border-black-500/100 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                    mostrar nodos visitados
                                </label>
                            </div>
                            <div >
                                <input
                                    checked={showOpenNodes}
                                    onChange={(e: any) => {
                                        setShowOpenNodes(e.target.checked);
                                    }}
                                    className="h-4 w-4 border border-black-500/100 rounded-sm bg-white checked:bg-blue-600 checked:border-black-500/100 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckChecked" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                                    mostrar nodos abertos
                                </label>
                            </div>
                            <div >
                                <input
                                    checked={showSoluctionNodes}
                                    onChange={(e: any) => {
                                        setShowSoluctionNodes(e.target.checked);
                                    }}
                                    className="h-4 w-4 border border-black-500/100 rounded-sm bg-white checked:bg-blue-600 checked:border-black-500/100 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckChecked" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                                    mostrar nodos solução
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className={`mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800  rounded-lg p-2 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 border-solid border-2 border-black-500/100`}
                    >
                        Buscar
                    </button>
                </div>
            </SimpleMenu>
        </>
    );
}

export default SearchOptions;