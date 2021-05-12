import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

const newH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const container = document.querySelector('#root');
ReactDOM.render(newH1, container);
