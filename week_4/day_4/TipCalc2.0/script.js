// const billInput2 = document.querySelector("#bill").value;
// const tipPercent2 = document.querySelector("#tipPercent").value;
// billInput2.addEventListener("submit", (event) => {




// });

function displayValue() {
	// Query Selectors
	let billInput = document.querySelector("#bill").value;
	let tipPercent = document.querySelector("#tipPercent").value;
	let displayTip = document.querySelector("#displayTip");
	let tipList = document.querySelector("#tipRecord");
	// Create List for Tip History
	let createList = document.createElement("li");
	createList.innerText = tipPercent;
	tipList.append(createList);
	// Input Conversions
	billInput = Number(billInput);
	tipPercent = Number(tipPercent) / 100;
	console.log(displayTip);
	// Calculations
	billTip = billInput * tipPercent;
	billTotal = billTip + billInput;
	displayTip.innerText = billTotal;
}
const form = document.querySelector("form");
const validateValue = (fizz) => {
	myRegex = /^[0-9]*$/;
	return myRegex.test(fizz);
};
form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("it works")
	const valueInput = document.querySelector("#bill").value;
	const tipPercent = document.querySelector("#tipPercent").value;
	if (!validateValue(valueInput) || (!validateValue(tipPercent))) {
		alert("Please input number");
	} else {
	displayValue();
}
});
///^\d+$/;
