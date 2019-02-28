import React, {Component} from 'react';

class counter extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
    };
  }



increment = () => {
  this.setState ({
    count: this.state.count + 1,
  })
};


decrement = () => {
  this.setState ({
    count: this.state.count - 1,
  })
};


  render() {
    return(
      <div className="container">
      <div className="navbar">Counter.js</div>
      <div className="counter">
      <h3><img src={"https://app.feedbackpanda.com/images/fbp_logo_circle.png"} /> </h3>
      <h1>{this.state.count}</h1>
      <button type="button" onClick={this.increment}> Increment </button>
      <button type="button" onClick={this.decrement}> decrement </button>
      </div>
      </div>
    )
  }
};

export default counter;
