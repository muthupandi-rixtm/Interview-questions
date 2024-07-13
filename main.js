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
