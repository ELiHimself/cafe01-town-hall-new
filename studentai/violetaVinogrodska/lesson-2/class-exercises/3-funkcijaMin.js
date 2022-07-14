function getMin(array) {
    const minimum = array.sort((a, b) => a - b)

    return {
        min: minimum[0],
    }
}
console.log(getMin([5, 6]));
console.log(getMin([10,4]));
console.log(getMin([3,-1]));