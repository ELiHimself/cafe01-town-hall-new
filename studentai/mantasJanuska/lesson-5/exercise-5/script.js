

function score(par, hits) {

    const golfNames = ["hole-in-one", "eagle", "birdie", "Par", "bogey", "double bogey", "go Home!"];

    if (hits === 1){
        return golfNames[0];
    }else if (hits <= par - 2) {
        return golfNames[1];
    }else if (hits <= par - 1) {
        return golfNames[2];
    }else if (hits <= par) {
        return golfNames[3];
    }else if (hits <= par + 1) {
        return golfNames[4];
    }else if (hits <= par + 2) {
        return golfNames[5];
    }else {
        return golfNames[6];
    }

}
console.log(score(6, 4));
