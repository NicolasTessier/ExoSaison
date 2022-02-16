import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SeasonCard from "./SeasonCard";
import data from "../seasons.json";

describe(SeasonCard.name, () => {
  it("renders SeasonCard", () => {
    render(<SeasonCard season={data.seasons[0]} />);
    expect(screen.getByTestId("season")).toBeInTheDocument();
  });

  it("renders SeasonCard children", () => {
    render(
      <SeasonCard season={data.seasons[0]}>
        <p>test</p>
      </SeasonCard>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("renders winter informations", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 16));
    render(
      <SeasonCard season={data.seasons[0]}>
        <p>test</p>
      </SeasonCard>
    );
    expect(screen.getByText("Winter")).toBeInTheDocument();
    expect(screen.queryByText("From 57 days")).toBeInTheDocument();
    jest.useRealTimers();
  });
});
