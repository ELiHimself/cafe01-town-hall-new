function getLaugh(amount) {
    let result = "ha";
    for (let i = 1; i < amount; i++) {
        result += "ha"
    }
    return result + "!"
}
console.log(getLaugh(5));