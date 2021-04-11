// Algo 1 //

// const isAnagram = (string1, string2) => {
// 	var newString1 = string1.split("").reverse().join("");
// 	if (string2 === newString1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isAnagram("hello", "oll eh"));

// Algo 2 //

const findDuplicates = (numArray, checkNum) => {
	numArrayCheck = numArray.includes(checkNum);
	return numArrayCheck;
};
console.log(findDuplicates([5, 5, 5, 5], 5));
