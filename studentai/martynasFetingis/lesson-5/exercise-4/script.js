function musicGroup(ppl) {
  if (ppl <= 0) {
    return 'ne grupė';
  } else if (ppl === 1) {
    return 'solo';
  } else if (ppl === 2) {
    return 'duetas';
  } else if (ppl === 3) {
    return 'trio';
  } else if (ppl === 4) {
    return 'kvartetas';
  } else {
    return 'didelė grupė';
  }
}

console.log(musicGroup(7));
