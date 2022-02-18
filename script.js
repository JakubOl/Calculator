const calcBody = document.querySelector(".calc-body");
const display = document.querySelector(".display");
const resultDisplay = document.querySelector(".result");
const buttonsContainer = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
let number = [];
let numbers = [];
let operator;
let result;

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (e.target.id === "." && number.includes(".")) return;
    if (e.target.classList.contains("number")) number.push(e.target.id);
    console.log(typeof (+number.join("")).toFixed(3));
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
  op.addEventListener("click", function (e) {
    if (!number) return;
    numbers.push(number.join(""));
    number = [];
    console.log(number, numbers);
    if (numbers.length > 1) {
      if (operator === divide && numbers[1] === "0") {
        number = [];
        numbers = [];
        return (resultDisplay.textContent = "0 Division");
      }
      result = operator(...numbers);
      resultDisplay.textContent = (+result).toFixed(3);
      numbers = [];
      numbers[0] = result;
    }
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
    }
  });
});

equal.addEventListener("click", function () {
  if (!numbers[0]) return (resultDisplay.textContent = "Error");
  numbers[1] = number.join("");
  if (operator === divide && numbers[1] === "0") {
    number = [];
    numbers = [];
    return (resultDisplay.textContent = "0 Division");
  }
  result = operator(...numbers);
  resultDisplay.textContent = (+result).toFixed(3);
  numbers = [];
  number = [];
  numbers[0] = result;
});
