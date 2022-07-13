### Javascript functions

## challenge 1

1. create a file index.html and script.js
2. link your script.js file inside your index.html
3. inside script.js file, create a function for each case, and console log it (in case it returns)! For example:

```js
/**
 * @param name {string}
 * @returns {string}
 */

function greet(name) {
    return `Hello, ${name}!`;
}

const greting = greet('Awesome soon to be front-enders')
console.log(greeting);

```

repeat for all function types:

- void function that takes no parameters and does something
- void function that takes one parameter as object and mutates that object
- return function that takes no arguments but returns something (e.g. current time)
- return function that takes 1..n number of arguments, does something with input and returns the result

## challenge 2

Do the same with arrow functions

```js
/**
 * @returns {string}
 */

const getReaction = () => `Holy cow!`;

const reaction = getReaction();
console.log(reaction);

```

