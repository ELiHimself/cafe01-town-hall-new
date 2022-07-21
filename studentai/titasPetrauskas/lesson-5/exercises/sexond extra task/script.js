function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  } 
  return false;
}

function daysInMonth(year, month) {
  if (month.toLowerCase() === 'january' || month.toLowerCase() === 'march' || month.toLowerCase() === 'may' || month.toLowerCase() === 'july' || month.toLowerCase() === 'august' || month.toLowerCase() === 'october' || month.toLowerCase() === 'december') {
    return `${month.charAt(0).toUpperCase() + month.slice(1)} has 31 day`;
  } else if (month.toLowerCase() === 'april' || month.toLowerCase() === 'june' || month.toLowerCase() === 'september' || month.toLowerCase() === 'november') {
    return `${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`;
  } else if (month.toLowerCase() === 'february') {
    if (leapYear === true) {
      return `${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`;
    }
    return `${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`;
  } else return `There is no such month as ${month}`;
}

daysInMonth(1236, 'February');