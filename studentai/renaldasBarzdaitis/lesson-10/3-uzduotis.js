//neveike pirmas kartas

// function getHighestNumber (...arg) {
//     let max = 0;
//     for (let n = 0; n <= arg.length; n++) {
//         if (arg[n] > max) {
//             max = arg[n];
//         }
//         return max;
//     }
// }

// console.log(getHighestNumber(1, 2, 3, 4, 5));

function getHighestNumber (...arg) {
    let max = 0;
    for (let n = 0; n <= arg.length; n++) {
        if (arg[n] > max) {
            max = arg[n];
        }
    }
  console.log(max);
}

getHighestNumber(1, 2, 3, 40, 5);

//kodel as uztrukau tiek laiko? kam tiek nervu bereikalingu?
//rasiau "console.log(getHighestNumber(1, 2, 3, 40, 5));" ir man mete 0
//o taip rode nes console.log'inau is uz funkcijos ribu.