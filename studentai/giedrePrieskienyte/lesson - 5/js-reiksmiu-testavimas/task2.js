let runner = "Kendyll";
let position = 5;
let medal;

if (position === 1){
    medal = "gold";
} else if (position === 2){
    medal = "silver";
} else if (position === 3){
    medal = "silver";
} else {
    medal = "pat on the back"
}

const lastWord = position <= 3 ? "medal." : " ";

console.log( runner + " received a " + medal + lastWord + ".");
