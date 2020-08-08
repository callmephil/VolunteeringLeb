import moment from "moment";

export const getTodayDate = (string) => {
  return string ? moment().format("YYYY-MM-DD") : new Date();
}

export const getModDate = (type, nbr, string) => {
  return string ? moment().add(nbr, type).format("YYYY-MM-DD") : moment().add(nbr, type)._d;
}

export const convertStringsToDates = (...args) => {
  return args.map(arg => new Date(arg));
};

export const convertDatesToStrings = ([...args]) => {
    return args.map(arg => moment(arg).format("YYYY-MM-DD"))
}

export const convertStringToDate = (arg) => {
  return new Date(arg);
}

export const convertDateToString = (arg) => {
  return moment(arg).format("YYYY-MM-DD");
}

export const getDatesDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
  const getDateAsArray = date => {
    return moment(date.split(/\D+/), date_format);
  };
  const diff = getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1;
  const dates = [];
  for (let i = 0; i < diff; i++) {
    const nextDate = getDateAsArray(start_date).add(i, "day");
    const isWeekEndDay = nextDate.isoWeekday() > 5;
    if (!isWeekEndDay)
      dates.push({date: nextDate.format('dddd, DD-MM-YYYY'),  code: nextDate.format(date_format)})
  }
  return dates;
};

const CODI_START_TIME = 8;
const CODI_END_TIME = 17;

export const getDailyHours = () => {
  const dailyHours = [];
  const x = nbr => {
    return nbr < 10 ? `0${nbr}` : nbr;
  };
  for (let i = CODI_START_TIME; i <= CODI_END_TIME; i++) {
    const timeFormat = `${x(i)}:00`;
    dailyHours.push({ time: timeFormat, code: timeFormat });
  }
  return dailyHours;
};