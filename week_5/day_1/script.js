//---Create Persistant HTML Elements---//

//--Container Div--//

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.body.append(containerDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle";
appTitle.innerText = "Sun Dog";
containerDiv.append(appTitle);

//--Zip Code && Country Code Input--//

const zipInput = document.createElement("input");
zipInput.id = "zipInput";
zipInput.type = "text";
zipInput.placeholder = "Enter the zipcode";
containerDiv.append(zipInput);
const countryInput = document.createElement("input");
countryInput.id = "countryInput";
countryInput.type = "text";
countryInput.placeholder = "Enter the country code";
containerDiv.append(countryInput);

//--Submit or Find Weather Btn--//

const findWeatherBtn = document.createElement("button");
findWeatherBtn.id = "findWeatherBtn";
findWeatherBtn.type = "input";
findWeatherBtn.innerText = "Find Weather";
containerDiv.append(findWeatherBtn);

//--Choose Background Input && Btn--//

const chooseBackgroundBtn = document.createElement("button");
chooseBackgroundBtn.id = "chooseBackgroundBtn";
chooseBackgroundBtn.type = "input";
chooseBackgroundBtn.innerText = "Choose Background";
containerDiv.append(chooseBackgroundBtn);
const chooseBackgroundInput = document.createElement("select");
chooseBackgroundInput.id = "chooseBackgroundInput";
chooseBackgroundInput.type = "select-multiple";
containerDiv.append(chooseBackgroundInput);
const option1 = document.createElement("option");
option1.id = "option1";
option1.innerText = "Clouds Above Farm (Image)";
chooseBackgroundInput.append(option1);
const option2 = document.createElement("option");
option2.id = "option2";
option2.innerText = "Classical Sky (Image)";
chooseBackgroundInput.append(option2);
const option3 = document.createElement("option");
option3.id = "option3";
option3.innerText = "Rainflowers (Image)";
chooseBackgroundInput.append(option3);
const option4 = document.createElement("option");
option4.id = "option4";
option4.innerText = "Falling Snow (Video)";
chooseBackgroundInput.append(option4);
const option5 = document.createElement("option");
option5.id = "option5";
option5.innerText = "Raindrops (Video)";
chooseBackgroundInput.append(option5);
const option6 = document.createElement("option");
option6.id = "option6";
option6.innerText = "Winter Forest (Video)";
chooseBackgroundInput.append(option6);

//--Background Images && Videos--//

const image1 = document.createElement("img");
image1.id = "farmclouds";
image1.src = "images/farmclouds.jpg";
const image2 = document.createElement("img");
image2.id = "classicalsky";
image2.src = "images/classicalsky.jpg";
const image3 = document.createElement("img");
image3.id = "rainflowers";
image3.src = "images/rainflowers.jpg";
const video1 = document.createElement("video");
video1.id = "fallingsnow";
video1.src = "videos/fallingsnow.mp4";
const video2 = document.createElement("video");
video2.id = "raindrops";
video2.src = "videos/raindropwindow.mp4";
const video3 = document.createElement("video");
video3.id = "winterforest";
video3.src = "videos/winterforest.mp4";

//---Choose Background Function---//

const chooseBackground = () => {
	const optSelect1 = document.querySelector("#chooseBackgroundInput").value;
	if (optSelect1 === "Clouds Above Farm (Image)") {
		containerDiv.append(image1);
	} else if (optSelect1 === "Classical Sky (Image)") {
		document.body.append(image2);
	} else if (optSelect1 === "Rainflowers (Image)") {
		document.body.append(image3);
	} else if (optSelect1 === "Falling Snow (Video)") {
		document.body.append(video1);
	} else if (optSelect1 === "Raindrops (Video)") {
		document.body.append(video2);
	} else if (optSelect1 === "Winter Forest (Video)") {
		document.body.append(video3);
	} else {
		return "Error";
	}
};
//---Get Weather Function---//

const getWeather = async () => {
	//--Retrieving Weather Data--//

	const grabZipInput = document.querySelector("#zipInput").value;
	const grabCountryInput = document.querySelector("#countryInput").value;
	const getData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?zip=${grabZipInput},${grabCountryInput}&appid=2e6ba36a70f347f8900af3b3e7d9e215&units=imperial`
	);
	const dataJson = await getData.json();

	//--Create City Div--//

	const cityDiv = document.createElement("div");
	cityDiv.class = "cityDiv";
	containerDiv.append(cityDiv);

	//--Create City Card--//

	const location = document.createElement("h3");
	location.id = "location";
	location.innerText = `The weather in ${dataJson.name}, ${grabCountryInput}, ZipCode ${grabZipInput}`;
	cityDiv.append(location);
	const unOrderList = document.createElement("ul");
	unOrderList.id = "cardList";
	cityDiv.append(unOrderList);
	const currentTemp = document.createElement("li");
	currentTemp.id = "currentTemp";
	currentTemp.innerText = `Current Temperature is ${dataJson.main.temp}°F`;
	unOrderList.append(currentTemp);
	const feelsLike = document.createElement("li");
	feelsLike.id = "feelsLike";
	feelsLike.innerText = `Feels like ${dataJson.main.feels_like}°F. ${dataJson.weather[0].main}`;
	unOrderList.append(feelsLike);
	const humidity = document.createElement("li");
	humidity.id = "humidity";
	humidity.innerText = `Humidity at ${dataJson.main.humidity}%`;
	unOrderList.append(humidity);

	console.log(dataJson);
};

//--Event Listeners--//

const grabWeatherBtn = document.querySelector("#findWeatherBtn");
grabWeatherBtn.addEventListener("click", () => {
	getWeather();
});

const applyBackgroundImage = document.querySelector("#chooseBackgroundBtn");
applyBackgroundImage.addEventListener("click", () => {
	chooseBackground();
});
