let result1 = 0;

function noParams() {
    result1 = 10;
}

noParams();
console.log(result1);

// ----

const Person = {
    firstName: 'Jonas',
    age: 10,
    isHuman: true,
}

function notHuman(obj) {
    obj.isHuman = false;
}

notHuman(Person);
console.log(Person);

// ----

function currentTime() {
    return new Date().toLocaleTimeString();
}

const result2 = currentTime();
console.log(result2);

// ----

function sumAll(...args) {
    let result3 = 0;
    args.forEach(element => {
        result3 += element;
    });
    return result3;
}

const result4 = sumAll(1,2,3,4,5);
console.log(result4);

// ------------------------

console.log('now, arrow functions');

let resultA = 0;

const noParamsB = () => {
    resultA = 10;
}

noParamsB();
console.log(resultA);

// ----

const Person2 = {
    firstName: 'Jonas',
    age: 10,
    isHuman: true,
}

const notHumanB = (obj) => {
    obj.isHuman = false;
}

notHumanB(Person2);
console.log(Person2);

// ----

const currentTimeB = () => {
    return new Date().toLocaleTimeString();
}

const resultB = currentTimeB();
console.log(resultB);

// ----

const sumAllB = (...args) => {
    let resultC = 0;
    args.forEach(element => {
        resultC += element;
    });
    return resultC;
}

const resultD = sumAllB(1,2,3,4,5);
console.log(resultD);