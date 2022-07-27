
let strokes = 9;


 if (strokes === 1){
    console.log("Hole-in-one!");
 } else if (strokes <= -2){
    console.log("Eagle");
 } else if (strokes === "Par"){
    console.log("Par");
 } else if (strokes === +1){
    console.log("Bogey");
 } else if (strokes === +2){
    console.log("Double Bogey");
 } else if (strokes >= +3) {
    console.log("Go Home!");
 }