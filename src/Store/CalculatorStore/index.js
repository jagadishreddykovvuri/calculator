import { observable, action } from "mobx";

class CalculatorStore {
  @observable expression = "";
  @action.bound setExpression(input) {
    this.expression = this.expression + input;
  }
}
export default CalculatorStore;
