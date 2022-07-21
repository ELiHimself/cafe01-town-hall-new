// function getGeneration(num, gender) {
    
//     if (num === 0 && gender === 'm'){
//         return "it's a me Mario";
//     } else if (num === 1 && gender === 'm') {
//         return "Welcome my son!";
//     } else if (num === 2 && gender === 'm') {
//         return "Im too young to have a grandson";
//     } else if (num === 3 && gender === 'm') {
//         return "Grandson you are great";
//     } else if (num === -1 && gender === 'm') {
//         return "No, i am your father";
//     } else if (num === -2 && gender === 'm') {
//         return "Hello grandfather";
//     } else if (num === -3 && gender === 'm') {
//         return "Grand grandfather";
//     } else if (num === 0 && gender === 'f') {
//         return "it's a me Princes Peach";
//     } else if (num === 1 && gender === 'f') {
//         return "Welcome my daughter!";
//     } else if (num === 2 && gender === 'f') {
//         return "Im too young to have a granddauther";
//     } else if (num === 3 && gender === 'f') {
//         return "Granddauhter, you are great";
//     } else if (num === -1 && gender === 'f') {
//         return "dont talk with your mother like that";
//     } else if (num === -2 && gender === 'f') {
//         return "Hello grandmother";
//     } else if (num === -3 && gender === 'f') {
//         return "Grand grandmother is grand";
//     }
// }
// console.log(getGeneration(3, "f"));

// different aproach

const fm = {
    m: ' ',
    f: ' ',
}

function getGeneration(num, gender) {
    
    const table = {
        "-3": {m: 'Grand grandfather', f: 'Grand grandmother is grand',},
        "-2": {m: 'Hello grandfather', f: 'Hello grandmother',},
        "-1": {m: 'No, i am your father', f: 'dont talk with your mother like that',},
        "0": {m: 'it\'s a me Mario', f: 'it\'s a me Princes Peach',},
        "1": {m: 'Welcome my son!',f: 'Welcome my daughter!',},
        "2": {m: 'Im too young to have a grandson',f: 'Im too young to have a granddauther',},
        "3": {m: 'Grandson you are great', f: 'Granddauhter, you are great',},
    }
    return table[num][gender]
}

console.log(getGeneration(3, "f"));