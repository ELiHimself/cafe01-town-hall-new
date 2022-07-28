let music = ["Jazz", "Blues"];
console.log(music);

let music2 = ["Jazz", "Blues"]
music2.push("Rock-n-Roll");
console.log(music2);


let music3 = ["Jazz", "Blues", "Rock-n-Roll"];
music3[1] = "Classic";
console.log(music3)

let music4 = ["Jazz", "Classic", "Rock-n-Roll"]
music4.shift();
console.log(music4);

let music5 = ["Classic", "Rock-n-Roll"]
music5.unshift("Rap", "Reggae");
console.log(music5);