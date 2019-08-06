import { observable, action, computed } from "mobx";
import { parse } from "whatwg-mimetype";

class CalculatorStore {
  @observable expression = "";
  @observable result = "";
  @action.bound setExpression(input) {
    if (this.result !== "") {
      this.result = "";
      this.expression = "";
    }
    this.expression = this.expression + input;
  }
  @action.bound clearExpression(input) {
    this.expression = "";
    this.result = "";
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
    if (this.returnTrue(lastChar)) {
      return true;
    }
    return false;
  }
  evaluteExpression = () => {
    try {
      this.result = eval(this.expression);
      return this.result;
    } catch (e) {
      this.result = "Invalid Expression";
      return "Invalid Expression";
    }
  };
}
export default CalculatorStore;
