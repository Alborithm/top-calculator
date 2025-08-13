let num1 = "";
let operator = "";
let num2 = "";

let buttons = document.querySelectorAll("button");

const operators = "+-x/";

for( let button of buttons) {
  const key = button.textContent;
  button.addEventListener("click", () => captureInputs(key));
}

function captureInputs(input) {
  if (operators.includes(input)) {
    if(operator === "") operator = input;
    else {
      num1 = (999).toString();
      num2 = "";
      operator = input;
    }
  }
  else if(input === "=") {
    num1 = (999).toString();
    num2 = "";
    operator = "";
  }
  else {
    if (operator == "") {
      num1 += input;
    } else {
      num2 += input;
    }
  }

  // update view
  console.log(`num1: ${num1}`);
  console.log(`operator: ${operator}`);
  console.log(`num2: ${num2}`);
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