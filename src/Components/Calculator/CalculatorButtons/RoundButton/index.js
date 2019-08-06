import React, { Component } from "react";
import { Button } from "./StyledComponent";
class RoundButton extends Component {
  handleClick = () => {
    this.props.function(this.props.value);
  };
  render() {
    return (
      <Button styler={this.props.value} onClick={this.handleClick}>
        {this.props.value}
      </Button>
    );
  }
}
export default RoundButton;
