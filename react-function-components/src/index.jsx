import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const root = document.querySelector('#root');
ReactDOM.render(<CustomButton />, root);
