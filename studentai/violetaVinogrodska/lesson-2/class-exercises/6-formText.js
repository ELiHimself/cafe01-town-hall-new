function formText(){
    return formText.replace(/[^\d.-]/g, "");
};
console.log(formText["Hello world", 3]);

const str = "Hello world";
const noLastLetters = str.slice(0, -3);
console.log(noLastLetters);