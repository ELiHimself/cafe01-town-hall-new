
function createTree(height){
    for (let i = 1; i <= height; i++){
        createRow(i, height);
    }
}
function createRow(rowNumber, height){
    const rowWidth = height * 2 -1;
    const starCount = rowNumber * 2 -1;
    const space = (rowWidth - starCount)/2;
   
    console.log('*'.repeat(starCount) + ' '.repeat(space));
}
createTree(5);