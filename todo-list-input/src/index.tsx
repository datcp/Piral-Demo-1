import * as React from 'react';
import { PiletApi } from 'Piral-Demo';
import Input from './input';

export function setup(app: PiletApi) {
  let counter = 0;
  setInterval(() => {
    app.setData('test', counter++)
  },1000);
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );

  app.registerPage('/input', () => <Input setData={(value: any) => app.setData('todo-input', value)}/>);

  app.registerTile(() => <div>
    <a href="/input">Input</a>
  </div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
