import React, { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorStore from "../../Store/CalculatorStore";

const calculatorStore = new CalculatorStore();
class Calculator extends Component {
  render() {
    return (
      <>
        <CalculatorButtons calculatorStore={calculatorStore} />
      </>
    );
  }
}
export default Calculator;
