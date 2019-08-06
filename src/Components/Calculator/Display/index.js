import React, { Component } from "react";
import Expression from "./Expression";
import Result from "./Result";

class Display extends Component {
  render() {
    const { calculatorStore } = this.props;
    return (
      <>
        <Expression calculatorStore={calculatorStore} />
        <Result calculatorStore={calculatorStore} />
      </>
    );
  }
}
export default Display;
