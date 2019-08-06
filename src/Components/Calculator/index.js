import React, { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorStore from "../../Store/CalculatorStore";
import Display from "./Display";
const calculatorStore = new CalculatorStore();
class Calculator extends Component {
  render() {
    return (
      <>
        <Display calculatorStore={calculatorStore} />
        <CalculatorButtons calculatorStore={calculatorStore} />
      </>
    );
  }
}
export default Calculator;
