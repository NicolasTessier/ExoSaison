import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Season from "./Season";

describe(Season.name, () => {
  it("renders a icon `❄`", () => {
    render(<Season name="winter" />);
    expect(screen.getByText("❄")).toBeInTheDocument();
  });
  it("renders a title `Winter`", () => {});
  it("renders a text `99days`", () => {});
});
