const getPeopleData = async (eventObject) => {
	const buttonName = eventObject.target.name;
	let peopleData = await fetch(
		`https://fakerapi.it/api/v1/${buttonName}?_quantity=30`
	);
	let json = await peopleData.json();
	let counter = 1;
	for (let jsonValue of json.data) {
		const img = document.createElement("img");
		img.className = "profile-image";
		img.height = "200";
		img.src = `http://placeimg.com/640/480/people/${counter}`;
		const contentCard = document.createElement("div");

		if (jsonValue.firstname || jsonValue.lastName) {
			const people = document.createElement("p");
			const peopleDiv = document.querySelector(".people-container");
			const cardContainer = document.createElement("div");
			const email = document.createElement("p");

			people.className = "people-name";
			people.innerHTML = jsonValue.firstname + " " + jsonValue.lastname;
			email.className = "email";
			email.innerHTML = jsonValue.email;
			cardContainer.className = "card-container";
			contentCard.className = "people-card";
			contentCard.append(img, people, email);
			cardContainer.append(contentCard);
			peopleDiv.append(cardContainer);
		}

		if (jsonValue.vat) {
			const companies = document.createElement("p");
			const website = document.createElement("p");
			const companyDiv = document.querySelector(".company-container");
			const cardContainer2 = document.createElement("div");

			companies.className = "companies";
			companies.innerHTML = jsonValue.name;
			website.className = "website";
			website.innerHTML = jsonValue.website;
			cardContainer2.className = "card-container2";
			contentCard.className = "company-card";
			contentCard.append(img, companies, website);
			cardContainer2.append(contentCard);
			companyDiv.append(cardContainer2);
		}
		counter += 1;
	}
};
const peopleButton = document.querySelector(".search-people");
peopleButton.addEventListener("click", (event) => {
	getPeopleData(event);
});

const companyButton = document.querySelector(".search-company");
companyButton.addEventListener("click", (event) => {
	getPeopleData(event);
});
