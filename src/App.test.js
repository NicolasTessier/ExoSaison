import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import data from "./seasons.json";
import { getSeason } from "./utils";
import ReactDOM from "react-dom";

describe(App.name, () => {
  it("renders the season", () => {
    render(<App />);
    expect(screen.getByTestId("season")).toBeInTheDocument();
  });
  it("renders the button", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("not renders the next season", () => {
    render(<App />);
    expect(screen.queryByTestId("next_season")).not.toBeInTheDocument();
  });

  it("renders the next season", () => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
    render(<App />);
    fireEvent.click(screen.queryByText("And After ?"));
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

it("returns correct seasons when we are on january", () => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 0, 1));
  const [season, nextSeason] = getSeason();
  expect(season).toBe(data.seasons[0]);
  expect(nextSeason).toBe(data.seasons[1]);
  jest.useRealTimers();
});

it("returns correct seasons when we are on august", () => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 8, 1));
  const [season, nextSeason] = getSeason();
  expect(season).toBe(data.seasons[2]);
  expect(nextSeason).toBe(data.seasons[3]);
  jest.useRealTimers();
});
