import CalculatorStore from "./index";
import { ensureExpectedIsNumber } from "jest-matcher-utils";
describe("CalculatorStore", () => {
  it("should able to set the evaluting expression", () => {
    const calculatorStore = new CalculatorStore();
    calculatorStore.setExpression("10");
    calculatorStore.setExpression("+");
    calculatorStore.setExpression("20");
    expect(calculatorStore.expression).toBe("10+20");
  });
});
