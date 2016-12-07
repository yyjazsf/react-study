
import React, { Component } from 'react';

class stateComponent extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0
    }
  }
  tick() {
    this.setState({
      secondsElapsed: ++this.state.secondsElapsed
    });
  }
  componentDidMount(){
    this.interval = setInterval(this.tick,1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
}

export default stateComponent;
