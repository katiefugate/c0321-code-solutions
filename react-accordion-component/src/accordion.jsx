import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { infoClass: 'info' };
  }

  handleClick() {
    if (event.target.className === 'info') {
      this.setState({ infoClass: 'hidden' });
    } else {
      this.setState({ infoClass: 'info' });
    }
  }

  render(props) {
    const topics = this.props.topics.map(eachTopic => {
      return (
        <div key={eachTopic.topic}>
          <h1 onClick={this.handleClick} className="topic">{eachTopic.topic}</h1>
          <p className={this.state.infoClass} id={eachTopic.topic}>{eachTopic.details}</p>
        </div>
      );
    });
    return (
      <div>
        {topics}
      </div>
    );
  }
}

export default Accordion;
