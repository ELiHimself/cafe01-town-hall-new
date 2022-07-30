// const krepselis = ['vienas', {k: 1}, 1, null, -12, [], 'zodis', undefined, false];
//
// krepselis.splice(0, 2, '111', '222', '333')
//
// console.log(krepselis);
// //
// //
// // // krepselis+tipas => masyva tipu
// //
// //
// // function filterByType(basket, type) {
// //     let filteredBasket = [];
// //
// //     for (let item of basket) {
// //         if(typeof item === type) {
// //             filteredBasket.push(item);
// //         }
// //     }
// //
// //     return filteredBasket;
// // }
// //
// //
// // console.log(filterByType(krepselis, 'undefined'));
// //
// //
// // function test() {
// //     if(0 === 0) {
// //
// //     }
// // }
//
//
// let sakinys = "Siandien yra labai grazi diena";


const arr = ['today', 'good', 'is', 'a', 'good', 'day'];

console.log('arr', arr);
console.log(arr.concat('but', 'not', 'tomorrow'));

console.log('indexOf "good" is:', arr.indexOf('good'));
console.log('lastIndexOf "good" is:', arr.lastIndexOf('good'));

console.log('includes "a":', arr.includes('a'));
console.log('includes "a":', arr.includes('zoo'));


console.log('find "4 length"', arr.find((item) => item.length === 4 ));
console.log('findIndex "4 length"', arr.findIndex((item) => item.length === 4 ));
console.log('findIndex "9 length"', arr.findIndex((item) => item.length === 9 ));

