function min(a, b) {
  return a > b ? b
        : a < b ? a
        : a;
};
console.log(min(3, 4));
console.log(min(1, 10));
console.log(min(4, -1));