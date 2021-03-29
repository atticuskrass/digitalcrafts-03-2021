function calculate(operation, num1, num2) {
	if (operation == "addition") {
		console.log(num1 + num2);
	} else if (operation == "substract") {
		console.log(num1 - num2);
	} else if (operation == "multiply") {
		console.log(num1 * num2);
	} else if (operation == "divide") {
		console.log(num1 / num2);
	} else {
		console.log("Invalid operation");
	}
}

calculate("addition", 5, 5);
