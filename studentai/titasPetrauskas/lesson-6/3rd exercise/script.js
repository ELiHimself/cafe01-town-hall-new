// function getHighestNumber(...args) {
//   return Math.max(...args);
// }

// console.log(getHighestNumber(12, 6, 654, 44));

// ***************************************************

// function getHighestNumber(...args) {
//   let highNum = 0;
//   for (let arg of args) {
//     if (args[arg] > args[arg + 1]) {
//       highNum = args[arg];
//     } else {
//       highNum = args[arg + 1];
//     }
//     return console.log(highNum);
//   }
// }
// getHighestNumber(12, 6, 654, 44);

function getHighestNumber(...args) {
  console.log(args);
  let highNum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > highNum) {
      highNum = args[i];
    }    
  } 
  return `The highest number is ${highNum}`; 
}

console.log(getHighestNumber(12, 123, 4256, 12, 777, 1));