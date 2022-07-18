function formText(string, number){
    return string.slice(0, number*(-1));
};
console.log(formText["Hello world", 3]);

const str = "Hello world";
const noLastLetters = str.slice(0, -3);
console.log(noLastLetters);