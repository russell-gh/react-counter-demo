import React, { Component } from "react";

class App extends Component {
  state = { taskList: [] };

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onClick = () => {
    this.setState({ taskList: [...this.state.taskList, this.state.userInput] });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <input type="text" onInput={this.onInput} />
        <button onClick={this.onClick}>Add task</button>
        <ul>
          {this.state.taskList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
