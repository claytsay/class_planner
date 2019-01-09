import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Courses } from './data_example';

class App extends Component {
  state = {
    courses: [
      
    ]
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {CourseList({data: Courses})}
      </div>
    );
  }
}

/**
 * Represents a Course and its times.
 */
class Course extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name.toString()}</li>
          <li>Section: {this.props.section.toString()}</li>
          <li>Time(s): {this.props.times.toString()}</li>
        </ul>
      </div>
    );
  }
}


const CourseList = (props) => {
  return (
    <div>
      {props.data.map((course) => <Course {...course} />)}
    </div>
  );
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

class Form extends Component {
  handleSubmit() {
    console.log("Form submitted!");
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="CHEM 4B" />
        <button type="submit">Add Class</button>
      </form>
    )
  }
}

export default App;
