const word = prompt('type any word');
const getFirstLetter = Array.from(word)[0];
const result = getFirstLetter.toUpperCase();
alert(`The first capitalized letter of word you typed is ` + result)