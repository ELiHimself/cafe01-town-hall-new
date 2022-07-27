let runner = "Kendyll";
let position = 2;
let medal;


if (position === 1){
    medal = "gold"
}else if(position === 2){
    medal = "silver"
}else if(position ===3){
    medal = "bronze"
}else{
    medal = "pat on the back"
}

const lasWord = position <=3 ? 'medal' : ''
console.log(runner + " received a " + medal + lasWord + '.');

//answer silver medal