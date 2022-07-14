// *************************

function greet(name) {
    return `Hello, ${name}!`;
}

//**************************

const greeting = greet('Awesome soon to be front-enders')
console.log(greeting);

//**************************

void function () {
    console.log('I am a void function');
}();

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

mutate(person);

console.log(person);

// *************************

const currentTime = new Date();
console.log(currentTime);

// *************************
