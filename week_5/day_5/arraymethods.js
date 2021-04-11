// styling for console logs
const color = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	const logStyle = `font-family:system-ui;font-size:1rem;color: #${randomColor};`;

	return logStyle;
};

// .map
// this method creates a new array, and allows you to do something to each element in the array
const array1 = ["Joey", "Tay", "Tyler", "Christian"];
const mappedArray1 = array1.map((name) => name + " " + "developer");
console.log(`%cMapped Array`, `${color()}`, mappedArray1);

// .filter
// this method lets you return a new array, and fills that new array with only the elements that match what you specify (aka, the new array is filtered to only include)

const array2 = ["Joey", "Tay", "Tyler", "Christian"];
const filteredArray2 = array2.filter((element) => element === "Joey");
console.log(`%cFiltered Array`, `${color()}`, filteredArray2);

// .sort
// this method will sort an arrays elements in ascending or descending order

const array3 = ["Joey", "Tay", "Tyler", "Christian"];
const array4 = ["Joey", "Tay", "Tyler", "Christian"];
// ascending
const sortedArray3 = array3.sort((a, b) => (a > b ? 1 : -1));
// descending
const sortedArray4 = array4.sort((a, b) => (a > b ? -1 : 1));
console.log(`%cSorted Array`, `${color()}`, sortedArray3);
console.log(`%cSorted Array`, `${color()}`, sortedArray4);

// .includes
// this methods checks if the array includes the elements that pass the condition.  It only returns true or false

const array5 = ["Joey", "Tay", "Tyler", "Christian"];
console.log(`%cInclude in the Array`, `${color()}`, array5.includes("Joey"));
console.log(`%cInclude in the Array`, `${color()}`, array5.includes("Joe"));

// .reduce
// this method applies some desired effect against an accumulator (aka, the total amount of the elements it's applied the effect to, and reduces it to a single effect)
const array6 = [1, 2, 3, 4, 5, 6, 2020];
const reducedArray = array6.reduce(
	(total, currentElement) => total + currentElement
);
console.log(`%cReduced Array`, `${color()}`, reducedArray);

// .find
// this method finds and returns the first element value that matches or passes your test
const array7 = [1, 2, 3, 4, 5, 6, 2020];
const foundYou = array7.find((element) => element > 2);
console.log(`%cFind Array`, `${color()}`, foundYou);

// .findIndex
// similar to find, this just finds the first element that passes your condition and lets you know what index it is
const array8 = [1, 2, 3, 4, 5, 6, 2020];
const foundIndex = array8.findIndex((element) => element === 4);
console.log(`%cFind Array`, `${color()}`, foundIndex);

// .slice
// slice returns a new array with the elements in the range you specify to slice on (aka, you say slice from here to here and it returns you the values in that range in a new array)
// this does not mutate the original array

const array9 = [1, 2, 3, 4, 5, 6, 2020];
const slicedArray = array9.slice(1, 3);
console.log(`%cSliced Array`, `${color()}`, slicedArray);
console.log(`%cOriginal Array`, `${color()}`, array9);

// .splice
// splicing mutates the array you are splicing, and will add or remove or replace elements in the array
// .splice(startingPosition, deleteCount, item you want to add or delete or replace )

const array10 = [1, 2, 3, 4, 5, 6, 2020];
const splicedArray = array10.splice(2);
console.log(`%cSpliced Array`, `${color()}`, splicedArray);
console.log(`%cOriginal Array`, `${color()}`, array10);
