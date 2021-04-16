//----Create HTML Elements----//

//--Header/Navigation Div--//

const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle-1";
appTitle.innerText = "Artisan";
headerDiv.append(appTitle);

//--Container Div--//

//-Div 1--//
const divHeader1 = document.createElement("h2");
divHeader1.id = "divHeader1";
divHeader1.innerText = "Clothing & Shoes";
document.body.appendChild(divHeader1);
const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
//-Div 2-//
const divHeader2 = document.createElement("h2");
divHeader2.id = "divHeader2";
divHeader2.innerText = "Jewelry & Accessories";
document.body.appendChild(divHeader2);
const containerDiv2 = document.createElement("div");
containerDiv2.id = "containerDiv-2";
document.body.appendChild(containerDiv2);
//-Div 3-//
const divHeader3 = document.createElement("h2");
divHeader3.id = "divHeader3";
divHeader3.innerText = "Home & Living";
document.body.appendChild(divHeader3);
const containerDiv3 = document.createElement("div");
containerDiv3.id = "containerDiv-3";
document.body.appendChild(containerDiv3);
//-Div 4-//
const divHeader4 = document.createElement("h2");
divHeader4.id = "divHeader4";
divHeader4.innerText = "Art & Crafts";
document.body.appendChild(divHeader4);
const containerDiv4 = document.createElement("div");
containerDiv4.id = "containerDiv-4";
document.body.appendChild(containerDiv4);

//--Navigation Links--//

const anchorDiv = document.createElement("div");
anchorDiv.id = "anchorDiv";
headerDiv.append(anchorDiv);
const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "../index.html");
anchorHome.innerText = "Home";
anchorHome.className = "headerAnchor";
anchorHome.id = "anchorHome";
anchorDiv.append(anchorHome);
const anchorCreators = document.createElement("a");
anchorCreators.setAttribute("href", "../artisans.html");
anchorCreators.innerText = "Artisans";
anchorCreators.className = "headerAnchor";
anchorCreators.id = "anchorCreators";
anchorDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "../market.html");
anchorProducts.innerText = "Market";
anchorProducts.className = "headerAnchor";
anchorProducts.id = "anchorProducts";
anchorDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "../exhibitors.html");
anchorCompanies.innerText = "Exhibitors";
anchorCompanies.className = "headerAnchor";
anchorCompanies.id = "anchorCompanies";
anchorDiv.append(anchorCompanies);

//--To Top Button--//

const toTopBtn = document.createElement("button");
toTopBtn.id = "toTopBtn";
document.body.append(toTopBtn);

//--Event Listeners--//

document.addEventListener("DOMContentLoaded", () => {
	getProducts1();
	getProducts2();
	getProducts3();
	getProducts4();
});

//--Get Product(s) Function--//

const getProducts1 = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=4"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//

		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv.append(productDiv);

		//-Element InnerText-//

		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productPrice = getProductDataJson[counter].price;

		//-Product Name Header-//

		const productName = document.createElement("h5");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);

		//-Product Card List-//

		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `>$${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
const getProducts2 = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=4"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//

		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv2.append(productDiv);

		//-Element InnerText-//

		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productDescript = getProductDataJson[counter].description;
		let productPrice = getProductDataJson[counter].price;

		//-Product Name Header-//

		const productName = document.createElement("h5");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);

		//-Product Card List-//

		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `>$${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
const getProducts3 = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=4"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//

		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv3.append(productDiv);

		//-Element InnerText-//

		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productDescript = getProductDataJson[counter].description;
		let productPrice = getProductDataJson[counter].price;

		//-Product Name Header-//

		const productName = document.createElement("h5");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);

		//-Product Card List-//

		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `>$${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
const getProducts4 = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=4"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//

		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv4.append(productDiv);

		//-Element InnerText-//

		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productDescript = getProductDataJson[counter].description;
		let productPrice = getProductDataJson[counter].price;

		//-Product Name Header-//

		const productName = document.createElement("h5");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);

		//-Product Card List-//

		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `>$${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
//--Scroll To Top Btn--//

const grabToTopBtn = document.querySelector("#toTopBtn");
window.addEventListener("scroll", () => {
	scrollFunction();
});
const scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		grabToTopBtn.style.display = "block";
	} else {
		grabToTopBtn.style.display = "none";
	}
};
grabToTopBtn.addEventListener("click", () => {
	topFunction();
});
const topFunction = () => {
	document.documentElement.scrollTop = 0;
};
