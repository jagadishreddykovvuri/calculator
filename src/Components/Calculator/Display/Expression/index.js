import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class Expression extends Component {
  render() {
    return (
      <>
        <p>{this.props.calculatorStore.expression}</p>
      </>
    );
  }
}
export default Expression;
