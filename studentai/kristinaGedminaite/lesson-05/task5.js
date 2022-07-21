const strokes = 1;

if (strokes === 1) {
    console.log("Hole-in-one!");
} else if (strokes <= -2) {
    console.log("Eagle");
} else if (strokes === - 1) {
    console.log("Birdie");
} else if (strokes === "par") {
    console.log("Par");
} else if (strokes === +1) {
    console.log("Bogey");
} else if (strokes === +2) {
    console.log("Double Bogey");
} else {
    console.log("Go Home!");
}