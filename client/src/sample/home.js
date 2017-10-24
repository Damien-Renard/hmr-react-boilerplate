/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      text: 'SURF TA VAGUE',
      index: 0,
      interval: null,
    };
    this.handleTextIdx = this.handleTextIdx.bind(this);
  }

  componentDidMount() {
    const interval = setInterval(this.handleTextIdx, 200);
    this.setState({ interval }); // eslint-disable-line
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  handleTextIdx() {
    const { text, index } = this.state;
    const nextIdx = (index + 1) % (text.length + 1);
    this.setState({ index: nextIdx });
  }

  render() {
    const displayText = `${this.state.text.slice(0, this.state.index)}_`;
    return (
      <div id="home-wrapper" className="cover flex center-center">
        <div className="text-xxl">{displayText}</div>
      </div>
    );
  }
}

export default Home;
