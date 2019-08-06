import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class Result extends Component {
  render() {
    return (
      <>
        <p>{this.props.calculatorStore.result}</p>
      </>
    );
  }
}
export default Result;
