// function greet(name) {
//     return `Hello, ${name}!`;
// }

/*const greeting = greet('Awesome soon to be front-enders')
console.log(greeting);*/

// void function with no parameters

 function greet() {
    return "ahoy mister";
}

const greeting= greet();
console.log(greet());

// void function with one parameter

function callOut(name) {
    return `ahoy mister ${name}`;
}

const callOutLoud = callOut(name);
console.log(callOut("Mantas"));

// return current date

function currentDate(){
    return `today is ${date}`;
}

const date = new Date();
console.log(currentDate());

// function that takes 1..n arguments

function add(a, b, c, d){
    add = a + b + c + d;
}
const sum = add(1, 2, 3, 4);
console.log(add);

//Chalange 2

const getReaction = () => `Holy cow!`;

const reaction = getReaction();
console.log(reaction);
