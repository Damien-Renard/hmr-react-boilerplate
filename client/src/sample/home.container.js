/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

/* -- Import Child Components -- */
import DisplayText from './home.display.text';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      text: 'HMR-REACT BOILERPLATE',
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
    const text = `${this.state.text.slice(0, this.state.index)}_`;
    return (
      <div id="home-wrapper" className="cover flex center-center">
        <DisplayText
          text={text}
        />
      </div>
    );
  }
}

export default Home;
