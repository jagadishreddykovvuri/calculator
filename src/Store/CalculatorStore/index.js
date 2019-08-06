import { observable, action } from "mobx";

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
}
export default CalculatorStore;
