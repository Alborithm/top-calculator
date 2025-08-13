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
  // input is an operator
  if (operators.includes(input)) {
    // if an operator is already selected it will do both the operation and set the operator
    if(calculator.operator === "") calculator.operator = input;
    else {
      if( calculator.operator === "/" && calculator.num2 === "0") {
        updateDisplay("Error");
        calculator.num1 = "";
        calculator.num2 = "";
        calculator.operator = "";
      } else if ( calculator.num2 === "") {
        calculator.operator = input;
      } else {
        processCalculation();
        calculator.operator = input;
      }
    }
  }
  // input is equals
  else if(input === "=") {
    if( calculator.operator === "/" && calculator.num2 === "0") {
      updateDisplay("Error");
      calculator.num1 = "";
      calculator.num2 = "";
      calculator.operator = "";
    } else {
      processCalculation();
    }
  }
  // input is clear
  else if (input === "C") {
    calculator.num1 = "";
    calculator.num2 = "";
    calculator.operator = "";
    updateDisplay();
  }
  // input is number
  else {
    updateNum(input);
  }
}

function processCalculation() {
  if ( calculator.num2 === "" || calculator.operator === "") {
    // error logic
    updateDisplay("Error");
    calculator.num1 = "";
    calculator.num2 = "";
    calculator.operator = "";
  } else {
    // valid logic
    calculator.num1 = operate(calculator.operator, calculator.num1, calculator.num2).toString();
    calculator.num2 = "";
    calculator.operator = "";
    updateDisplay(calculator.num1);
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