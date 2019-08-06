import React, { Component } from "react";
import { observer } from "mobx-react";
import { P } from "./StyledComponent";
@observer
class Expression extends Component {
  render() {
    return (
      <>
        <P>{this.props.calculatorStore.expression}</P>
      </>
    );
  }
}
export default Expression;
