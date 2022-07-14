function getGeneration(number, gender) {
  if (number < 0 || gender === "m") {
    switch (number) {
      case -1: return 'father';
      break;
      case -2: return 'grandfather';
      break;
      case -3: return 'great grandfather';
      break;
    }
  } else if (number > 0 || gender === "m") {
    switch (number) {
      case 1: return 'son';
      break;
      case 2: return 'grandson';
      break;
      case 3: return 'great grandson';
      break;
    }
  } else if (number < 0 || gender === "f") {
    switch (number) {
      case -1: return 'mother';
      break;
      case -2: return 'grandmother';
      break;
      case -3: return 'great grandmother';
      break;
    }
  } else if (number > 0 || gender === "f") {
    switch (number) {
      case 1: return 'daughter';
      break;
      case 2: return 'granddaughter';
      break;
      case 3: return 'great granddaughter';
      break;
    }
  }
}

getGeneration (1, "m");