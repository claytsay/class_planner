import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <th><Button /></th>
          <th><Button /></th>
        </tr>
        <tr>
          <th><Button /></th>
          <th><Button /></th>
        </tr>
      </table>
    );
  }
}


class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    console.log("You clicked the button!");
    this.setState(
      (previousState) => {
        previousState.count++;
        return previousState;
      }
    );
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}


class Intro extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
