//--Create HTML Elements--//

//--Header/Navigation Div--//

const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle-1";
appTitle.innerText = "Artisan";
headerDiv.append(appTitle);

//--About Div--//

const aboutDiv = document.createElement("div");
aboutDiv.id = "aboutDiv";
document.body.append(aboutDiv);

//--Container Div (s)--//

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
const containerDiv2 = document.createElement("div");
containerDiv2.id = "containerDiv-2";
document.body.appendChild(containerDiv2);
const containerDiv3 = document.createElement("div");
containerDiv3.id = "containerDiv-3";
document.body.appendChild(containerDiv3);

//-Navigation Links--//

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
anchorCreators.setAttribute("href", "../HTML+CSS/artisans.html");
anchorCreators.innerText = "Artisans";
anchorCreators.className = "headerAnchor";
anchorCreators.id = "anchorCreators";
anchorDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "../HTML+CSS/market.html");
anchorProducts.innerText = "Market";
anchorProducts.className = "headerAnchor";
anchorProducts.id = "anchorProducts";
anchorDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "../HTML+CSS/exhibitors.html");
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
	getCreators();
	getExhibitors();
	getProducts();
});

//--Index Functions--//

const getCreators = async () => {
	//--Fetch Creator Data--//
	const getCreatorData = await fetch("https://randomuser.me/api/?results=5");
	const peopleDataJson = await getCreatorData.json();
	console.log(peopleDataJson);
	//--Featured Creator Card(s)--//
	let counter = 0;
	for (let creator of peopleDataJson.results) {
		//-Div-//

		const featuredCreatorDiv = document.createElement("div");
		featuredCreatorDiv.className = "featuredCreatorDiv";
		featuredCreatorDiv.setAttribute("id", `creator-${counter}`);
		containerDiv.append(featuredCreatorDiv);

		//-Element InnerText-//

		let personFirstName = peopleDataJson.results[counter].name.first;
		let personLastName = peopleDataJson.results[counter].name.last;
		let personCity = peopleDataJson.results[counter].location.city;
		let personCountry = peopleDataJson.results[counter].location.country;
		let personEmail = peopleDataJson.results[counter].email;
		let personPicture = peopleDataJson.results[counter].picture.large;

		//-Creator Name Header-//

		const personName = document.createElement("h3");
		personName.id = "personName";
		featuredCreatorDiv.append(personName);
		personName.innerText = `${personLastName}, ${personFirstName}`;

		//-Creator Card List-//

		const personCardList = document.createElement("ul");
		personCardList.id = "personList";
		featuredCreatorDiv.append(personCardList);
		const cityListItem = document.createElement("li");
		cityListItem.className = "cityListItem";
		personCardList.append(cityListItem);
		cityListItem.innerText = `Currently based in ${personCity}, ${personCountry}`;
		const personContactItem = document.createElement("li");
		personContactItem.className = "personContactItem";
		personCardList.append(personContactItem);
		personContactItem.innerText = `Can be contacted at ${personEmail}`;
		const personPictureItem = document.createElement("img");
		personPictureItem.className = "personPictureItem";
		personCardList.append(personPictureItem);
		personPictureItem.src = `${personPicture}`;
		counter += 1;
	}
};
const getExhibitors = async () => {
	//--Fetch Exhibitor Data--//
	const getExhibitorData = await fetch(
		"https://fakerapi.it/api/v1/companies?_quantity=8"
	);
	const companyDataJson = await getExhibitorData.json();
	//--Create Exhibitor Card(s)--//
	let counter = 0;
	for (let company of companyDataJson.data) {
		//-Div-//

		const companyDiv = document.createElement("div");
		companyDiv.className = "companyDiv";
		companyDiv.setAttribute("id", `company-${counter}`);
		containerDiv2.append(companyDiv);

		//-Element InnerText-//

		let companyName = companyDataJson.data[counter].name;
		let companyLocale = companyDataJson.data[counter].country;
		let companyCity = companyDataJson.data[counter].addresses[0].city;
		let companyWebsite = companyDataJson.data[counter].website;
		let companyEmail = companyDataJson.data[counter].email;
		let companyPhone = companyDataJson.data[counter].phone;

		//-Company Name Header-//

		const companyHeaderName = document.createElement("h3");
		companyHeaderName.id = "companyHeaderName";
		companyDiv.append(companyHeaderName);
		companyHeaderName.innerText = `${companyName}`;

		//-Company Card List-//

		const companyCardList = document.createElement("ul");
		companyCardList.id = "companyCardList";
		companyDiv.append(companyCardList);
		const companyListItem = document.createElement("li");
		companyCardList.append(companyListItem);
		companyListItem.innerText = `Headquarters located in ${companyCity}, ${companyLocale}`;
		const companyContactItem = document.createElement("li");
		companyCardList.append(companyContactItem);
		companyContactItem.innerText = `Can be contacted at ${companyEmail} or ${companyPhone}`;
		const companyWebsiteItem = document.createElement("li");
		companyCardList.append(companyWebsiteItem);
		companyWebsiteItem.innerText = `Company website is ${companyWebsite}`;
		counter += 1;
	}
};
//--Get Product(s) Function--//
const getProducts = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=5"
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
		const productDescriptItem = document.createElement("li");
		productDescriptItem.className = "productDescriptItem";
		productDescriptItem.innerText = `${productDescript}`;
		productDiv.append(productDescriptItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `${productPrice}`;
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
