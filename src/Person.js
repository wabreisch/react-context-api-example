import React, { Component } from "react";

import MyContext from "./MyContext";

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

export default Person;
