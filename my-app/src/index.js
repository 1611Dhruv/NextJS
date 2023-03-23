import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { color: props.color ? props.color : "green" };
  }
  changeColor = () => {
    this.setState({ color: document.getElementById("inp").value });
    console.log("Success");
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.props.title}</h1>
        <input type="text" id="inp"></input>
        <button id="button" onClick={this.changeColor}>
          ClickMe
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header color="green" title="Change my color" />);
