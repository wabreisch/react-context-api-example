import React, { Component } from "react";

import MyContext from "./MyContext";

class SecondTest extends Component {
  render() {
    return (
      <div className="second-test">
        <MyContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <p>Second Consumer Name: {context.state.name}</p>
                <p>Second Consumer Age: {context.state.age}</p>
              </React.Fragment>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default SecondTest;
