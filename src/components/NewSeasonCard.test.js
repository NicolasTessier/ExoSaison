import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewSeasonCard from "./NewSeasonCard";
import data from "../seasons.json";

describe(NewSeasonCard.name, () => {
  it("renders NewSeasonCard", () => {
    render(<NewSeasonCard season={data.seasons[0]} />);
    expect(screen.getByTestId("next_season")).toBeInTheDocument();
  });

  it("renders NewSeasonCard children", () => {
    render(
      <NewSeasonCard season={data.seasons[0]}>
        <p>test</p>
      </NewSeasonCard>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("renders Summer informations", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 7, 16));
    render(
      <NewSeasonCard season={data.seasons[2]}>
        <p>test</p>
      </NewSeasonCard>
    );
    expect(screen.getByText("Summer")).toBeInTheDocument();
    expect(screen.queryByText("Duration 94 days")).toBeInTheDocument();
    expect(screen.queryByText("In 56 days")).toBeInTheDocument();
    jest.useRealTimers();
  });
});
