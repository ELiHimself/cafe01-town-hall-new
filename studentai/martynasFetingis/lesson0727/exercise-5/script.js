function drawChristmasTree(height) {
  let tree = '';
  for (let i = 0; i <= height; i++) {
    console.log((tree += '+'));
  }
}
drawChristmasTree(10);
