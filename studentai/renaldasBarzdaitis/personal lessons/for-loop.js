
// while loops

const ourArray = [];
let i = 0;
        //\/---------------------------                  //
while (i < 5) {                     //|                  //In the code example above, the while loop will execute 5 times
  ourArray.push(i);                 //|                     //and append the numbers 0 through 4 to ourArray.   //^
  i++;                              //|                     //so console will print myArray[0, 1, 2, 3, 4]      //|
}                                   //---------------------------------------------------|  ^  ^  ^  ^  ^  |    //|
                                                                                       //|  1  2  3  4  5  |    //|
                                                                                       //|5 times excecuted|-------
const myArray = [];
let i = 0;                                               //same while loop, but this time (i <=5) which means it will print 
while (i <= 5) {                                         //[0, 1, 2, 3, 4, 5]
  myArray.push(i);                                       //but the task requires to print the array in descending
  i++;
}
console.log(myArray.reverse());                          //so .reverse comes in handy to flip the array.

// Setup
const myArray = [];

for (let i = 1; i <= 9; i += 2){                         //pushes "odd" numbers to myArray
  myArray.push(i);                                       //so myArray will have [1, 3, 5, 7, 9];
}                                                        //because let i = 1; will start from 1 (instead of 0) and +=2 will add 2 every time
                                                         //the cycle repeats until it gets to 9, because i <= 9;

                                                         //add array elements to total, by adding each element to each other to get total of 20
const myArr = [2, 3, 4, 5, 6];                           //because total = 0; so 0 + 2 + 3 + 4 + 5 + 6 = 20
                                                         //                          |     myArr     |
let total = 0;

for (let i = 0; i < myArr.length; i++) {                 //let i = 0 (it starts from 0(index = 0), then i is smaller than myArr.length( length is how many
  total += myArr[i];                                     //elements are in the array (2, 3, 4, 5, 6) = 5 elements), i++ adds a new cycle to i until it
}                                                        //reaches the size of myArr.length, so when i = 5 it stops the cycle).
                                                         //then "total" gets the total of all the elements in myArr added to each other.

// recursion loop

//for loop example
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product; 
}

//recursion example
function multiply(arr, n) {                              //The recursive version of multiply breaks down like this.
  if (n <= 0) {                                          //In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1.
    return 1;                                            //That function call is evaluated in the same way, calling multiply again until n <= 0.
  } else {                                               //At this point, all the functions can return and the original multiply returns the answer.
    return multiply(arr, n - 1) * arr[n - 1];
  }                                                      //Recursive functions must have a base case when they return without calling the function again 
}                                                        //(in this example, when n <= 0), otherwise they can never finish executing.

//more recursion examples

function sum(arr, n) {
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1];
}
}

//The function should return an array of integers which begins with a number represented by the startNum parameter 
//and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. 
//Your function must use recursion by calling itself and not use loops of any kind. 
//It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
  return [startNum];
  }
  const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
};

rangeOfNumbers(1, 5)

//rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
//rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
//rangeOfNumbers(4, 4) should return [4].