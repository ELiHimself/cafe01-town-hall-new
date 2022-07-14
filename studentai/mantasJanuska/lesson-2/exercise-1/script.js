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
    return `ahoy mister ${ name}`;
}

const callOutLoud = callOut(name);
console.log(callOut("Mantas"));

// return current time

function currentTime(){
    return `today is ${date}, and time is ${time}`
}


console.log(currentTime())