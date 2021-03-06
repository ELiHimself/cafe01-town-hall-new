let result1 = 0;

function noParams() {
    result1 = 10;
}

noParams();
console.log(result1);

// ----

const person = {
    firstName: 'Jonas',
    age: 10,
    isHuman: true,
}

function makeObjNotHuman(obj) {
    obj.isHuman = false;
}

makeObjNotHuman(person);
console.log(person);

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

const person2 = {
    firstName: 'Jonas',
    age: 10,
    isHuman: true,
}

const makeObjNotHumanB = (obj) => {
    obj.isHuman = false;
}

makeObjNotHumanB(person2);
console.log(person2);

// ----

const currentTimeB = () => new Date().toLocaleTimeString();

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