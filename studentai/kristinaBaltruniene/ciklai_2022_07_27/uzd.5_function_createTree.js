function createTree(height) {
    for (let i = 1; i <= height; i++) {
        printRow(i, height)
    }

}
function printRow(rowNumber, height) {
    const rowWidth = height * 2 - 1;
    const starCount = rowNumber * 2 - 1;
    const space = (rowWidth - starCount) / 2;
    console.log(' '.repeat(space) + '*'.repeat(starCount) + ' '.repeat(space));
}

console.log(createTree(5));

