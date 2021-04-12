//----News HTML Elements----//

//--Search Inputs && Buttons--//
//-Inputs-//
const inputCountry = document.createElement("input");
inputCountry.id = "inputCountry";
inputCountry.type = "text";
inputCountry.placeholder = "Enter country";
headerDiv.append(inputCountry);
// const inputDate = document.createElement("input");
// inputDate.id = "inputDate";
// inputDate.type = "text";
// inputDate.placeholder = "From Date in 00-00-0000";
// headerDiv.append(inputDate);
const inputOrganize = document.createElement("input");
inputOrganize.id = "inputOrganize";
inputOrganize.type = "text";
inputOrganize.placeholder = "Select Relevancy, Popularity, publishedAt";
headerDiv.append(inputOrganize);
//-Buttons-//
const submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.type = "input";
submitButton.innerText = "Get News";
headerDiv.append(submitButton);
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.type = "input";
clearButton.innerText = "Clear Page";
headerDiv.append(clearButton);

//--Get News Function--//
const getNews = async () => {
	//-Grab Input Values-//
	const grabInputCountry = document.querySelector("#inputCountry").value;
	const grabInputOrganize = document.querySelector("#inputOrganize").value;
	//-Fetch News Data--//
	const getNewsData = await fetch(
		`https://newsapi.org/v2/everything?q=${grabInputCountry}&from=04-01-2021&sortBy=${grabInputOrganize}&pagesize=5&apiKey=0ff4213a96f34bf6a9c611fd797edbf9`
	);
	const newsDataJson = await getNewsData.json();
	//-Create Article Div-//
};
