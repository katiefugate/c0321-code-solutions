import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.topicsList = this.topicsList.bind(this);
    this.state = { currentTopic: null };
  }

  handleClick(event) {
    if (event.target.id === this.state.currentTopic) {
      this.setState({ currentTopic: null });
    } else {
      this.setState({ currentTopic: event.target.id });
    }
  }

  topicsList(topicList) {
    let infoClass = 'hidden';
    const topics = topicList.map(eachTopic => {
      if (this.state.currentTopic === eachTopic.topic) {
        infoClass = this.state.currentTopic;
      } else {
        infoClass = 'hidden';
      }
      return (
        <div key={eachTopic.topic}>
          <h1 onClick={this.handleClick} id={eachTopic.topic} className='topic'>{eachTopic.topic}</h1>
          <p className={`info ${infoClass}`}>{eachTopic.details}</p>
        </div>
      );
    });
    return topics;
  }

  render(props) {
    return (
      <div>
        {this.topicsList(this.props.topics)}
      </div>
    );
  }
}

export default Accordion;
