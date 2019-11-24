import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  ComponentDidMount() {
    setTimeout(() => {
      alert("hello");
    }, 2000);
    console.log("hello1");
  }
  componentWillUnmount() {
    alert("goodbye");
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
