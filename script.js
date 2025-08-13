let calculator = {
  num1: "0",
  num2: "",
  operator: "",
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("p");

display.textContent = calculator.num1;

const operators = "+-x/";

for( let button of buttons) {
  const key = button.textContent;
  button.addEventListener("click", () => captureInputs(key));
}

function captureInputs(input) {
  if (operators.includes(input)) {
    if(calculator.operator === "") calculator.operator = input;
    else {
      calculator.num1 = operate(operator, num1, num2).toString();
      calculator.num2 = "";
      calculator.operator = input;
      updateDisplay(calculator.num1);
    }
  }
  else if(input === "=") {
    if ( calculator.num2 === "" || calculator.operator === "") {
      updateDisplay("Error");
      calculator.num1 = "";
      calculator.num2 = "";
      calculator.operator = "";
    } else {
      calculator.num1 = operate(calculator.operator, calculator.num1, calculator.num2).toString();
      calculator.num2 = "";
      calculator.operator = "";
      updateDisplay(calculator.num1);
    }
  }
  else if (input === "C") {
    calculator.num1 = "";
    calculator.num2 = "";
    calculator.operator = "";
    updateDisplay();
  }
  else {
    updateNum(input);
  }
}

function updateNum(input) {
  if (calculator.operator == "") {
    if (calculator.num1 == "0") {
      calculator.num1 = input;
    } else {
      calculator.num1 += input;
    }
    updateDisplay(calculator.num1);
  } else {
    if (calculator.num2 == "0") {
      calculator.num2 = input;
    } else {
      calculator.num2 += input;
    }
    updateDisplay(calculator.num2);
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

function handleError(){
  updateDisplay("Error");
  num1 = "";
  num2 = "";
  operator = "";
}