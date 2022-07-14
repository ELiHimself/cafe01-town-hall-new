const generationTable = {
    '3': {'m': 'great grandson', 'f': 'great granddaughter'},
    '2': {'m': 'grandson', 'f': 'granddaughter'},
    '1': {'m': 'son', 'f': 'daughter'},
    '0': {'m': 'me!', 'f': 'me!'},
    '-1': {'m': 'father', 'f': 'mother'},
    '-2': {'m': 'grandfather', 'f': 'grandmother'},
    '-3': {'m': 'great grandfather', 'f': 'great grandmother'},
    
}

function getGeneration(line, gender) {
    return generationTable[line][gender];
};

console.log(getGeneration(-1, 'm'));
console.log(getGeneration(3, 'f'));
console.log(getGeneration(0, 'f'));