//--Companies Buttons--//

const submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.type = "input";
submitButton.innerText = "Get Exhibitors";
headerDiv.append(submitButton);
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.type = "input";
clearButton.innerText = "Clear Page";
headerDiv.append(clearButton);

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
console.log(getExhibitors());
console.log(getExhibitors2());
