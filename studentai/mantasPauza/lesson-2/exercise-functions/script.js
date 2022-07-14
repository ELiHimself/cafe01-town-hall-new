// *************************

function greet(name) {
    return `Hello, ${name}!`;
}

//**************************

const greeting = greet('Awesome soon to be front-enders')
console.log(greeting);

//**************************

function empty() {
    console.log('I am a void function');
};

empty();

// *************************
const person = {
    age : 27,
    name : 'Mantas',
    hobbies : ['programming', 'reading'],
}

function mutate(person) {
    person.age = 28;
    person.name = 'Mantas Pauza';
    person.hobbies.push('workout');
    return person;
}

console.log(person);

mutate(person);

console.log(person);

// *************************

const currentTime = new Date();
console.log(currentTime);

// *************************

function getAmountOfLetters(arguments) {
    return arguments.length;
}

console.log(getAmountOfLetters('kebabai' + ' yra ' + 'skanu'));

// **********************************************************************************

const cars = ['audi', 'bmw', 'mercedes', 'opel'];

console.log(cars.map(car => car.charAt(0).toUpperCase()+car.slice(1)));

// *************************

const emptyArrow = console.log('I am a void function');

// *************************

const mutation = person => {
    person.age = 29;
    person.name = 'Mantas Pauza';
    person.hobbies.push('sleeping');
    return person;
}

mutation(person);

console.log(person);

// *************************    

const currentTimeNew = () => new Date().toLocaleTimeString();

const results = currentTimeNew();
console.log(results);

// *************************

const getAmountOfLettersB = (arguments) => arguments.length;

console.log(getAmountOfLettersB('kebabai' + ' yra ' + 'labai ' + 'skanu'));