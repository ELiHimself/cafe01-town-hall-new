
function functionWithArgs(a, b) {                       //funkcija kuri turi 2 arguments
    console.log(a + b);                                 //konsole kuri 2 argumentus sudeda
  }
  
  functionWithArgs(1, 2);                               //pakvieciau funkcija kuriois viduje yra argumentai kuriuos sudesime
                                                        //gali buti ir zodziai a = "hello", b = "world" tada pakvietus
                                                        //funkcija bus "hello world";

    
                                                        



function timesFive(num) {                               //funkcija kuri turi argumenta "num"
  return num * 5;                                       //return skirtas tam kad grazintu atsakyma is uz funkcijos, siuo atveju
}                                                       //funkcijos argumentas yra dauginamas is 5

const answer = timesFive(5);                            //tai cia sukurus nauja kintamaji ir pakvietus funkcija, funkcijos 
                                                        //argumente irasius 5, return ta funkcijos pakviesta argumenta "timesFive(5)"
                                                        //padaugins is 5 kuris buvo funkcijos viduje





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

function myLocalScope() {                               //si funkcija turi lokalu kintamaji "myVar" kuris prasideda zodziu "var", jeigu 
  var myVar = "hello";                                  //kintamasis "myVar" neturetu "let", "var" arba "const" tada jis automatiskai taptu gloabliu.
  console.log('inside myLocalScope', myVar);            //konsole isspausdina sakini ir "myVar" kintamaji
}
myLocalScope();                                         //pakviecia funkcija kuri turi lokalu kintamaji

console.log('outside myLocalScope', myVar);             //konsole spausdina sakini ir lokalu kintamaji is funkcijos ribu ir gaunama klaida, kad "myVar"
                                                        //kintamasis neegzistuoja "global scope"


const outerWear = "T-Shirt";                            //global variable

function myOutfit() {
  const outerWear = "sweater";                          //local variable
  
  return outerWear;                                     // the local variable takes precedence over the global variable.
}

myOutfit();                                             //The function "myOutfit" will return the string "sweater" 
                                                        //because the local version of the variable is present.


