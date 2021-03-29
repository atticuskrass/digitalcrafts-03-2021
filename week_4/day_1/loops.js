// String interpolation
// print(f"blah blah blah {interpolateThis}")
// print("%s" % valueToInterpolate)

let height = "6ft";
let weight = "140lbs";
// method 1 of string interpolation
// let JoesDimensions = "Joes height is " + height + " and he weights " + weight;

// method 2 of string interpolation
// use backticks ` ${}  `
let string = "string";
let string2 = "string";
let string3 = `string`;

let JoesDimensions = `Joes height is ${height} and he weights ${weight}`;

// for in is for objects
const pizza = {};

let singlePizza = {
	crust: "thin",
	toppings: [
		"cheese",
		"pepperoni",
		"spinach",
		"onion",
		"anchovies",
		"feta",
		"seaweed",
		"cream cheese",
		"mushrooms",
		"pineapple",
		"quinoa",
		"tofu",
	],
	//   toppings: [{ firstTopping: "cheese", secondTopping: "more cheese" }],
	size: "Large",
	sauce: ["marinara", "alfredo"],
};
// prints out just the toppings in an array
for (const topping of singlePizza.toppings) {
	console.log(topping);
}

// for in loop, iterates over an object, returns the keys as strings
for (const pizza in singlePizza) {
	// this is how to access the key
	console.log("This is the key ", pizza);
	// this is how you access the value of the key you are currently looping on
	console.log(singlePizza[pizza]);
}

let cars = ["Subaru", "Audi", "Honda", "BMW"];
// for of is for arrays
for (const car of cars) {
	console.log("this is a", car);
}

// while loop
// while (condition) {
// do stuff here
// }

// if statements
let age = 2;
if (age < 5) {
	console.log("You're too young");
} else {
	console.log("You're getting old");
}

// if else statements
let playerHeight = 5.3;
if (playerHeight < 4) {
	console.log("Play point guard");
} else if (playerHeight < 6 && playerHeight > 5) {
	console.log("bench");
} else {
	console.log("Center");
}

// let prompt = prompt("What is your name?");

// calculate("multiply", num1, num2);
// print out the message of whatever operation they did
// and the correct answer
calculate("multiply", 23, 84);
// console.log(" You did multiply and your answer is ${answerHere}")
calculate("subtract", 102, 84);

calculate("add", 102, 84);

calculate("divide", 10, 20);
