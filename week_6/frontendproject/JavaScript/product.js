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
	console.log(newsDataJson);
	//-Create Article Div-//
};
console.log(getNews());
