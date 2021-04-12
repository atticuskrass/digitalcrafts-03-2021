//----News HTML Elements----//

//--Search Inputs && Buttons--//
//-Inputs-//
const inputCountry = document.createElement("input");
inputCountry.id = "inputCountry";
inputCountry.type = "text";
inputCountry.placeholder = "Enter country";
const inputDate = document.createElement("input");
inputDate.id = "inputDate";
inputDate.type = "text";
inputDate.placeholder = "Enter From Date in 00-00-0000 Format";
const inputOrganize = document.createElement("input");
inputOrganize.id = "inputOrganize";
inputOrganize.type = "text";
inputOrganize.placeholder = "Select Relevancy, Popularity, publishedAt";
//-Buttons-//
const submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.type = "input";
submitButton.innerText = "Get News";
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.type = "input";
clearButton.innerText = "Clear Page";
// //--News Category Function--//
// const newsCategory = async () => {};
// //--Fetch News Data--//
// const newsData = await fetch(
// 	"https://newsapi.org/v2/top-headlines?country=us&category=world&apiKey=0ff4213a96f34bf6a9c611fd797edbf9"
// );
// const newsDataJson = newsData.json();
