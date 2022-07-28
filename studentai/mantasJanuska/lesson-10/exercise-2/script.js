function getLaugh(num){
    let laugh = ' ';
    for(let i = 0; i < num; i++){
        laugh += 'ha';
    }
    return laugh + '!';
}
console.log(getLaugh(5));