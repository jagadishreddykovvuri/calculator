import { render, fireEvent } from "@testing-library/react";
import React from "react";
import CalculatorButtons from "./index";
import CalculatorStore from "../../../Store/CalculatorStore/index";
describe("CalculatorButtons", () => {
  it("should on click button can call the corresponding function in Ccalculator Store", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "setExpression");
    const { getByText } = render(
      <CalculatorButtons calculatorStore={calculatorStore} />
    );
    const but1 = getByText("1");
    fireEvent.click(but1);
    expect(calculatorStore.setExpression).toBeCalled();
    jest.spyOn(calculatorStore, "evaluteExpression");
    const but2 = getByText("=");
    fireEvent.click(but2);
    expect(calculatorStore.evaluteExpression).toBeCalled();
    jest.spyOn(calculatorStore, "clearExpression");
    const but3 = getByText("C");
    fireEvent.click(but3);
    expect(calculatorStore.clearExpression).toBeCalled();
    jest.spyOn(calculatorStore, "deleteLastCharFromExpression");
    const but4 = getByText("Del");
    fireEvent.click(but4);
    expect(calculatorStore.deleteLastCharFromExpression).toBeCalled();
  });
});