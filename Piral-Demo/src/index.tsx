import 'piral/polyfills';
import { createInstance, renderInstance } from 'piral';
import { layout, errors } from './layout';
import { render } from 'react-dom';
import {LoadingIndicatorProps, Piral, SetComponent, useGlobalState} from 'piral-core'
import * as React from 'react';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/piral-demo-darick';
// key = 08cb977b59ff2f02f789abb3f3c4bad75b53862925a4f97598ad8fd421a58590
// npx pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/Piral-Demo-Darick --api-key 08cb977b59ff2f02f789abb3f3c4bad75b53862925a4f97598ad8fd421a58590

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});