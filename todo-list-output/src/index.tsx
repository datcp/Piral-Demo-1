import * as React from 'react';
import { PiletApi } from 'Piral-Demo';
import Output from './output';

export function setup(app: PiletApi) {
  app.registerTile('output', () => {
    const [output, setOutput] = React.useState([]);

    React.useEffect(() => {
      const handler = ({name, value}) => {
        if(name === 'count') {
          setOutput((old: any) => [...old, value])
        }
      }
      app.on('store-data', handler);
    }, []);

    return(
      <div className="tile rows-4 cols-4">
        <div className="teaser">
          <h1>Todo List</h1>
          <Output output={output}/>
        </div>
      </div>
    )
  },{
    initialColumns: 4,
    initialRows: 4
  })
}
