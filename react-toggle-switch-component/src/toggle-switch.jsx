import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.state = { status: false };
  }

  toggleHandler() {
    if (this.state.status === false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }

  render() {
    let stat;
    if (this.state.status === false) {
      stat = 'off';
    } else {
      stat = 'on';
    }
    return (
      <p className={'container-' + stat} onClick={this.toggleHandler}>
        <span className={'circle ' + stat} onClick={this.toggleHandler}></span>
      </p>
    );
  }
}

export default ToggleSwitch;
