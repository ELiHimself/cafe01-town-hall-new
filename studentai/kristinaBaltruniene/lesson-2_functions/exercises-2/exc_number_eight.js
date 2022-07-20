function getGeneration(number, gender) {

    const generation = [-3, -2, -1, 0, 1, 2, 3];
    const male = ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson'];
    const female = ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter'];
    
    const index = generation.indexOf(number)

    if ('m' === gender) {
        return male[index];
    } 
    if ('f' === gender) {
        return female[index];
    } 
    return null;
}

console.log(getGeneration(2, 'f'));