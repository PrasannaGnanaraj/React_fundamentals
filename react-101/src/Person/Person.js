import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.clickHandler}>
          Im {this.props.name} and Iam {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameHandler}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
