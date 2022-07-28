function createTree(height) {
  for (let i = 1; i <= height; i++) {
    treeRow(i, height);
  }

  function treeRow(height) {
    let star = (height * 2) - 1;
    let width = (height * 2) - 1;
    let space = (width - star) / 2;

    console.log(' '.repeat(space) + '*'.repeat(star) + ' '.repeat(space));
  }
}


createTree(5);

/*

....*.... -> 4-1-4
...***... -> 3-3-3
..*****.. -> 2-5-2
.*******. -> 1-7-1
********* -> 0-9-0

*/