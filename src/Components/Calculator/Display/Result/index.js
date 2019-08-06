import React, { Component } from "react";
import { observer } from "mobx-react";
import { P } from "../Expression/StyledComponent";
@observer
class Result extends Component {
  render() {
    return (
      <>
        {this.props.calculatorStore.result !== "Invalid Expression" && (
          <P result="true">{this.props.calculatorStore.result}</P>
        )}
        {this.props.calculatorStore.result === "Invalid Expression" && (
          <p>Invalid Expression</p>
        )}
      </>
    );
  }
}
export default Result;
