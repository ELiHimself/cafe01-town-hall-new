let year = 2024;

function isLeapYear(year) {
  if (year % 4 === 0 || year % 100 === 1) {
    console.log('The year ' + year + ' is a leap year');
  } else {
    console.log('The year ' + year + ' is not a leap year');
  }
}
isLeapYear(year);
