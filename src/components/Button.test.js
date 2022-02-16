import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe(Button.name, () => {
  it("renders the button", () => {
    render(<Button label="test" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders the label", () => {
    render(<Button label="test" />);
    expect(screen.queryByText("test")).toBeInTheDocument();
  });
  it("triggers the function", () => {
    const funct = jest.fn();
    render(<Button label="test" onClick={funct} />);
    fireEvent.click(screen.getByRole("button"));
    expect(funct).toHaveBeenCalled();
  });
});
