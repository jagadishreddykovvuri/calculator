import { observable, action, computed } from "mobx";
import { parse } from "whatwg-mimetype";

class CalculatorStore {
  @observable expression = "";
  @action.bound setExpression(input) {
    this.expression = this.expression + input;
  }
  @action.bound clearExpression(input) {
    this.expression = "";
  }
  @action.bound deleteLastCharFromExpression() {
    this.expression = this.expression.slice(0, -1);
  }

  @computed get isInvalidExpression() {
    if (this.expression === "") {
      return true;
    }
    const lastChar = this.expression[this.expression.length - 1];
    console.log(lastChar);
    if (
      lastChar === null ||
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "%"
    ) {
      return true;
    }
    return false;
  }
}
export default CalculatorStore;
