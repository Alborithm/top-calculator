let num1 = "";
let operator = "";
let num2 = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector("p");

display.textContent = "";

const operators = "+-x/";

for( let button of buttons) {
  const key = button.textContent;
  button.addEventListener("click", () => captureInputs(key));
}

function captureInputs(input) {
  if (operators.includes(input)) {
    if(operator === "") operator = input;
    else {
      num1 = operate(operator, num1, num2).toString();
      num2 = "";
      operator = input;
      updateDisplay(num1);
    }
  }
  else if(input === "=") {
    num1 = operate(operator, num1, num2).toString();
    num2 = "";
    operator = "";
    updateDisplay(num1);
  }
  else {
    if (operator == "") {
      num1 += input;
      updateDisplay(num1);
    } else {
      num2 += input;
      updateDisplay(num2);
    }
  }
}

function updateDisplay(num) {
  display.textContent = num;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return Error;
  }
}

function add(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b;
}

function subtract(a, b) {
  a = Number(a);
  b = Number(b);
  return a - b;
}

function multiply(a, b) {
  a = Number(a);
  b = Number(b);
  return a * b;
}

function divide(a, b) {
  a = Number(a);
  b = Number(b);
  return a / b;
}