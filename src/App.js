import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Moment from "react-moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthday: "2018-08-13"
    };
  }
  render() {
    const { birthday } = this.state;
    const date = new Date();
    const birthdaysOne = new Date(birthday);
    const birthdaysThree = new Date(birthday);
    return (
      <div className="App">
        <Moment diff={date} unit="days">
          {birthdaysOne.setFullYear(birthdaysOne.getFullYear() + 1)}
        </Moment>
        <Moment diff={date} unit="days">
          {birthdaysThree.setFullYear(birthdaysThree.getFullYear() + 3)}
        </Moment>
      </div>
    );
  }
}

export default App;
