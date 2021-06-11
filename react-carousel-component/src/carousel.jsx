import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.renderDots = this.renderDots.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.state = { index: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.index === (this.props.images.length - 1)) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);
  }

  renderDots() {
    const dots = this.props.images.map((image, ind) => {
      if (ind === this.state.index) {
        return <i key={ind} id={ind} className="fas fa-circle dot"></i>;
      } else {
        return <i key={ind} id={ind} className="far fa-circle dot"></i>;
      }
    });
    return dots;
  }

  arrowClick(event) {
    if (event.target.className === 'fas fa-chevron-left left-arrow') {
      this.setState({ index: (this.state.index - 1) });
    } else if (event.target.className === 'fas fa-chevron-right right-arrow') {
      this.setState({ index: (this.state.index + 1) });
    }
  }

  dotClick(event) {
    this.setState({ index: Number(event.target.id) });
  }

  render() {
    return (
      <>
      <div onClick={this.arrowClick} className='container'>
        <i className="fas fa-chevron-left left-arrow"></i>
        <img src={this.props.images[this.state.index]}></img>
        <i className="fas fa-chevron-right right-arrow"></i>
      </div>
      <div className='dots' onClick={this.dotClick}>{this.renderDots()}</div>
      </>
    );
  }

}

export default Carousel;
