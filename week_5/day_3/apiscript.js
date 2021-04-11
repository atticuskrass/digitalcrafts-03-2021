// try to get the data to show in the console
// before you even need to put it in the document or website

// fetch takes two arguments, aka the things inside the parenthesis
// ( url, optional, it can take a function, or an object )
// fetch is async, it takes time to do something
// you need to wait for it to finish
// if your api call is async, your function has to be async as well

// Use this for async or fetching
// const fetchData = async () => {
// const data = await fetch("PUT URL HERE")
// const convertToJson = await data.json()
// console.log(convertedJson)
//}

// reference elements on the page

// for id = #
// for class = .id
// cor the actual element = id

let button1 = document.querySelector("#people");

const body = document.querySelector(".root");

const getPeople = async () => {
	const people = await fetch(
		"https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01"
	);
	const convertedJson = await people.json();
	console.log(convertedJson);

	const firstName = document.createElement("p");

	//   console.log(firstName);

	firstName.innerText =
		convertedJson.data[0].firstname + " " + convertedJson.data[0].lastname;

	body.append(firstName);
	//   peopleName.innerText = "hello";
	console.log(firstName);
};

button1.addEventListener("click", () => {
	getPeople();
});

let button2 = document.querySelector("#images");
const getImages = async () => {
	const images = await fetch(
		"https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300"
	);
	const jsonImages = await images.json();
	console.log(jsonImages);
};

button2.addEventListener("click", () => {
	getImages();
});

let button3 = document.querySelector(".get-card");
const getCreditCard = async () => {
	const card = await fetch(
		"https://fakerapi.it/api/v1/credit_cards?_quantity=1"
	);
	const convertedJson = await card.json();
	console.log(convertedJson);
};

button3.addEventListener("click", () => {
	getCreditCard();
});

let addressbtn = document.querySelector(".address");

const getAddress = async () => {
	const add = await fetch("https://fakerapi.it/api/v1/addresses?_quantity=1");
	const convert = await add.json();
	console.log(convert);
};
addressbtn.addEventListener("click", () => {
	getAddress();
});

let button6 = document.querySelector(".books");

const getBooks = async () => {
	const books = await fetch("https://fakerapi.it/api/v1/books?_quantity=1");
	const convertToJson = await books.json();
	console.log(convertToJson);
};

button6.addEventListener("click", () => {
	getBooks();
});

// are we dealing with an api?
// if yes, you have to fetch()

// if you are not dealing with an api, are you trying to do
// something over and over? You have to write a function

// if you are dealing with an api, and you need to do something over and over,
// you want to write a function that does an api call aka a fetch

//
// const person = {
//    "status":"OK",
//    "code":200,
//    "total":1,
//    "data":[
//       {
//          "title":"Distinctio modi ducimus qui.",
//          "description":"Porro aut officia libero velit commodi. Corporis distinctio cumque qui ipsa ut. Asperiores quam sint est facere aliquid.",
//          "url":"https:\/\/placekitten.com\/700\/300"
//       }
//    ]
// }

//
// query selectors for elements
// let companiesBtn = document.querySelector(".companies");
// let productsBtn = document.querySelector(".products");

// //
// // functions for query selectors
// const getCompanies = async () => {
//   const companies = await fetch(
//     "https://fakerapi.it/api/v1/companies?_quantity=1"
//   );
//   const companiesToJson = await companies.json();
//   console.log(companiesToJson);
// };

// const getProducts = async () => {
//   const products = await fetch(
//     "https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid"
//   );
//   const productsToJson = await products.json();
//   console.log(productsToJson);
// };

// //
// // event listeners for elements
// companiesBtn.addEventListener("click", () => {
//   getCompanies();
// });

// productsBtn.addEventListener("click", () => {
//   getProducts();
// });
