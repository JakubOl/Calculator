const calcBody = document.querySelector(".calc-body");
const display = document.querySelector(".display");
const resultDisplay = document.querySelector(".result");
const buttonsContainer = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
let pressedButton;
let number = [];
let numbers = [];
let operator;
let result;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    console.log(number, numbers);
    if (e.target.classList.contains("number")) number.push(e.target.id);
    resultDisplay.textContent = number.join("");
  })
);

deleteButton.addEventListener("click", function () {
  number.pop();
  resultDisplay.textContent = number.join("");
});

clearButton.addEventListener("click", function () {
  numbers = [];
  number = [];
  resultDisplay.textContent = number.join("");
});

function add(num1, num2) {
  return +num1 + +num2;
}
function substract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

operation.forEach(function (op) {
  if (!number) return;
  op.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "/":
        operator = divide;
        break;
      case "x":
        operator = multiply;
        break;
      case "-":
        operator = substract;
        break;
      case "+":
        operator = add;
        break;
      // case '=': operator = equal;break;
    }
    numbers.push(number.join(""));
    number = [];
    resultDisplay.textContent = number.join("");
  });
});

equal.addEventListener("click", function () {
  numbers[1] = number.join("");
  result = operator(...numbers);
  resultDisplay.textContent = result;
  numbers = [];
  number = [];
  numbers[0] = result;
});
