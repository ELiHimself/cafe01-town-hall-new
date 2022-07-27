let musicMan = -20;
let musicalGroup = ' '
if (musicMan === 0) {
    musicalGroup = 'ne grupe';
} else if (musicMan === 1) {
    musicalGroup = 'Han Solo';
} else if (musicMan === 2) {
    musicalGroup = 'duetas';
} else if (musicMan === 3) {
    musicalGroup = 'trio';
} else if (musicMan === 4) {
    musicalGroup = 'kvartetas';
}else if (musicMan < 0){
    musicalGroup = 'negali taip buti..';
}else {
    musicalGroup = 'didele grupe';
}
console.log(musicalGroup)
