let strokes = 3;
let par = 1;

if (strokes === 1) {
    console.log("Hole-in-one!");
} else if (strokes <= par - 2) {
    console.log("Eagle");
} else if (strokes == par - 1) {
    console.log("Birdie");
} else if (strokes == par) {
    console.log("Par");
} else if (strokes == par + 1) {
    console.log("Bogey");
} else if (strokes == par + 2) {
    console.log("Double Bogey");
} else if (strokes >= par + 3) {
    console.log("Go Home!");
}
