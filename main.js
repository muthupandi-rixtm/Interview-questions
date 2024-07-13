// Check if two dates are equal 07/12/2024 and 12-Jun-2024

function CompareDates() {
  let date1 = new Date("07/12/2024");
  let date2 = new Date("12-Jun-2024");

  function areDatesEqual(d1, d2) {
    return d1.toDateString() === d2.toDateString();
  }

  let result;

  if (areDatesEqual(date1, date2)) {
    result = "The dates are equal.";
  } else {
    result = "The dates are not equal.";
  }

  console.log(result);
}

//Add n days to an existing date ex - add 5 days to any given date

function addDaystoDate(date, days) {
  let result = new Date(date);

  result.setDate(result.getDate() + days);
  return result;
}

let originalDate = new Date("2024-07-10");
let daysToAdd = 5;
let newDate = addDaystoDate(originalDate, daysToAdd);

console.log(`Original Date : ${originalDate.toDateString()}`);
console.log(`New Date :${newDate.toDateString()}`);
