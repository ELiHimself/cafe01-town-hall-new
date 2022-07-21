function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return `${year} is a leap year.`;
  } 
  return `${year} is just a regular year.`
}

console.log(leapYear(1236));