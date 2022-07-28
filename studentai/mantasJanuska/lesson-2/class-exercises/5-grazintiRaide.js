


function getFirstLeter(str){
    const firstLeter = str
    .split(' ')
    .map(word => word[0])
    .join(' ');

    return str[0].toUpperCase();
}
console.log(getFirstLeter('nice'));


//arba:
function getFirstLeter(str){
    console.log(str.charAt(0).toUpperCase())
}
getFirstLeter('nice')