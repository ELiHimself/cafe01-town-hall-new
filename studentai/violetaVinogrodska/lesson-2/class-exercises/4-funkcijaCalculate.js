function calculate(num1, num2, action) {
    return action === "composition" ? num1 + num2 
        : action === "substraction" ? num1 - num2
        : action === "multiplication" ? num1 * num2
        : action === "division" ? num1 / num2
        : "nieko nedaryti";
};

console.log(calculate(5, 5, "multiplication"));
