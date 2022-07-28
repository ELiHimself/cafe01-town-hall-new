const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

/* function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
} */

// šitą dariau per freecodecamp, tai pabandžiau su switch padaryt.



function golfSwitch(par, strokes) {
    let result = "";
  switch (true) {
    case (strokes === 1):
    result = names[0];
    break;
    case (strokes <= par - 2):
    result = names[1];
    break;
    case (strokes === par - 1):
    result = names[2];
    break;
    case (strokes === par):
    result = names[3];
    break;
    case (strokes === par + 1):
    result = names[4];
    break;
    case (strokes === par + 2):
    result = names[5];
    break;
    default:
    result = names[6];
  }

    return result;
}


console.log(golfSwitch(1, 1));
console.log(golfSwitch(4, 2));
console.log(golfSwitch(4, 7));
console.log(golfSwitch(4, 6));