import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import CalculatorButtons from "./index";
import CalculatorStore from "../../../Store/CalculatorStore/index";
import { CALCULATOR_BUTTON_CONSTANTS } from "../../../CalculatorButtonConstants";
afterEach(cleanup);
describe("CalculatorButtons", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
  });
  it("should on click button number can call the evalute function in calculator Store", () => {
    jest.spyOn(calculatorStore, "setExpression");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    const but1 = getByText(CALCULATOR_BUTTON_CONSTANTS[4]);
    fireEvent.click(but1);
    expect(calculatorStore.setExpression).toBeCalled();
  });
  it("should on click button = can call the corresponding function in Ccalculator Store", () => {
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    jest.spyOn(calculatorStore, "evaluteExpression");
    const but2 = getByText(CALCULATOR_BUTTON_CONSTANTS[18]);
    fireEvent.click(but2);
    expect(calculatorStore.evaluteExpression).toBeCalled();
  });
  it("should on click button can clear call the corresponding function in Ccalculator Store", () => {
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    jest.spyOn(calculatorStore, "clearExpression");
    const but3 = getByText(CALCULATOR_BUTTON_CONSTANTS[0]);
    fireEvent.click(but3);
    expect(calculatorStore.clearExpression).toBeCalled();
  });
  it("should on click button can delete call the corresponding function in Ccalculator Store", () => {
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    jest.spyOn(calculatorStore, "deleteLastCharFromExpression");
    const but4 = getByText(CALCULATOR_BUTTON_CONSTANTS[2]);
    fireEvent.click(but4);
    expect(calculatorStore.deleteLastCharFromExpression).toBeCalled();
  });
});
