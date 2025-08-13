let num1;
let operator;
let num2;

let buttons = document.querySelectorAll("button");

for( let button of buttons) {
  button.addEventListener("click", () => console.log("ouch!"));
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return Error;
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}