// function getMin(array) {
//     const minimum = array.sort((a, b) => a - b);
//     return {
//         min: minimum[0],
//     };
// };
function min(a, b) {
    if (a>b) {  
        return b;
    }
        return a;
};
console.log(min(5, 6));
console.log(min(10,4));
console.log(min(3,-1));