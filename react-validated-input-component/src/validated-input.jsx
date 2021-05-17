import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { password: '' };
  }

  handleChange() {
    this.setState(state => {
      return { password: event.target.value };
    });
  }

  render() {
    let icon;
    let errorMessage;
    if (this.state.password.length === 0) {
      icon = 'fas fa-times';
      errorMessage = 'A password is required.';
    } else if (this.state.password.length < 8) {
      icon = 'fas fa-times';
      errorMessage = 'Your password is too short.';
    } else {
      icon = 'fas fa-check';
      errorMessage = '';
    }
    return (
    <div className="container">
      <label htmlFor="password">Password</label>
      <div className="row">
        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}></input>
        <i className={icon}></i>
        </div>
        <p className="error">{errorMessage}</p>
    </div>
    );
  }
}

export default ValidatedInput;
