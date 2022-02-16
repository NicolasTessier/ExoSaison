import { formatDistanceToNowStrict, isWithinInterval } from "date-fns";
import data from "./seasons.json";

export const getSeason = () => {
  const today = new Date();
  for (let i = 0; i < data.seasons.length; i++) {
    const start = convertToDate(data.seasons[i].start);
    const end = convertToDate(data.seasons[i].end);
    if (isWithinInterval(today, { start, end })) {
      return [data.seasons[i], data.seasons[(i + 1) % 4]];
    }
  }
};

export const convertToDate = (date) => {
  const [day, month, year] = date.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const getDateFrom = (date) => {
  const formattedDate = convertToDate(date);
  return formatDistanceToNowStrict(formattedDate, {
    unit: "day",
  });
};
