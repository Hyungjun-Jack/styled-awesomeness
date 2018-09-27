import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Button danger></Button>
        <Button></Button>
      </React.Fragment>
    )
  }
}

const Button = ({danger}) => (
  <button className={danger ? "button button--danger" : "button button--success"}>Hello</button>
);

export default App;
