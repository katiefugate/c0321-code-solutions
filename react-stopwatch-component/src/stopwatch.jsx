import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.intervalCall = this.intervalCall.bind(this);
    this.state = {
      status: false,
      counter: 0
    };
  }

  clickHandler() {
    let intervalId;
    if (this.state.status === false) {
      this.intervalId = setInterval(this.intervalCall, 1000);
    } else {
      clearInterval(intervalId);
      this.setState(state => {
        return {
          status: false,
          counter: state.counter
        };
      });
    }
  }

  intervalCall() {
    this.setState(state => {
      return {
        counter: state.counter + 1,
        status: true
      };
    });
  }

  render() {
    let icon;
    if (this.state.status === false) {
      icon = 'fas fa-play';
    } else {
      icon = 'fas fa-pause';
    }
    return (
    <div className="container">
      <div className="num">{this.state.counter}</div>
      <p><i className={icon} onClick={this.clickHandler}></i></p>
    </div>
    );
  }
}

export default Stopwatch;
