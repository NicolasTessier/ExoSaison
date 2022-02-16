import { formatDistanceToNowStrict } from "date-fns";

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
