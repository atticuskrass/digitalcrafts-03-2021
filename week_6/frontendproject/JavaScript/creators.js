//---Creator(s) Buttons---//

const submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.type = "input";
submitButton.innerText = "Get Artisans";
headerDiv.append(submitButton);
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.type = "input";
clearButton.innerText = "Clear Page";
headerDiv.append(clearButton);

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
		personCardList.id = "personCity";
		featuredCreatorDiv.append(personCardList);
		const cityListItem = document.createElement("li");
		personCardList.append(cityListItem);
		cityListItem.innerText = `Currently based in ${personCity}, ${personCountry}`;
		const personContactItem = document.createElement("li");
		personCardList.append(personContactItem);
		personContactItem.innerText = `Can be contacted at ${personEmail}`;
		const personPictureItem = document.createElement("img");
		personCardList.append(personPictureItem);
		personPictureItem.src = `${personPicture}`;
		counter += 1;
	}
};
const getCreators2 = async () => {
	//--Fetch Creator Data--//
	const getCreatorData = await fetch("https://randomuser.me/api/?results=10");
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
		personCardList.id = "personCity";
		featuredCreatorDiv.append(personCardList);
		const cityListItem = document.createElement("li");
		personCardList.append(cityListItem);
		cityListItem.innerText = `Currently based in ${personCity}, ${personCountry}`;
		const personContactItem = document.createElement("li");
		personCardList.append(personContactItem);
		personContactItem.innerText = `Can be contacted at ${personEmail}`;
		const personPictureItem = document.createElement("img");
		personCardList.append(personPictureItem);
		personPictureItem.src = `${personPicture}`;
		counter += 1;
	}
};
console.log(getCreators());
console.log(getCreators2());
