import { useEffect, useState } from 'react';

const useCountdown = (endingDate: string) => {
  const [startingDate, setStartingDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setStartingDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [startingDate]);

  return getReturnValues(startingDate, endingDate);
};

const getReturnValues = (startingDate: Date, endingDate: string) => {
  let startDate = new Date(startingDate.toISOString());
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();
  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    monthDiff += 12;
  }

  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  let hourDiff = endDate.getHours() - startDate.getHours();

  return [monthDiff, dayDiff, hourDiff];
};

export { useCountdown };