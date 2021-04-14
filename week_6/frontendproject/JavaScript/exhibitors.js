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
	getExhibitors();
	getExhibitors2();
});

//--Get Exhibitors Functions--//
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
		containerDiv.append(companyDiv);

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
const getExhibitors2 = async () => {
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
