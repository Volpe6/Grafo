import { useEffect, useRef } from 'react';
import StateAdd from '../ts/types/graph_state/StateAdd';
import NodeElement from '../ts/types/NodeElement';
import Observer from '../ts/interfaces/Observer';
import SearchType from '../ts/enums/SearchType';
import ManageGraph from '../ts/types/graph/ManageGraph';
import Mode from '../ts/enums/Mode';
import { parse } from 'flatted';
import StateContext from '../ts/types/graph_state/StateContext';
import StateConnect from '../ts/types/graph_state/StateConnect';
import StateMove from '../ts/types/graph_state/StateMove';
import StateErase from '../ts/types/graph_state/StateErase';
import StatePan from '../ts/types/graph_state/StatePan';
import StateZoom from '../ts/types/graph_state/StateZoom';

const useGraphController = (data:any):any => {

    const observersRef = useRef<Observer[]>([]);
    
    const contextRef = useRef<StateContext|null>(null);
    const manageGraphRef = useRef<ManageGraph|null>(null);
    const firstRenderRef = useRef<boolean>(true);
    const searchTypeRef = useRef<SearchType>(SearchType.breadthSearch);
    const maxDepthRef = useRef<number>(10);
    const sleepTimeRef = useRef<number>(1000);

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        contextRef.current = new StateContext(data.canvasRef);
        manageGraphRef.current = new ManageGraph(searchTypeRef.current);
        const nodes=parse('[["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45"],{"id":"46","position":"47","successors":"48","predecessor":null,"depth":0},{"id":"49","position":"50","successors":"51","predecessor":null,"depth":0},{"id":"52","position":"53","successors":"54","predecessor":null,"depth":0},{"id":"55","position":"56","successors":"57","predecessor":null,"depth":0},{"id":"58","position":"59","successors":"60","predecessor":null,"depth":0},{"id":"61","position":"62","successors":"63","predecessor":null,"depth":0},{"id":"64","position":"65","successors":"66","predecessor":null,"depth":0},{"id":"67","position":"68","successors":"69","predecessor":null,"depth":0},{"id":"70","position":"71","successors":"72","predecessor":null,"depth":0},{"id":"73","position":"74","successors":"75","predecessor":null,"depth":0},{"id":"76","position":"77","successors":"78","predecessor":null,"depth":0},{"id":"79","position":"80","successors":"81","predecessor":null,"depth":0},{"id":"82","position":"83","successors":"84","predecessor":null,"depth":0},{"id":"85","position":"86","successors":"87","predecessor":null,"depth":0},{"id":"88","position":"89","successors":"90","predecessor":null,"depth":0},{"id":"91","position":"92","successors":"93","predecessor":null,"depth":0},{"id":"94","position":"95","successors":"96","predecessor":null,"depth":0},{"id":"97","position":"98","successors":"99","predecessor":null,"depth":0},{"id":"100","position":"101","successors":"102","predecessor":null,"depth":0},{"id":"103","position":"104","successors":"105","predecessor":null,"depth":0},{"id":"106","position":"107","successors":"108","predecessor":null,"depth":0},{"id":"109","position":"110","successors":"111","predecessor":null,"depth":0},{"id":"112","position":"113","successors":"114","predecessor":null,"depth":0},{"id":"115","position":"116","successors":"117","predecessor":null,"depth":0},{"id":"118","position":"119","successors":"120","predecessor":null,"depth":0},{"id":"121","position":"122","successors":"123","predecessor":null,"depth":0},{"id":"124","position":"125","successors":"126","predecessor":null,"depth":0},{"id":"127","position":"128","successors":"129","predecessor":null,"depth":0},{"id":"130","position":"131","successors":"132","predecessor":null,"depth":0},{"id":"133","position":"134","successors":"135","predecessor":null,"depth":0},{"id":"136","position":"137","successors":"138","predecessor":null,"depth":0},{"id":"139","position":"140","successors":"141","predecessor":null,"depth":0},{"id":"142","position":"143","successors":"144","predecessor":null,"depth":0},{"id":"145","position":"146","successors":"147","predecessor":null,"depth":0},{"id":"148","position":"149","successors":"150","predecessor":null,"depth":0},{"id":"151","position":"152","successors":"153","predecessor":null,"depth":0},{"id":"154","position":"155","successors":"156","predecessor":null,"depth":0},{"id":"157","position":"158","successors":"159","predecessor":null,"depth":0},{"id":"160","position":"161","successors":"162","predecessor":null,"depth":0},{"id":"163","position":"164","successors":"165","predecessor":null,"depth":0},{"id":"166","position":"167","successors":"168","predecessor":null,"depth":0},{"id":"169","position":"170","successors":"171","predecessor":null,"depth":0},{"id":"172","position":"173","successors":"174","predecessor":null,"depth":0},{"id":"175","position":"176","successors":"177","predecessor":null,"depth":0},{"id":"178","position":"179","successors":"180","predecessor":null,"depth":0},"1672151343254",{"x":432,"y":62,"z":0,"w":1},["2","28"],"1672151346098",{"x":332,"y":179,"z":0,"w":1},["1","3","15"],"1672151347579",{"x":326,"y":248,"z":0,"w":1},["2","11","12"],"1672151348288",{"x":152,"y":170,"z":0,"w":1},["15","8","7"],"1672151350618",{"x":183,"y":364,"z":0,"w":1},["16"],"1672151351150",{"x":127,"y":312,"z":0,"w":1},["16"],"1672151353087",{"x":104,"y":201,"z":0,"w":1},["4"],"1672151353530",{"x":94,"y":109,"z":0,"w":1},["4"],"1672151360855",{"x":285,"y":440,"z":0,"w":1},["11","18","17"],"1672151361196",{"x":387,"y":427,"z":0,"w":1},["11","19","20"],"1672151358725",{"x":324,"y":337,"z":0,"w":1},["3","9","10"],"1672151355407",{"x":391,"y":311,"z":0,"w":1},["3","13","14"],"1672151359926",{"x":479,"y":401,"z":0,"w":1},["12","21","22"],"1672151359640",{"x":505,"y":356,"z":0,"w":1},["12","23","24"],"1672151347034",{"x":254,"y":215,"z":0,"w":1},["2","4","16"],"1672151348776",{"x":191,"y":270,"z":0,"w":1},["15","6","5"],"1672151407070",{"x":199,"y":516,"z":0,"w":1},["9"],"1672151407581",{"x":310,"y":537,"z":0,"w":1},["9"],"1672151408263",{"x":418,"y":549,"z":0,"w":1},["10"],"1672151408624",{"x":471,"y":528,"z":0,"w":1},["10"],"1672151409181",{"x":524,"y":468,"z":0,"w":1},["13"],"1672151409486",{"x":564,"y":439,"z":0,"w":1},["13"],"1672151410031",{"x":581,"y":376,"z":0,"w":1},["14"],"1672151410330",{"x":609,"y":332,"z":0,"w":1},["14"],"1672151433765",{"x":692,"y":269,"z":0,"w":1},["27"],"1672151433479",{"x":688,"y":340,"z":0,"w":1},["27","40","41"],"1672151432581",{"x":567,"y":231,"z":0,"w":1},["28","26","25"],"1672151431841",{"x":492,"y":174,"z":0,"w":1},["1","27","29"],"1672151432966",{"x":566,"y":154,"z":0,"w":1},["28","34","30"],"1672151435198",{"x":629,"y":163,"z":0,"w":1},["29","39","38"],"1672151439729",{"x":842,"y":213,"z":0,"w":1},["39"],"1672151439449",{"x":807,"y":295,"z":0,"w":1},["39"],"1672151438054",{"x":599,"y":32,"z":0,"w":1},["34"],"1672151434880",{"x":635,"y":96,"z":0,"w":1},["29","35","33"],"1672151437600",{"x":732,"y":63,"z":0,"w":1},["34"],"1672151473180",{"x":865,"y":160,"z":0,"w":1},["38"],"1672151441028",{"x":866,"y":80,"z":0,"w":1},["38"],"1672151437046",{"x":765,"y":142,"z":0,"w":1},["30","36","37"],"1672151436798",{"x":747,"y":221,"z":0,"w":1},["30","32","31"],"1672151502595",{"x":690,"y":452,"z":0,"w":1},["26","45","44"],"1672151502907",{"x":817,"y":429,"z":0,"w":1},["26","42","43"],"1672151504243",{"x":844,"y":540,"z":0,"w":1},["41"],"1672151504591",{"x":912,"y":497,"z":0,"w":1},["41"],"1672151505341",{"x":623,"y":570,"z":0,"w":1},["40"],"1672151505651",{"x":751,"y":563,"z":0,"w":1},["40"]]');
        // const nodes=parse('[["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],{"id":"15","position":"16","successors":"17","predecessor":null,"depth":0},{"id":"18","position":"19","successors":"20","predecessor":null,"depth":0},{"id":"21","position":"22","successors":"23","predecessor":null,"depth":0},{"id":"24","position":"25","successors":"26","predecessor":null,"depth":0},{"id":"27","position":"28","successors":"29","predecessor":null,"depth":0},{"id":"30","position":"31","successors":"32","predecessor":null,"depth":0},{"id":"33","position":"34","successors":"35","predecessor":null,"depth":0},{"id":"36","position":"37","successors":"38","predecessor":null,"depth":0},{"id":"39","position":"40","successors":"41","predecessor":null,"depth":0},{"id":"42","position":"43","successors":"44","predecessor":null,"depth":0},{"id":"45","position":"46","successors":"47","predecessor":null,"depth":0},{"id":"48","position":"49","successors":"50","predecessor":null,"depth":0},{"id":"51","position":"52","successors":"53","predecessor":null,"depth":0},{"id":"54","position":"55","successors":"56","predecessor":null,"depth":0},"1667514261506",{"x":100,"y":124},["2","4"],"1667514266468",{"x":125,"y":445},["1"],"1667514262531",{"x":152,"y":316},["4"],"1667514261967",{"x":192,"y":189},["1","3","11"],"1667514264314",{"x":255,"y":216},["10","9","8","12"],"1667514263277",{"x":187,"y":389},["13"],"1667514267018",{"x":429,"y":388},["14"],"1667514262227",{"x":448,"y":295,"z":0,"w":1},["5","9"],"1667514263626",{"x":509,"y":233,"z":0,"w":1},["5","8"],"1667514265115",{"x":434,"y":142,"z":0,"w":1},["5","11"],"1667514263954",{"x":291,"y":72,"z":0,"w":1},["4","10"],"1667514265568",{"x":276,"y":331,"z":0,"w":1},["5","14"],"1667514265961",{"x":283,"y":455,"z":0,"w":1},["14","6"],"1667514264784",{"x":355,"y":383,"z":0,"w":1},["12","13","7"]]');
        // const nodes  = parse('[["1","2","3","4","5","6"],{"id":"7","position":"8","successors":"9","predecessor":null,"depth":0},{"id":"10","position":"11","successors":"12","predecessor":null,"depth":0},{"id":"13","position":"14","successors":"15","predecessor":null,"depth":0},{"id":"16","position":"17","successors":"18","predecessor":null,"depth":0},{"id":"19","position":"20","successors":"21","predecessor":null,"depth":0},{"id":"22","position":"23","successors":"24","predecessor":null,"depth":0},"1667748624524",{"x":238,"y":351},["3","5","2"],"1667748644615",{"x":260,"y":244},["5","1","3","4"],"1667748626105",{"x":380,"y":258},["6","1","2"],"1667748624961",{"x":204,"y":172},["6","5","2"],"1667748623941",{"x":159,"y":307},["4","1","2"],"1667748625755",{"x":328,"y":180},["4","3"]]');
        // const nodes = parse('[["1","2","3","4","5","6","7","8"],{"id":"9","position":"10","successors":"11","predecessor":null,"depth":0},{"id":"12","position":"13","successors":"14","predecessor":null,"depth":0},{"id":"15","position":"16","successors":"17","predecessor":null,"depth":0},{"id":"18","position":"19","successors":"20","predecessor":null,"depth":0},{"id":"21","position":"22","successors":"23","predecessor":null,"depth":0},{"id":"24","position":"25","successors":"26","predecessor":null,"depth":0},{"id":"27","position":"28","successors":"29","predecessor":null,"depth":0},{"id":"30","position":"31","successors":"32","predecessor":null,"depth":0},"1667616583283",{"x":247,"y":73},["2","5"],"1667616584379",{"x":196,"y":149},["1","3"],"1667616585811",{"x":168,"y":228},["2","4"],"1667616586211",{"x":163,"y":304},["3","8"],"1667616587642",{"x":323,"y":130},["1","6"],"1667616587987",{"x":332,"y":191},["5","7"],"1667616588347",{"x":363,"y":299},["6"],"1667616586867",{"x":130,"y":410},["4","8"]]');
        contextRef.current.updateNodes(contextRef.current.graphNode.deepArrayNodesCopy(nodes));
    }, [data.canvasRef]);

    const attach = (obs:Observer):void => {
        observersRef.current.push(obs);
    };

    const detach = (id:number):void => {
        observersRef.current = observersRef.current.filter(obs=>obs.id!==id);
    };

    const notify = (data:any):void => {
        observersRef.current.forEach((obs:Observer) => obs.update(data));
    };

    const executeFunction = (func:any, data:any=null):void => {
        if(func !== undefined) {
            func(data);
            notify({
                mode: contextRef.current?.state.mode,
                nodes: contextRef.current?.graphNode.nodes,
                openNodes: contextRef.current?.openNodes,
                visitedNodes: contextRef.current?.visitedNodes,
            });
        }
    };

    const toMode = (mode:Mode):void => {
        const modes:any = {
            [Mode.Add]: () => contextRef.current?.changeState(new StateAdd(contextRef.current)),
            [Mode.Move]: () => contextRef.current?.changeState(new StateMove(contextRef.current)),
            [Mode.Conect]: () => contextRef.current?.changeState(new StateConnect(contextRef.current)), 
            [Mode.Erase]: () => contextRef.current?.changeState(new StateErase(contextRef.current)), 
            [Mode.Pan]: () => contextRef.current?.changeState(new StatePan(contextRef.current)), 
            [Mode.Zoom]: () => contextRef.current?.changeState(new StateZoom(contextRef.current)), 
        };
        executeFunction(modes[mode]);
    };

    const setSearchType = (type:SearchType):void => manageGraphRef.current?.setSearch(type);

    const search = (initialNodeId:string, finalNodeId:string, maxDepth:number):void => {
        maxDepthRef.current = maxDepth;
        const newNodes = contextRef.current?.graphNode.simpleClone();
        const getNode = (id:string):NodeElement|undefined => newNodes?.find(n=>{
            const nId = n.id.substring(n.id.length - 5, n.id.length);
            return nId === id;
        });
        const iniNode = getNode(initialNodeId);
        const fimNode = getNode(finalNodeId);
        if(iniNode===undefined || fimNode===undefined || newNodes === undefined) {
            return;
        }
        manageGraphRef.current?.currentSearch?.attach({ id:0, update });
        void manageGraphRef.current?.search(iniNode, fimNode, newNodes, maxDepth, sleepTimeRef.current);
    };

    const update = (data:any):void => {
        const fnc:any = {
            updateiteratednodes(data:any) {
                contextRef.current?.updateiteratednodes(data);
            },
            mousedown(data:any) {
                contextRef.current?.mouseDown(data);
            },
            mousemove(data:any) {
                contextRef.current?.mouseMove(data);
            },
            mouseup(data:any) {
                contextRef.current?.mouseUp(data);
            },
            click(data:any) {
                contextRef.current?.click(data);
            },
            wheel(data:any) {
                contextRef.current?.wheel(data);
            },
        };
        executeFunction(fnc[data.event.type], data);
    };

    return {
        contextRef, 
        searchTypeRef,
        maxDepthRef,
        sleepTimeRef,
        manageGraphRef,
        toMode,
        update,
        attach,
        detach,
        setSearchType,
        search
    };
};

export default useGraphController;