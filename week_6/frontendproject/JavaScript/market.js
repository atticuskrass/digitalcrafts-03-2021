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

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
const containerDiv2 = document.createElement("div");
containerDiv2.id = "containerDiv-2";
document.body.appendChild(containerDiv2);
const containerDiv3 = document.createElement("div");
containerDiv3.id = "containerDiv-3";
document.body.appendChild(containerDiv3);
const containerDiv4 = document.createElement("div");
containerDiv4.id = "containerDiv-4";
document.body.appendChild(containerDiv4);

//--Navigation Links--//

const anchorDiv = document.createElement("div");
anchorDiv.id = "anchorDiv";
headerDiv.append(anchorDiv);
const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "index.html");
anchorHome.innerText = "Home";
anchorHome.className = "headerAnchor";
anchorHome.id = "anchorHome";
anchorDiv.append(anchorHome);
const anchorCreators = document.createElement("a");
anchorCreators.setAttribute("href", "artisans.html");
anchorCreators.innerText = "Artisans";
anchorCreators.className = "headerAnchor";
anchorCreators.id = "anchorCreators";
anchorDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "market.html");
anchorProducts.innerText = "Market";
anchorProducts.className = "headerAnchor";
anchorProducts.id = "anchorProducts";
anchorDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "exhibitors.html");
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
		// const productDescriptItem = document.createElement("li");
		// productDescriptItem.className = "productDescriptItem";
		// productDescriptItem.innerText = `${productDescript}`;
		// productDiv.append(productDescriptItem);
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
