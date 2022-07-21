let runner = "Kendyll";
let position = 5;
let medal = "";


if (position === 1) {  
    medal = "gold";
} else if (position === 2) {   
    medal = "silver";
} else if (position === 3) {  
    medal = "bronze";
} else {  
    medal = "pat on the back";
}

if (position <= 3) {
    console.log(runner + " received a " + medal + " medal.");
} else {
    console.log(runner + " received a " + medal);
}