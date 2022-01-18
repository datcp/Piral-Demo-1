import * as React from 'react';
import { PiletApi } from 'Piral-Demo';
import {Input, Count} from './input';

export function setup(app: PiletApi) {
  let counter = 0;
  // app.setData('count', 10);
  const createInput = Input(app);
  const createCount = Count(app);
  app.registerExtension('scount', createCount);

  // setInterval(() => {
  //   app.setData('test', counter++)
  // },1000);
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );

  // app.registerPage('/input', () => <Input setData={(value: any) => app.setData('todo-input', value)}/>);

  app.registerTile( createInput, {
    initialColumns: 4,
    initialRows: 4,
  });

  // app.registerTile( 'abc',() => {
  //   return <div>
  //     <app.Extension name='scount'/>
  //   </div>
  // },{
  //   initialColumns: 3,
  //   initialRows: 2
  // })
}
