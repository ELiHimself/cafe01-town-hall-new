function formText(string, number) {
  return string
    .split('')
    .splice(0, string.length - number)
    .join('');
}

// Ar teisingas toks formatavimas? (man vizualiai patogesnis)
// Nes originaliai viska vienoje eiluteje dariau.

console.log(formText('Hello World', 3));
