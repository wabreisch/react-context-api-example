import React, { Component } from "react";
import "./App.css";

import MyContext from "./MyContext";
import Family from "./Family";
import SecondTest from "./SecondTest";

// the provider holds the state we wish to pass down indefinitely
class MyProvider extends Component {
  state = {
    name: "Gavin Belson",
    age: 48,
    cool: false
  };

  render() {
    return (
      // value is the data we want to pass down
      <MyContext.Provider
        value={{
          state: this.state,
          updateAge: () => this.setState({ age: this.state.age + 1 }),
          scrambleName: () => {
            const currNameArray = this.state.name.split("");
            let counter = currNameArray.length;

            // Fisher-Yates shuffle the elements of the letters in the name array
            while (counter > 0) {
              const idx = Math.floor(Math.random() * counter);
              counter--;

              const tempValue = currNameArray[counter];
              currNameArray[counter] = currNameArray[idx];
              currNameArray[idx] = tempValue;
            }

            this.setState({ name: currNameArray.join("") });
          }
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
          <Family />
          <SecondTest />
          <SecondTest />
        </div>
      </MyProvider>
    );
  }
}

export default App;
