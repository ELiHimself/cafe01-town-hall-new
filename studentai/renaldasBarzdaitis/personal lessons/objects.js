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

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA')); //artist should be the string ABBA
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")); //tracks should have the string Take a Chance on Me as the last and only element.
console.log(updateRecords(recordCollection, 2548, "artist", "")); //artist should not be set (deleted)
console.log(updateRecords(recordCollection, 2468, "tracks", "Free")); //tracks should have the string 1999 as the first element.
console.log(updateRecords(recordCollection, 2548, "tracks", "")); //tracks should not be set
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide")); //albumTitle should be the string Riptide
