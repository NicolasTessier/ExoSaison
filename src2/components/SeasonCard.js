import React from "react";
import { getDateFrom } from "../utils";
import "../styles/SeasonCard.css";

function SeasonCard({ season, children }) {
  return (
    <div className="season_card" data-testid="season">
      <h1 className="season_name">{season.name}</h1>
      <p className="season_from">
        <span>From {getDateFrom(season.start)}</span>
      </p>
      {children}
    </div>
  );
}

export default SeasonCard;
