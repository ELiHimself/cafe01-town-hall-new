//random number between 0 and 1 (f.e 0.5, 0. 5345, 0. 1541534234 etc.)
function randomFraction() {                        //JavaScript has a Math.random() function that generates a random decimal number
    return Math.random();                          //between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
  }

  //rounding numbers to whole (f.e 0.51223413 = 1, 4.1124 = 4, 8.935412 = 9 etc.)
function randomWholeNum() {                        //Math.random() can never quite return a 1 and, because we're rounding down,
                                                   //it's impossible to actually get 10. This technique will give us a whole number between 0 and 9.
  return Math.floor(Math.random() * 10 );          //We are calling Math.random(), multiplying the result by 10
}                                                  //then passing the value to Math.floor() function to round the value down to the nearest whole number.

//range between min and max (5 - 10 = 5, 6, 7, 8, 9, 10. only between those 2 numbers)
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }

randomRange(5, 10);

//string to integer (number)
function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");