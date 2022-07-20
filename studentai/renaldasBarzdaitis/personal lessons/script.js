
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

//switch statements
                                                        //switch statements faster and code is shorter than if statements
function caseInSwitch(val) {
  let answer = "";
  switch (val){                                         //if case val = 1 then answer = "alpha"
    case 1:
      answer = "alpha";
    break;                                              //break means the function stops after corrent switch statement was executed
    case 2:
      answer = "beta";
    break;
    case 3: 
      answer = "gamma";
    break;
    case 4:
      answer = "delta";
    break;
  }
  return answer;
}
caseInSwitch(1);

//switch statements with default case

function switchOfStuff(val) {
  let answer = "";
switch (val) {
  case "a":
    answer = "apple";
  break;
  case "b":
    answer = "bird";
  break;
  case "c":
    answer = "cat";
  break;
  default:                                              //default statement will be executed if no matching case statements are found
    answer = "stuff";
  break;
}
  return answer;
}
switchOfStuff(1);

                                                        //switch statements with multiple cases

function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  return answer;
}

sequentialSizes(1);

                                                        //same function but wrote differently

function chainToSwitch(val) {
  let answer = "";

//if else statement

if (val === "bob") {
  answer = "Marley";
} else if (val === 42) {
  answer = "The Answer";
} else if (val === 1) {
  answer = "There is no #1";
} else if (val === 99) {
  answer = "Missed me by this much!";
} else if (val === 7) {
  answer = "Ate Nine";
}

//switch stamenet

switch (val){
case "bob":
  answer = "Marley";
  break;
case 42:
  answer = "The Answer";
  break;
case 1:
  answer = "There is no #1";
  break;
case 99:
  answer = "Missed me by this much!";
  break;
case 7:
  answer = "Ate Nine";
  break;
}
  return answer;
}

chainToSwitch(7);

                                                        //same function but without if else or switch

function isLess(a, b) {

  if (a < b) {                                          //with if else
    return true;
  } else {
    return false;
  }
}

isLess(10, 15);

function isLess(a, b) {

    return a < b;                                       //without if else
}

isLess(10, 15);

                                                        //if statement that exits the function if a or b is less than 0

function abTest(a, b) {

  if (a < 0 || b < 0) {
    return;
  }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

                                                        //blackjack counting function with switch statement

  let count = 0;

function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
  break;
}
var holdBet = 'Hold';
if (count > 0){
  holdBet = 'Bet';
}
  return count + " " + holdBet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

                                                         //Objects

const myDog = {
  "name": "Aras",
  "legs": 4,
  "tails": 1,
  "friends": ["People", "Food"]                          //mulptiple values are put in arrays
  };

  //Dot notation

  const testObjDot = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

  const hatValue = testObjDot.hat;                       //Dot notation is what you use when you know the name of the property
  const shirtValue = testObjDot.shirt;                   //you're trying to access ahead of time.

//Square Bracket notation

  const testObjBracket = {
    "an entree": "hamburger",                            //If the property of the object you are trying to access has a space in its name,
    "my side": "veggies",                                //you will need to use bracket notation.
    "the drink": "water"
  };
  
  const entreeValue = testObjBracket["an entree"];       //However, you can still use bracket notation on object properties without spaces.
  const drinkValue = testObjBracket["the drink"];

//using object property as a variable value

  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",                                  //the property "Doberman" is used in variable = const myDogObj
    Snoopie: "Beagle"
  };
  
  const myDogObj = "Hunter";                             //name "Hunter" is declared in variable myDogObj
  const myBreed = dogs[myDogObj];                        //variable myBreed equals to dogs(object) and uses square bracket notation to store variable [myDog]
  console.log(myBreed);                                  //so console prints the string "Doberman" because "Doberman" is a breed of a dog named "Hunter"



  const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = 16;                               //kintamasis "playerNumber" lygu "16", kuris yra objecto parametras ir jo value lygus zodziui "Montana"
  const player = testObj[playerNumber];                  //tai sukurus kintamaji "player" jam galima suteikti value kuris bus lygus kintamajam "playerNumber" kuris lygus 
                                                         //objekto "testObj" parametrui "16" kuris turi value "Montana" tai konsole rasytu player = "Montana"

//using dot or square bracket notation we can update the object parameters value
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

//dot notation example
ourDog.name = "Happy Camper";
                                                         //Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
//square bracket notation example
ourDog["name"] = "Happy Camper";

//another example

const myCat = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

//using dot notation
myCat.name = "Happy Coder";

//using square bracket notation
myCat["name"] = "Happy Coder";

//add property to object using dot or square bracket notation

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

//using dot notation
ourDog.bark = "bow-wow";

//using square bracket notation
ourDog["bark"] = "bow-wow";

//delete property using dot or square bracket notation

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

//using dot notation
delete ourDog.bark;

//using square bracket notation
delete ourDog["bark"];

                                                         //switch statement into object

function phoneticLookup(val) {
  let result = "";

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  return result;
}

phoneticLookup("charlie");

                                                         //object

function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

//check if object has a property, if not return "not found"

function checkObj(obj, checkProp) {                      //checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string "pony".
  if (obj.hasOwnProperty(checkProp)){                    //checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string "kitten".
    return obj[checkProp];                               //checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return "not found".
  } else {
    return "Not Found"
  }
}


//example of complex data structure
const myMusic = [                                        //array that has object
  {                                                      //start of the object
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [                                         //array inside an object
      "CD",
      "8T",
      "LP"
    ],
    "gold": true                                         //boolean inside object
  },                                                     //end of the first object
{                                                        //start of the new object
  "artist": "Eminem",
  "title": "Kamikaze",
  "release_year": 2018,
  "formats": [
    "CD",
    "Vinyl",
    "Digital"
  ],
  "gold": true,
  "platinum": true
}];                                                      //end of the second object and end of the array.

//object inside an object and access to that object using bot dot and square bracket notations.

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;                //ourStorage.cabinet["top drawer"].folder2 would be the string "secrets"
ourStorage.desk.drawer;                                  //ourStorage.desk.drawer would be the string stapler#

//another example

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//accessing property values in nested arrays

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];                                     //array[index of array 0 = first].objectProperty[index of array 1 = second].
ourPets[1].names[0];                                     //ourPets[first object].names(object property that has an array)[array with pet names].
                                                         //ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

//another example of accessing nested arrays

const myPlants = [                      //--------------------------------
  {                                     //--------                      //|
    type: "flowers",                           //|                      //|
    list: [           //---                    //|                      //|
      "rose",           //|                    //|object inside array   //|
      "tulip",          //|nested array        //|                      //|
      "dandelion"       //|                    //|                      //|
    ]                 //---                    //|                      //|
  },                                    //--------                      //|
  {                                     //--------                      //|array
    type: "trees",                             //|                      //|
    list: [           //---                    //|                      //|
      "fir",            //|                    //|object inside array   //|
      "pine",           //|nested array        //|                      //|
      "birch"           //|                    //|                      //|
    ]                 //---                    //|                      //|
  }                                     //--------                      //|
];                                      //--------------------------------

const secondTree = myPlants[1].list[1];                  //secondTree will return pine


// Record Collection

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
                                                         //object
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {               //if prop isnt equal to tracks and its value isnt equal to empty string
    records[id][prop] = value;                           //give that prop a value
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {//if the prop is equal and using hasOwnProperty you check
    records[id][prop] = [value];                         //if the prop has an array, and if it equals to false, then push the prop and the value to it
  } else if (prop === "tracks" && value !== "") {        //if prop equal to tracks and value isnt equal to an empty string
    records[id][prop].push(value);                       //push the value to that prop
  } else if (value === "") {                             //if value (to any prop) equals to an empty string, delete the prop
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA'); //artist should be the string ABBA
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"); //tracks should have the string Take a Chance on Me as the last and only element.
updateRecords(recordCollection, 2548, "artist", ""); //artist should not be set (deleted)
updateRecords(recordCollection, 2468, "tracks", "Free"); //tracks should have the string 1999 as the first element.
updateRecords(recordCollection, 2548, "tracks", ""); //tracks should not be set
updateRecords(recordCollection, 1245, "albumTitle", "Riptide"); //albumTitle should be the string Riptide