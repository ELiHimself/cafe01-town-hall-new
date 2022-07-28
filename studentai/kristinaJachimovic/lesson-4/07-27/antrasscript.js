function getLaugh(amount) {
  let text = '';
  for (let i = 0; i < amount; i++) {
    text += 'ha';
  }
  return text;
}

console.log(getLaugh(3));
console.log(getLaugh(6));
