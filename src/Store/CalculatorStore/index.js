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
  returnTrue = lastChar => {
    return (
      lastChar === undefined ||
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === "%"
    );
  };

  @computed get isInvalidExpression() {
    const lastChar = this.expression[this.expression.length - 1];
    console.log(lastChar);
    if (this.returnTrue(lastChar)) {
      return true;
    }
    return false;
  }
  evaluteExpression = () => {
    try {
      return eval(this.expression);
    } catch (e) {
      return "Invalid Expression";
    }
  };
}
export default CalculatorStore;
