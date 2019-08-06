import React, { Component } from "react";
import Expression from "./Expression";
import Result from "./Result";
import { Div } from "./StyledComponent";
class Display extends Component {
  render() {
    const { calculatorStore } = this.props;
    return (
      <Div>
        <Expression calculatorStore={calculatorStore} />
        <Result calculatorStore={calculatorStore} />
      </Div>
    );
  }
}
export default Display;
