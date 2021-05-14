import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

// class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicks: 0 };
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//      this.setState( state => ({clicks: state.clicks + 1}))
//   }
//   render() {
//     let bClass;
//     if(this.state.clicks > 3) {
//       bClass = "dark-purple"
//     } else if (this.state.clicks > 6){
//       bClass = "light-purple"
//     } else if (this.state.clicks > 9) {
//       bClass = "red"
//     } else if (this.state.clicks > 12) {
//       bClass = "orange"
//     } else if (this.state.clicks > 15) {
//       bClass = "yellow"
//     } else if (this.state.clicks > 18) {
//       bClass = "white"
//     }
//       return <button onClick={this.handleClick} className={bClass}>Hot Button</button>
//   }
// }

const $root = document.querySelector('#root');
ReactDOM.render(< HotButton />, $root);
