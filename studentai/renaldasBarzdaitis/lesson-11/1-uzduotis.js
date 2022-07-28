const array = ["Jazz", "Blues"];

console.log(array); //array before push

array.push("Rock-n-Roll"); 

console.log(array); //array after push and before changing
//second element

array[1] = "Classics";

console.log(array); //array after changing second element
//and before deleting first element
array.shift();

console.log(array); //array after deleting first element
//and before adding new elements to begining

array.unshift("Rap", "Reggae");

console.log(array); //array after adding new elements to begining