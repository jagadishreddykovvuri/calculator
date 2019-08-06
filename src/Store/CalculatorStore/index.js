import { observable, action } from "mobx";

class CalculatorStore {
  @observable expression = "";
  @action.bound setExpression(character) {
    this.expression = this.expression + character;
  }
}
export default CalculatorStore;
