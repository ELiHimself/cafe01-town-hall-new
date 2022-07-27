function getLaugh(amount) {
    let result = "";
    for (let i = 0; i < amount; i++) {
        result += "ha"
    }
    return result + "!"
}
console.log(getLaugh(5));