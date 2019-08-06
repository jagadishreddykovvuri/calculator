import React, { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorStore from "../../Store/CalculatorStore";
import Display from "./Display";
import { Div } from "./StyledComponent";
const calculatorStore = new CalculatorStore();
class Calculator extends Component {
  render() {
    return (
      <Div>
        <div>
          <Display calculatorStore={calculatorStore} />
        </div>
        <CalculatorButtons calculatorStore={calculatorStore} />
      </Div>
    );
  }
}
export default Calculator;
