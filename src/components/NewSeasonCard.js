import { convertToDate, getDateFrom } from "../utils";
import "../styles/NewSeasonCard.css";
import "../styles/SeasonCard.css";
import { formatDistanceStrict } from "date-fns";

function NewSeasonCard({ season, children }) {
  const getDuration = () => {
    return formatDistanceStrict(
      convertToDate(season.start),
      convertToDate(season.end),
      {
        unit: "day",
      }
    );
  };
  return (
    <div
      className="new_season_card season_card"
      style={{ backgroundImage: `url(${season.image})` }}
    >
      <h1 className="new_season_name">{season.name}</h1>
      <p className="new_season_duration">{"Duration " + getDuration()}</p>
      <p className="season_from">
        <span>In </span>
        <span>{getDateFrom(season.start)}</span>
      </p>
      {children}
    </div>
  );
}

export default NewSeasonCard;
