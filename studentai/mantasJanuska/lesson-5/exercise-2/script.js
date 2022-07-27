let runner = "Kendyll";
let position = 25;
let medal;
if (position === 1) {  
    medal = "gold medal"; 
} else if(position === 2) {
    medal = "silver medal";
} else if(position === 3) {  
    medal = "bronze medal";
} else {  
    medal = "pat on the back";
}
console.log(runner + " received a " + medal);
