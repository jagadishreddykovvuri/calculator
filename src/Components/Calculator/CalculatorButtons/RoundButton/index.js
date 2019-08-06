import React, { Component } from "react";
class RoundButton extends Component {
  handleClick = () => {
    this.props.function(this.props.value);
  };
  render() {
    return <button onClick={this.handleClick}>{this.props.value}</button>;
  }
}
export default RoundButton;
