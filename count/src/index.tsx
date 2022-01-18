import * as React from 'react';
import { PiletApi, PiralStoreDataEvent } from 'Piral-Demo';
import Page from './Page';
import { Link } from 'react-router-dom';
import ExtensionPage from './ExtensionPage';
import Output from './output';

export function setup(app: PiletApi) {

  const connect = app.createConnector(
    () => fetch('/api/apiDemo').then(res => res.json())
  );

  app.registerTile(() => <Link to="/sample">Sample Pilet</Link>,
  {
    initialColumns: 2,
    initialRows: 2,
  })

  app.registerPage("/sample", connect(( {data} ) => {
    return <Page data={data} Foo={Foo} />
  }))

  // const connect = app.createConnector(
  //   () => 
  //     new Promise(resolve => 
  //       setTimeout(() => resolve([{id: 5, title: 'Hello World'},{id: 9, title:'one two'}]), 1000)
  //     )
  // );


  app.registerExtension("foo", () => <div>This is a Extension</div>)
  const Foo = () => <app.Extension name='foo'/>
  
  // app.registerExtension('extensionPage', ExtensionPage)
  // app.registerTile(() => <ExtensionPage />, {
  //   initialColumns: 3,
  //   initialRows: 3
  // })
  
  app.registerTile(connect(({data}) => {
    const [value, setValue] = React.useState(app.getData('todoList-in'));

    React.useEffect(() => {
      const handler = ({name, value}) => {
        if(name === 'todoList-in') {
          setValue(value);
        }
      };
      app.on('store-data', handler);
    }, []);

    return (<Page data={data} Foo={Foo} value={value}/>)}), {
    initialColumns: 4,
    initialRows: 4
  });
  
  app.registerPage('/output',() => {
    const [output, setOutput] = React.useState(app.getData('test'));

    React.useEffect(() => {
      const handler = ({name, value}) => {
        if(name === 'test') {
          setOutput(value)
        }
      }
      app.on('store-data', handler);
    }, []);

    return(
      <Output output={output}/>
    )
  });

  app.registerTile(() => {
    const [count, setCount] = React.useState(0);
    return(
      <div className="tile rows-3 cols-3">
        <div className="teaser">
          <h4>Count {count}</h4>
          <button className='btn' onClick={() => setCount(count + 1)}>Increase</button>
          <button className='btn' onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    )
  },{
    initialColumns: 3,
    initialRows: 3
  })
}
