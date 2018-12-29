import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "jack", age: 28 },
      { name: "jill", age: 29 },
      { name: "prasanna", age: 27 }
    ],
    styles: "dark"
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "wentup", age: 28 },
        { name: "the hill", age: 29 },
        { name: "prasanna", age: 27 }
      ]
    });
  };
  switchBackground = () => {
    if (this.state.styles) {
      this.setState({ styles: null });
    } else {
      this.setState({ styles: "dark" });
    }
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "jack", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "prasanna", age: 27 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "0.8em",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch state
        </button>
        <Person
          styles={this.state.styles}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clickHandler={this.switchBackground}
        >
          My hobby : Cricket
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          nameHandler={this.nameChangeHandler}
        >
          My hobby : Volley
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
