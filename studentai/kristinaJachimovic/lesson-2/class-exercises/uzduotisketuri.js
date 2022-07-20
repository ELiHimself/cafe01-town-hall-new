function calculate(num1, num2, action) {
 if (action === "composition") {
  return num1 + num2;
 } else if (action === "subtraction") {
  return num1 - num2;
 } else if ( action === "division") {
  return num1 / num2;
 } else if (action === "multiplication") { 
  return num1 * num2;
 } else {
  return "not action";
 }
}

console.log(calculate(2, 1, "composition"));
console.log(calculate(4,2,"division"));
console.log(calculate(4, 5, "multiplication"));
console.log(calculate(3, 5, "njnj"));