import { render, fireEvent } from "@testing-library/react";
import React from "react";
import RoundButton from "./index";
describe("RoundButton");
{
  it("should call function with value of button", () => {
    const propFunction = jest.fn();
    const { getByText } = render(<RoundButton function={propFunction} />);
    const buttonClick = getByText("1");
    fireEvent.click(buttonClick);
    expect(propFunction).toBeCalledWith(1);
  });
}
