import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: '' };
  }

  handleChange() {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Email
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email}></input>
      </label>
      <button>Sign Up</button>
    </form>
    );
  }
}

const $root = document.querySelector('#root');
ReactDOM.render(<NewsletterForm />, $root);
