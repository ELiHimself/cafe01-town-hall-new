function min(a, b) {
    if (a > b) {
        return b;
    }
    if (b > a) {
        return a;
    }
}

console.log(min(5,9));
console.log(min(10,2));