// hello = "Hello World";
// integer = 2
// boolean = False

// while (pizza < 8):
//     print("pizza")

// for slice in pizza:
//     print(slice)

// Define a variable

// var variable, has a functional scope, function scope
var hello = "Hello World";
// ES6, let has a block scope
let integer = 2;
// constant, has a block scope as well
const boolean = false;

// def sum(num1,num2):
//     return num1 + num2

function sumNumbers(num1, num2) {
  // function body, aka inside the curlies
  //   var joesName = "Joe"

  // lexical scoping, variables declared outside or inside of a function
  // are accessible to children of that function, as long as the variable
  // is defined outside of the child function

  // variables defined inside a function, can only exist inside that function.

  let number = 9;
  let array = [1, 2, 3];

  // for loop syntax
  // for (first arg: variable we define, we initialize to 0)
  // for (second arg: our loop condition, is your loop container)
  // for (third arg: incrementer)
  for (let loopNumber = 0; loopNumber < array.length; loopNumber++) {
    //    does stuff here
    console.log("inside the loop", number);
  }
  return num1 + num2;
}

// console.log(number);
console.log("this is the sum", sumNumbers(1, 2));

// Lis....jk arrays
// list = []
// javascript syntax for a list (now called an Array)
let numbersInAnArray = [1, 2, 3];
let namesInAnArray = [
  "kendall",
  "gill",
  "joey",
  "carlo",
  "tay",
  "taylor",
  "whitney",
  "jessica",
];
// we access them the same way we do in python
// nameOfTheList[index]

// prints out "gill":
console.log(namesInAnArray[1]);

// prints out "tay"
console.log(namesInAnArray[4]);

// prints out "jessica"
console.log(namesInAnArray[7]);

// python dictionary
//  dictionary1 = {"key":"value"}

// new syntax, we now call this an object, that has a key value.  the key is not in quotation marks
// the value can be whatever value type we want
let object = { key: "value" };
// console.log(namesInAnArray[7]);
let classObject = {
  name: "kendall",
};
// prints out "kendall"
// console.log(classObject.name)

let complexObject = {
  jessica: {
    name: "jessica",
    hometown: "Houston",
  },
  whitney: {
    name: "whitney",
    hometown: "Houston",
  },
  tay: {
    name: "tay",
    hometown: "Houston",
  },
  joey: {
    name: "joey",
    hometown: "Houston",
  },
  michael: {
    name: "michael",
    hometown: "Houston",
  },
};

// we can reassign values for keys by just calling the key and giving it a new value
// complexObject.michael.hometown = "not houston";

//we can access values of an object by referencing their keys with dot notation
console.log(classObject.name);
console.log(complexObject.michael.hometown);