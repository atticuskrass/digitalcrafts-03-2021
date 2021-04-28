const findX = (equation) => {
	const splitString = equation.split(" ");
	const convertString = parseInt(splitString);
	return convertString;
};
// Part 1
console.log(findX("10 * x = 20")); // returns 2
console.log(findX("2 + 4 = x")); // returns 6
console.log(findX("x4 - 11 = 33")); // returns 4
// Part 2
console.log(findX("1x0 * 2 = 200")); // returns 0
console.log(findX("80 / 2 = x0")); // returns 4
console.log(findX("111 + 11x = 222")); // returns 1
