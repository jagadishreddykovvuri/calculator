import React, { Component } from "react";
import { CALCULATOR_BUTTON_CONSTANTS } from "../../../CalculatorButtonConstants";
import RoundButton from "./RoundButton/index";
class CalculatorButtons extends Component {
  handleButtonClick = value => {
    const { calculatorStore } = this.props;
    switch (value) {
      case "=":
        calculatorStore.evaluteExpression();
        break;
      case "Del":
        calculatorStore.deleteLastCharFromExpression();
        break;
      case "C":
        calculatorStore.clearExpression();
        break;
      default:
        calculatorStore.setExpression(value);
    }
  };
  render() {
    return (
      <>
        {CALCULATOR_BUTTON_CONSTANTS.map(value => {
          return (
            <RoundButton
              key={value}
              value={value}
              function={this.handleButtonClick}
            />
          );
        })}
      </>
    );
  }
}
export default CalculatorButtons;
