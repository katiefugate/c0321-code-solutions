import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ clicks: state.clicks + 1 }));
  }

  render() {
    let bClass;
    if (this.state.clicks >= 15) {
      bClass = 'white';
    } else if (this.state.clicks >= 12) {
      bClass = 'yellow';
    } else if (this.state.clicks >= 9) {
      bClass = 'orange';
    } else if (this.state.clicks >= 6) {
      bClass = 'red';
    } else if (this.state.clicks >= 3) {
      bClass = 'light-purple';
    } else if (this.state.clicks < 3) {
      bClass = 'dark-purple';
    }
    return <button onClick={this.handleClick} className={bClass}>Hot Button</button>;
  }
}

export default HotButton;
