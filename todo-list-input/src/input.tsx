import { PiletApi, PiralStoreDataEvent } from "Piral-Demo";
import * as React from "react";

export interface InputProps{
    setData: any;
}

export function Count(piral: PiletApi) {

    return () => {
        const [count, setCount] = React.useState(() => piral.getData('count'));
        React.useEffect(() => {
            const listener = (e: PiralStoreDataEvent) => {
                if(e.name === 'count') {
                    setCount(e.value);
                }
                piral.on('store-data', listener);
            }
        }, []);

        return <div>Count from React: {count}</div>
    }
}

export function Input(piral: PiletApi) {
    return () => {

        const [abc, setAbc] = React.useState(0);
        const [textVal, setTextVal] = React.useState('');
        const onChange = () => {
            piral.setData('count', textVal);
            setTextVal('');
        };

        return <div className="tile rows-4 cols-4">
                    <div className="teaser">
                        {/* <button onClick={() => piral.setData('count', piral.getData('count') + 1)}>Increase</button>
                        <button onClick={() => piral.setData('count', piral.getData('count') - 1)}>Decrease</button> */}
                        <h3>Todo List</h3>
                        <input type="text" value={textVal} onChange={(e) => setTextVal(e.target.value)}/>
                        <button className="btn" onClick={onChange}>Enter</button>
                        {/* <button onClick={() => setAbc(abc+1)}>{abc}</button> */}
                    </div>
            </div>
        
    }
}
