import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Season from "./Season";

describe(Season.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 1, 9));
  });
  it("renders a icon `❄`", () => {
    render(<Season name="winter" />);
    expect(screen.getByText("❄")).toBeInTheDocument();
  });
  it("renders a title `Winter`", () => {
    render(<Season name="winter" />);
    expect(screen.getByText("Winter")).toBeInTheDocument();
  });
  it("renders a text `99days`", () => {
    render(<Season name="winter" />);
    expect(screen.getByText("50 days ago")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
