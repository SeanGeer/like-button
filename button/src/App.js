import React, { Component } from 'react';
import './App.css';

var grammar = "s"

class App extends Component {

state = {
  count:0
};

handleClick = () => {
  this.setState(({ count }) => ({
    count: count+1
  }))
  if(this.state.count === 0){
    grammar = ""
  }
  if(this.state.count === 1){
    grammar = "s"
  }
}


  render() {
    return (
      <div className="App">
        <button className="button" onClick={this.handleClick }>{this.state.count + "  Like" + grammar}</button>
      </div>
    );
  }
}

export default App;