import React from 'react';

class AppDrawer extends React.Component {
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
    let backgroundClass;
    let iconClass;
    let menuClass;
    if (this.state.status === false) {
      iconClass = 'fas fa-bars';
      backgroundClass = 'hidden';
      menuClass = 'hidden';
    } else {
      iconClass = 'hidden';
      backgroundClass = 'background';
      menuClass = 'menu';
    }
    return (
      <div>
        <i onClick={this.toggleHandler} className={iconClass}></i>
        <div className={backgroundClass} onClick={this.toggleHandler}></div>
          <div className={menuClass}>
            <h2>Menu</h2>
            <ul>
            <li onClick={this.toggleHandler}>About</li>
            <li onClick={this.toggleHandler}>Get Started</li>
            <li onClick={this.toggleHandler}>Sign In</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default AppDrawer;
