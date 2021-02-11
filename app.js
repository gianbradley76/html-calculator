const compute = document.getElementById("compute");
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num-btn");
const operations = document.querySelectorAll(".operation");
const percentage = document.getElementById("percentage");
const invert = document.getElementById("invert");
const clear = document.getElementById("clear-btn");
const period = document.getElementById("period-btn");
let initialNum;
let currentOperation;
let nullOperation = true;

function add(num1, num2) {
	let ans = num1 + num2;
	initialNum = ans;
	display.innerText = String(ans);
}

function subtract(num1, num2) {
	let ans = num1 - num2;
	initialNum = ans;
	display.innerText = String(ans);
}

function multiply(num1, num2) {
	let ans = num1 * num2;
	initialNum = ans;
	display.innerText = String(ans);
}

function divide(num1, num2) {
	let ans = num1 / num2;
	initialNum = ans.toFixed(2);
	display.innerText = String(ans.toFixed(2));
}

function operate(operation, num1, num2) {
	num2 = Number(num2);
	num1 = Number(num1);

	if (operation === "+") {
		add(num1, num2);
	} else if (operation === "-") {
		subtract(num1, num2);
	} else if (operation === "*") {
		multiply(num1, num2);
	} else if (operation === "/") {
		divide(num1, num2);
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
		let len = display.innerText.length;
		if (len <= 6) {
			display.innerText += num.innerText;
		}
	})
);

// Operation is clicked
operations.forEach((operation) =>
	operation.addEventListener("click", () => {
		if (nullOperation == false) {
			console.log(initialNum);
			operate(currentOperation, initialNum, display.innerText);
			nullOperation = true;
		}
		currentOperation = operation.innerText;
		initialNum = display.innerText;
		display.innerText = "";
		nullOperation = false;
	})
);

// percentage operation
percentage.addEventListener("click", () => {
	let ans = Number(display.innerText) / 100;
	display.innerText = ans;
	console.log(ans.toFixed(2));
});

invert.addEventListener("click", () => {
	let ans = Number(display.innerText);
	if (ans > 0) {
		ans = -Math.abs(ans);
	} else if (ans < 0) {
		ans = Math.abs(ans);
	}
	display.innerText = ans;
});

period.addEventListener("click", () => {
	if (display.innerText == "") {
		display.innerText = "0.";
	} else {
		display.innerText += ".";
	}
});
