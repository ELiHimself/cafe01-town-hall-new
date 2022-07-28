function wave(str) {
  const result = [];
  const letters = str.split('');

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== ' ') {
      letters.splice(i, 1, letters[i].toUpperCase());
      result.push(letters.slice(0));
      letters.splice(i, 1, letters[i].toLowerCase());
    }
  }

  return result;
}

console.log(wave('hello'));
console.log(wave(' h e y '));
console.log(wave(''));
