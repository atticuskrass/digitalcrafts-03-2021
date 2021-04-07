//----Create Persistant HTML Elements----//

//---Div Container---//
const divContainer = document.createElement("div");
divContainer.id = "divContainer";
document.body.append(divContainer);
// const appTitle = document.createElement("h1");
// appTitle.id = "appTitle";
// appTitle.innerText = "EngineerSearch";
// divContainer.append(appTitle);

//---Inputs && Buttons---//
const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv";
document.body.append(headerDiv);
const getPeopleBtn = document.createElement("button");
getPeopleBtn.id = "getPeopleBtn";
getPeopleBtn.innerText = "Get People";
headerDiv.append(getPeopleBtn);
const getCompaniesBtn = document.createElement("button");
getCompaniesBtn.id = "getCompaniesBtn";
getCompaniesBtn.innerText = "Get Companies";
headerDiv.append(getCompaniesBtn);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle";
appTitle.innerText = "EngineerSearch";
headerDiv.append(appTitle);

//----Get People Function----//

const getPeople = async () => {
	//---Fetch People Data---//

	const peopleData = await fetch(
		"https://fakerapi.it/api/v1/persons?_quantity=30"
	);
	const peopleDataJson = await peopleData.json();
	console.log(peopleDataJson);

	//---Create Card(s)---//

	let counter = 1;
	for (let person of peopleDataJson.data) {
		//-Div-//
		const personDiv = document.createElement("div");
		personDiv.className = "personDiv";
		personDiv.setAttribute("id", `person-${counter}`);
		divContainer.append(personDiv);

		//-Element InnerText-//
		let personFirstName = peopleDataJson.data[counter].firstname;
		let personLastName = peopleDataJson.data[counter].lastname;
		let personCity = peopleDataJson.data[counter].address.city;
		let personCountry = peopleDataJson.data[counter].address.country;
		let personEmail = peopleDataJson.data[counter].email;
		let personPhone = peopleDataJson.data[counter].phone;
		let personWebsite = peopleDataJson.data[counter].website;

		//-Person Name Header-//
		const personName = document.createElement("h3");
		personName.id = "personName";
		personDiv.append(personName);
		personName.innerText = `${personLastName}, ${personFirstName}`;

		//-Person Card List-//
		const personCardList = document.createElement("ul");
		personCardList.id = "personCity";
		personDiv.append(personCardList);
		const cityListItem = document.createElement("li");
		personCardList.append(cityListItem);
		cityListItem.innerText = `Current Location is ${personCity}, ${personCountry}`;
		const personContactItem = document.createElement("li");
		personCardList.append(personContactItem);
		personContactItem.innerText = `Can be contacted at ${personEmail} or ${personPhone}`;
		const personWebsiteItem = document.createElement("li");
		personCardList.append(personWebsiteItem);
		personWebsiteItem.innerText = `Portfolio website address is ${personWebsite}`;
		const personImage = document.createElement("img");
		personImage.id = "personImage";

		counter += 1;
	}
};

const getCompanies = async () => {
	//---Fetch Company Data---//

	const companyData = await fetch(
		"https://fakerapi.it/api/v1/companies?_quantity=30"
	);
	const companyDataJson = await companyData.json();
	console.log(companyDataJson);

	//---Create Card(s)---//

	let counter = 1;
	for (let company of companyDataJson.data) {
		//-Div-//
		const companyDiv = document.createElement("div");
		companyDiv.className = "companyDiv";
		companyDiv.setAttribute("id", `company-${counter}`);
		divContainer.append(companyDiv);

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
		companyListItem.innerText = `Headquarters located is ${companyCity}, ${companyLocale}`;
		const companyContactItem = document.createElement("li");
		companyCardList.append(companyContactItem);
		companyContactItem.innerText = `Can be contacted at ${companyEmail} or ${companyPhone}`;
		const companyWebsiteItem = document.createElement("li");
		companyCardList.append(companyWebsiteItem);
		companyWebsiteItem.innerText = `Company website is ${companyWebsite}`;
		counter += 1;
	}
};

//----Event Listeners----//

const grabPeopleBtn = document.querySelector("#getPeopleBtn");
grabPeopleBtn.addEventListener("click", () => {
	getPeople();
});
const grabCompanyBtn = document.querySelector("#getCompaniesBtn");
grabCompanyBtn.addEventListener("click", () => {
	getCompanies();
});
