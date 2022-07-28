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
  
  /** Uzduotis Pradzia */                                 //blackjack counting function with switch statement
  
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
  
    let holdBet = 'Hold';
    if (count > 0){
      holdBet = 'Bet';
    }
  
    return count + " " + holdBet;
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A');
  
  /** Uzduotis pabaiga */