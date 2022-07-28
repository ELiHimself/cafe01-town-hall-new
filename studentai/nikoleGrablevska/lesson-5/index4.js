function grupe(count) {
    if (count <= 0) {
        return "ne grupe";
    } else if (count === 1) {
        return "solo";
    } else if (count === 2) {
        return "duetas";
    } else if (count === 3) {
        return "trio";
    } else if (count === 4) {
        return "kvartetas";
    } else if (count > 4) {
        return "didele grupe";
    }
}

console.log(grupe(3));
console.log(grupe(8));