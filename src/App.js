import React, { Component } from "react";
import "./App.css";

import MyContext from "./MyContext";
import Family from "./Family";
import SecondTest from "./SecondTest";

// the provider holds the state we wish to pass down indefinitely
class MyProvider extends Component {
  state = {
    name: "Wes",
    age: 24,
    cool: true
  };

  render() {
    return (
      // value is the data we want to pass down
      <MyContext.Provider
        value={{
          state: this.state,
          updateAge: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>I'm the app!</p>
          <Family />
          <SecondTest />
          <SecondTest />
        </div>
      </MyProvider>
    );
  }
}

export default App;
