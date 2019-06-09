import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Hello from "./component/Hello";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Hello name="Rahul" enthusiasmLevel={5} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
