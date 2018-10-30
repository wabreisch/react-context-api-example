import React, { Component } from "react";
import "./App.css";

import MyContext from "./MyContext";

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

const Family = props => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

class Person extends Component {
  render() {
    return (
      <div className="person">
        {/* This is how we consume the passed in context */}
        <MyContext.Consumer>
          {context => {
            return (
              // new no-op tag in React 16.3: React.Fragment
              <React.Fragment>
                <p>Name: {context.state.name}</p>
                <p>Age: {context.state.age}</p>
                <button onClick={context.updateAge}>Click Me</button>
              </React.Fragment>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

class SecondTest extends Component {
  render() {
    return (
      <div className="second-test">
        <MyContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <p>Second Consumer Age: {context.state.age}</p>
              </React.Fragment>
            );
          }}
        </MyContext.Consumer>
      </div>
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
