import { getDateFrom } from "../utils";
import "../styles/SeasonCard.css";

function SeasonCard({ season, children }) {
  return (
    <div className="season_card">
      <h1 className="season_name">{season.name}</h1>
      <p className="season_from">
        <span>From </span>
        <span>{getDateFrom(season.start)}</span>
      </p>
      {children}
    </div>
  );
}

export default SeasonCard;
