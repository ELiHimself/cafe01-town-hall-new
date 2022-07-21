let runner = "Kendyll";
let position = 3;
let medal;

if(position === 1){
    medal = 'gold';
    console.log(runner + ' received a ' + medal + ' medal.');
} else if(position === 2){
    medal = 'silver';
    console.log(runner + ' received a ' + medal + ' medal.');
} else if(position === 3){
    medal = 'bronze';
    console.log(runner + ' received a ' + medal + ' medal.');
} else {
    medal = 'pat on the back';
    console.log(runner + ' ' + medal);
}
