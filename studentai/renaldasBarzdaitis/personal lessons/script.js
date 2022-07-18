
//functions with argument
function functionWithArgs(a, b) {                       //funkcija kuri turi 2 arguments
    console.log(a + b);                                 //konsole kuri 2 argumentus sudeda
  }
  
  functionWithArgs(1, 2);                               //pakvieciau funkcija kuriois viduje yra argumentai kuriuos sudesime
                                                        //gali buti ir zodziai a = "hello", b = "world" tada pakvietus
                                                        //funkcija bus "hello world";

//function with return statement
function timesFive(num) {                               //funkcija kuri turi argumenta "num"
  return num * 5;                                       //return skirtas tam kad grazintu atsakyma is uz funkcijos, siuo atveju
}                                                       //funkcijos argumentas yra dauginamas is 5

const answer = timesFive(5);                            //tai cia sukurus nauja kintamaji ir pakvietus funkcija, funkcijos 
                                                        //argumente irasius 5, return ta funkcijos pakviesta argumenta "timesFive(5)"
                                                        //padaugins is 5 kuris buvo funkcijos viduje
//global scope variables
//outside of function

const myGlobal = 10;                                    //Variables which are defined outside of a function block have Global scope.
                                                        //This means, they can be seen everywhere in your JavaScript code.

function fun1() {
  oopsGlobal = 5;                                       //Variables which are declared without the "let" or "const" keywords 
                                                        //are automatically created in the global scope
}

function fun2() {                                       
  var output = "";                                      
  if (typeof myGlobal != "undefined") {                 //The inequality operator (!=) checks whether its two operands are not equal
    output += "myGlobal: " + myGlobal;                  //this means that if "myGlobal" is "undefined" the result would be false, 
  }                                                     //because they're equal
  if (typeof oopsGlobal != "undefined") {               //but if "myGlobal" or "oopsGlobal" has any value than being empty (which would be"undefined")
    output += " oopsGlobal: " + oopsGlobal;             //than the result would be true - which means they aren't equal
  }                                                     //so this "if" checks whether "myGlobal" or "oopsGlobal" has any value, then it prints those
                                                        //values into console
  console.log(output);
}

//global and local variables

function myLocalScope() {                               //si funkcija turi lokalu kintamaji "myVar" kuris prasideda zodziu "var", jeigu 
  var myVar = "hello";                                  //kintamasis "myVar" neturetu "let", "var" arba "const" tada jis automatiskai taptu gloabliu.
  console.log('inside myLocalScope', myVar);            //konsole isspausdina sakini ir "myVar" kintamaji
}
myLocalScope();                                         //pakviecia funkcija kuri turi lokalu kintamaji

console.log('outside myLocalScope', myVar);             //konsole spausdina sakini ir lokalu kintamaji is funkcijos ribu ir gaunama klaida, kad "myVar"
                                                        //kintamasis neegzistuoja "global scope"

//local scope overwriting global                                               

const outerWear = "T-Shirt";                            //global variable

function myOutfit() {
  const outerWear = "sweater";                          //local variable
  
  return outerWear;                                     //the local variable takes precedence over the global variable.
}

myOutfit();                                             //The function "myOutfit" will return the string "sweater" 
                                                        //because the local version of the variable is present.

//function without return statement

let sum = 0;

function addThree() {                                   //A function can include the return statement but it does not have to. 
sum = sum + 3;                                          //In the case that the function doesn't have a return statement, when you call it, 
}                                                       //the function processes the inner code but the returned value is undefined.

function addFive() {                                    //addSum is a function without a return statement.
  sum = sum + 5;                                        //The function will change the global sum variable but the returned value of the function is undefined.
}

addThree();
addFive();

//funkcijos return value tampa kintamojo value

let processed = 0;  i                                   //kintamasis turi value 0

function processArg(num) {                              //funkcija su argumentu "num"
  return (num + 3) / 5;                                 //spredimas yra = funkcijos argumentas "num" prie jo pridedamas skaicius 3 ir suma padalinama is 5
}                                                       

processed = processArg(7);                              //pries tai sukurtas kintamasis su value "0" yra pakvieciamas ir jo naujas value tampa funkcijos
                                                        //"processArg" sprendimo atsakymo value. [ (7 + 3) / 5] = 2
                                                        //tai "let processed = 2"

//nextInLine funkcija kuri atima skaiciu ir prideda i array

function nextInLine(arr, item) {                        //funkcija kuri atims pirma masyvo skaiciu "1" is masyvo pradzios ir prides skaiciu "6" masyvo pabaigoje
  arr.push(item);                                       //push prides skaiciu (item - 6)
  return arr.shift();                                   //ir returns masyvo skaiciu su (shift - 1) shift atima skaiciu is masyvo pradzios o unshitft prideda i
}                                                       //masyvo pradzia. o push prideda skaiciu i masyvo pabaiga

const testArr = [1, 2, 3, 4, 5];                        //masyvas is kurio bus paimamas 1 is masyvo pradzios ir pridedamas 6 i masyvo pabaiga

console.log("Before: " + JSON.stringify(testArr));      //konsole kuri isspausdins masyva pries pakeitimus
console.log(nextInLine(testArr, 6));                    //pakvieciama funkcija i konsole su argumento value - (item = 6) 6 kuris yra pridedamas i masyvo pabaiga.
console.log("After: " + JSON.stringify(testArr));       //konsole kuri isspausdins masyva po pakeitimu

//&& example in if statement

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

                                                        //sutrumpina koda, vietoj 2 if, rasoma 1 if su && viduje

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

// || example in if statement

if (num > 10) {                                         //jeigu num yra daugiau nei 10 ir maziau nei 5
  return "No";                                          
}                                                       //      return no      return yes      return no
if (num < 5) {                                          //tai -1 0 1 2 3 4  | 5 6 7 8 9 10 | 11 12 13 14 15
  return "No";
}
return "Yes";

//will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//else if example

function testSize(num) {

  if ( num < 5 ){
  return 'Tiny';

} else if ( num < 10 ) {
  return 'Small';

} else if ( num < 15 ) {
  return 'Medium';

} else if ( num < 20 ) {
  return 'Large';

} else if ( num >= 20 ) {
  return 'Huge';
}

}

testSize(7);