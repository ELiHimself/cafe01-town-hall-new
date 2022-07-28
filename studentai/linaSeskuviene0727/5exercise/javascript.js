function createTree(height) {
    for (let i = 1; i <= height; i++) {
        row(i, height);
    }
}
function row(rowNumber, height) {
    const rowWidth = height * 2 - 1;
    const star = rowNumber * 2 - 1;
    const space = (rowWidth - star) / 2;
    console.log(" ".repeat(space) + "*".repeat(star) + " ".repeat(space));
}  
createTree(5);