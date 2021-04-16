//----Create HTML Elements----//

//--Header/Navigation Div--//

const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
const titleDiv = document.createElement("div");
titleDiv.id = "titleDiv";
headerDiv.append(titleDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle-1";
appTitle.innerText = "Artisan";
headerDiv.append(appTitle);

//--Container Div--//

//-Div 1-//
const divHeader1 = document.createElement("h2");
divHeader1.id = "divHeader1";
divHeader1.innerText = "Featured Sellers";
document.body.appendChild(divHeader1);
const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
//-Div 2-//
const divHeader2 = document.createElement("h2");
divHeader2.id = "divHeader2";
divHeader2.innerText = "Our Sellers";
document.body.appendChild(divHeader2);
const containerDiv2 = document.createElement("div");
containerDiv2.id = "containerDiv-2";
document.body.appendChild(containerDiv2);

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
	getCreators();
	getCreators2();
});

//---Get Creators Function(s)---//
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
const getCreators2 = async () => {
	//--Fetch Creator Data--//
	const getCreatorData = await fetch("https://randomuser.me/api/?results=20");
	const peopleDataJson = await getCreatorData.json();
	console.log(peopleDataJson);
	//--Featured Creator Card(s)--//
	let counter = 0;
	for (let creator of peopleDataJson.results) {
		//-Div-//
		const featuredCreatorDiv = document.createElement("div");
		featuredCreatorDiv.className = "featuredCreatorDiv";
		featuredCreatorDiv.setAttribute("id", `creator-${counter}`);
		containerDiv2.append(featuredCreatorDiv);
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
