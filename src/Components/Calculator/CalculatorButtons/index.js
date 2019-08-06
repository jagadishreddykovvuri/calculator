import React, { Component } from "react";
import { CALCULATOR_BUTTON_CONSTANTS } from "../../../CalculatorButtonConstants";
import RoundButton from "./RoundButton/index";
import { Div } from "./StyledComponent";
class CalculatorButtons extends Component {
  handleButtonClick = value => {
    const { calculatorStore } = this.props;
    switch (value) {
      case CALCULATOR_BUTTON_CONSTANTS[18]:
        calculatorStore.evaluteExpression();
        break;
      case CALCULATOR_BUTTON_CONSTANTS[2]:
        calculatorStore.deleteLastCharFromExpression();
        break;
      case CALCULATOR_BUTTON_CONSTANTS[0]:
        calculatorStore.clearExpression();
        break;
      default:
        calculatorStore.setExpression(value);
    }
  };
  render() {
    return (
      <Div>
        {CALCULATOR_BUTTON_CONSTANTS.map(value => {
          return (
            <RoundButton
              key={value}
              value={value}
              function={this.handleButtonClick}
            />
          );
        })}
      </Div>
    );
  }
}
export default CalculatorButtons;
