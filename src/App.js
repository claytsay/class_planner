import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
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
          <li>Name: {this.props.name}</li>
          <li>Section: {this.props.section}</li>
          <li>Time(s): {this.props.times}</li>
        </ul>
      </div>
    );
  }
}

/**
 * Sample data
 */
const Courses = [
  {
    name: "Chemistry",
    section: 1,
    times: "1500-1600"
  },
  {
    name: "Calculus",
    section: 2,
    times: "1600-1700"
  },
  {
    name: "Biology",
    section: 3,
    times: "1700-1800"
  },
  {
    name: "English",
    section: 4,
    times: "1800-1900"
  }
];

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


export default App;
