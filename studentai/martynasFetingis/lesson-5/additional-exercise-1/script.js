function leapYear(year) {
  if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
    return year + ' metai yra keliamieji';
  } else {
    return year + ' metai yra nekeliamieji';
  }
}

console.log(leapYear(2024));
