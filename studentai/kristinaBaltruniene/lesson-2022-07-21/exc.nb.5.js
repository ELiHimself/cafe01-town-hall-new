const names = ["hole-in-one!", "eagle", "birdie", "par", "bogey", "double bogey", "go home!"];

function golfScore(strokes,par) {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes = par - 1) {
        return names[2];
    } else if (strokes = par) {
        return names[3];
    } else if (strokes = par + 1) {
        return names[4];
    } else if (strokes = par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }


}
console.log(golfScore(2,3));