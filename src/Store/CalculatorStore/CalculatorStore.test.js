import CalculatorStore from "./index";
import { ensureExpectedIsNumber } from "jest-matcher-utils";
describe("CalculatorStore", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
    calculatorStore.setExpression("10");
    calculatorStore.setExpression("+");
    calculatorStore.setExpression("20");
  });
  it("should able to set the evaluating expression", () => {
    expect(calculatorStore.expression).toBe("10+20");
  });
  it("should Clear the value in expression when calling of clearExpression function", () => {
    expect(calculatorStore.expression).toBe("10+20");

    calculatorStore.clearExpression();
    expect(calculatorStore.expression).toBe("");
  });
  it("should able to delete the last character of expression on calling Delete", () => {
    expect(calculatorStore.expression).toBe("10+20");

    calculatorStore.deleteLastCharFromExpression();
    expect(calculatorStore.expression).toBe("10+2");
  });
  it("should the expression in calculatorStore is invalid or not", () => {
    expect(calculatorStore.isInvalidExpression).toBeTruthy();
    calculatorStore.setExpression("34");
    expect(calculatorStore.isInvalidExpression).toBeFalsy();
    calculatorStore.setExpression("+");
    expect(calculatorStore.isInvalidExpression).toBeTruthy();
  });
});
