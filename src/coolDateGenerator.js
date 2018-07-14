const moment = require('moment');
require('moment-immutable');

const coolNumbersSmall = [
  1,2,3,4,5,6,7,8,9,
  10,15,20,25,30,40,50,60,70,80,90,
  100,200,300,400,500,600,700,800,900,
];

const coolNumbersBig = coolNumbersSmall.concat([
  1000,2000,3000,4000,5000,6000,7000,8000,9000,
  10000,20000,30000,40000,50000,60000,70000,80000,90000,
]);

const coolNumbersHuge = coolNumbersBig.concat([
  100000,200000,300000,400000,500000,600000,700000,800000,900000,
  1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,
  10000000,20000000,30000000,40000000,50000000,60000000,70000000,80000000,90000000,
]);

const yearsGenerator = () => {
  const coolYears = [];
  coolNumbersSmall.map(
    year => coolYears.push({
      count: year,
      type: 'years',
    }),
  );
  return coolYears;
};

const monthsGenerator = () => {
  const coolWeeks = [];
  coolNumbersSmall.map(
    i => coolWeeks.push({
      count: i,
      type: 'months',
    }),
  );
  return coolWeeks;
};

const weeksGenerator = () => {
  const coolWeeks = [];
  coolNumbersSmall.map(
    i => coolWeeks.push({
      count: i,
      type: 'weeks',
    }),
  );
  return coolWeeks;
};

function removeWeekDays(array) {
  return array.filter(function (a) {
    return (a % 7);
  });
}


const daysGenerator = () => {
  const coolDays = [];
  removeWeekDays(coolNumbersBig).map(
    i => coolDays.push({
      count: i,
      type: 'days',
    }),
  );
  return coolDays;
};

const hoursGenerator = () => {
  const cools = [];
  coolNumbersBig.map(
    i => cools.push({
      count: i,
      type: 'hours',
    }),
  );
  return cools;
};

function removeHourNumbers(array) {
  return array.filter(function (a) {
    return (a % 60);
  });
}

const minutesGenerator = () => {
  const cools = [];
  removeHourNumbers(coolNumbersHuge).map(
    i => cools.push({
      count: i,
      type: 'minutes',
    }),
  );
  return cools;
};

const coolDates = [];
const allCoolDates = coolDates.concat(
  yearsGenerator(),
  monthsGenerator(),
  weeksGenerator(),
  daysGenerator(),
  hoursGenerator(),
  minutesGenerator(),
);

/**
 * For one date, generate an array of coolDates.
 */
const getPartyDates = (date) => {
  const partyDates = allCoolDates.map(
    (cooldate) => {
      const newCoolDate = cooldate;
      const addedDate = date.add(cooldate.count, cooldate.type);
      newCoolDate.date = addedDate;
      newCoolDate.formattedDate = addedDate.format('LL');
      return newCoolDate;
    },
  );
  return partyDates;
};

const sortCoolDates = (coolDatesArray) => {
  return coolDatesArray.sort((a, b) => {
    return a.date.valueOf() - b.date.valueOf();
  });
};

function futureDatesFilter(coolDate) {
  return coolDate.date.valueOf() > this;
}

// function tooFarFilter(cooldate) {
//   return coolDate.date.valueOf() > moment("2100-01-01").date.valueOf();
// }

export const getRelevantPartyDates = (date) => {
  // By default, start with the current date
  const startDate = moment().valueOf();
  const sortedDates = sortCoolDates(getPartyDates(date)).filter(futureDatesFilter, startDate)
  return sortedDates;
};
