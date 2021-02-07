const compute = document.getElementById("compute");
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num-btn");
const operations = document.querySelectorAll(".operation");
const clear = document.getElementById("clear-btn");
let initialNum;
let currentOperation;
let nullOperation = true;

function add(num1, num2) {
	let ans = num1 + num2;
	initialNum = ans;
	display.innerText = String(ans);
	console.log(num1 + num2);
}

function subtract(num1, num2) {
	let ans = num1 - num2;
	initialNum = ans;
	display.innerText = String(ans);
	console.log(num1 - num2);
}

function multiply(num1, num2) {
	let ans = num1 * num2;
	initialNum = ans;
	display.innerText = String(ans);
	console.log(num1 * num2);
}

function divide(num1, num2) {
	let ans = num1 / num2;
	initialNum = ans;
	display.innerText = String(ans);
	console.log(num1 / num2);
}

function percentage(num1, num2) {}

function operate(operation, num1, num2) {
	num2 = Number(num2);
	num1 = Number(num1);

	if (operation == "+") {
		add(num1, num2);
	} else if (operation == "-") {
		subtract(num1, num2);
	} else if (operation == "*") {
		multiply(num1, num2);
	} else if (operation == "/") {
		divide(num1, num2);
	} else if (operation == "%") {
		add(num1, num2);
	}
}

clear.addEventListener("click", () => {
	nullOperation = true;
	display.innerText = "";
});

compute.addEventListener("click", () => {
	let num1 = Number(initialNum);
	let num2 = Number(display.innerText);
	operate(currentOperation, num1, num2);
	nullOperation = true;
	console.log("nice");
});

// Display the clicked numbers
numbers.forEach((num) =>
	num.addEventListener("click", () => {
		display.innerText += num.innerText;
	})
);

// Operation is clicked
operations.forEach((operation) =>
	operation.addEventListener("click", () => {
		if (nullOperation == false) {
			operate(currentOperation, initialNum, display.innerText);
		}
		currentOperation = operation.innerText;
		initialNum = display.innerText;
		display.innerText = "";
		nullOperation = false;
	})
);
