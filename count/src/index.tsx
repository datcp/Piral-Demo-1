import * as React from 'react';
import { PiletApi } from 'Piral-Demo';
import Page from './Page';
import { Link } from 'react-router-dom';
import ExtensionPage from './ExtensionPage';
import Output from './output';

export function setup(app: PiletApi) {
  
  
  // const connect = app.createConnector(
  //   () => fetch('/api/apiDemo').then(res => res.json())
  // );

  app.registerTile(() => <Link to="/sample">Sample Pilet</Link>,
  {
    initialColumns: 2,
    initialRows: 2,
  })

  const connect = app.createConnector(
    () => 
      new Promise(resolve => 
        setTimeout(() => resolve([{id: 5, title: 'Hello World'},{id: 9, title:'one two'}]), 100)
      )
  );

  app.registerExtension("foo", () => <div>ahihihihihih</div>)
  const Foo = () => <app.Extension name='foo'/>
  
  app.registerExtension('extensionPage', ExtensionPage)

  // app.registerPage("/sample", connect(( {data} ) => {
  //   return <Page data={data} Foo={Foo} value={valueGet} />
  // }))

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
  // app.registerTile(() => {
  //   const [output, setOutput] = React.useState([]);

  //   React.useEffect(() => {
  //     const handler = ({name, value}) => {
  //       if(name === 'todo-input') {
  //         setOutput(old => [...old, value])
  //       }
  //     }
  //     app.on('store-data', handler);
  //     // app.off('store-data', handler);
  //   }, []);

  //   return(
  //     <Output output={output}/>
  //   )
  // },{
  //   initialColumns: 4,
  //   initialRows: 4
  // });
  
}
