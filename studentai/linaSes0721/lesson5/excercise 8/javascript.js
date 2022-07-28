const year = 2010;
function keliamiejiMetai(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " metai yra keliamieji.")
} else {
    console.log(year + "metai nėra keliamieji.")
}
}