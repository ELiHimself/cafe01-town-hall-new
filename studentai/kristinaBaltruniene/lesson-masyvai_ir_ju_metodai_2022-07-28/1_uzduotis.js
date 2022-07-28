const styles = ["jazz", "blues"];

styles.push("rock-n-roll");
console.log(styles);

styles[1] = "classics";
console.log(styles);

const removedStyle = styles.shift();

console.log(removedStyle);

styles.unshift("rap", "reggae");

console.log(styles);
