import CalculatorStore from "./index";
import { ensureExpectedIsNumber } from "jest-matcher-utils";
describe("CalculatorStore", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
    calculatorStore.setExpression("10");
    calculatorStore.setExpression("+");
    calculatorStore.setExpression("20");
    expect(calculatorStore.expression).toBe("10+20");
  });
  it("should able to set the evaluating expression", () => {});
  it("should Clear the value in expression when calling of clearExpression function", () => {
    calculatorStore.clearExpression();
    expect(calculatorStore.expression).toBe("");
  });
  it("should able to delete the last character of expression on calling Delete", () => {
    calculatorStore.deleteLastCharFromExpression();
    expect(calculatorStore.expression).toBe("10+2");
  });
});
