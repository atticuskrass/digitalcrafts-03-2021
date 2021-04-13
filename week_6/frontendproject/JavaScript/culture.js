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

const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "index.html");
anchorHome.innerText = "Home";
anchorHome.id = "anchorHome";
headerDiv.append(anchorHome);
const anchorNews = document.createElement("a");
anchorNews.setAttribute("href", "culture.html");
anchorNews.innerText = "Culture";
anchorNews.id = "anchorNews";
headerDiv.append(anchorNews);
const anchorCreators = document.createElement("a");
anchorCreators.setAttribute("href", "artisans.html");
anchorCreators.innerText = "Artisans";
anchorCreators.id = "anchorCreators";
headerDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "market.html");
anchorProducts.innerText = "Market";
anchorProducts.id = "anchorProducts";
headerDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "exhibitors.html");
anchorCompanies.innerText = "Exhibitors";
anchorCompanies.id = "anchorCompanies";
headerDiv.append(anchorCompanies);

//----Get News Function----//
const getNews1 = async () => {
	//-Get News Data-//

	const getNewsData = await fetch(
		"https://api.thenewsapi.com/v1/news/all?api_token=6i1mPY54dyfuIGs0MchnCRkl63fBulfmFaqjtCrh&language=en&categories=entertainment,food,travel&limit=5"
	);
	const getNewsDataJson = await getNewsData.json();
	console.log(getNewsDataJson);

	//--Create Article Card(s)--//
	let counter = 0;
	for (let article of getNewsDataJson.data) {
		//-Article Div--//

		const articleDiv = document.createElement("div");
		articleDiv.className = "articleDiv";
		articleDiv.setAttribute("id", `counter-${counter}`);
		containerDiv.append(articleDiv);

		//-Element InnerText-//

		let articleTitle = getNewsDataJson.data[counter].title;
		let articleDescription = getNewsDataJson.data[counter].description;
		let articleSnippet = getNewsDataJson.data[counter].snippet;
		// let articleSource = getNewsDataJson.data[counter].url;
		let articleImage = getNewsDataJson.data[counter].image_url;

		//-Article Header-//

		const articleHeader = document.createElement("h3");
		articleHeader.className = "articleHeader";
		articleHeader.innerText = `${articleTitle}`;
		articleDiv.append(articleHeader);

		//-Article Card Items-//

		const articleCardList = document.createElement("ul");
		articleCardList.className = "articleCardList";
		articleHeader.append(articleCardList);
		const articleDescriptItem = document.createElement("li");
		articleDescriptItem.className = "articleDescriptItem";
		articleDescriptItem.innerText = `${articleDescription}`;
		articleCardList.append(articleDescriptItem);
		const articleSnippetItem = document.createElement("li");
		articleSnippetItem.className = "articleSnippetItem";
		articleSnippetItem.innerText = `${articleSnippet}`;
		articleCardList.append(articleSnippetItem);
		// const articleSourceItem = document.createElement("li");
		// articleSourceItem.className = "articleSourceItem";
		// articleSourceItem.innerText = `${articleSource}`;
		// articleCardList.append(articleSourceItem);
		// const articleImageItem = document.createElement("img");
		// articleImageItem.className = "articleImageItem";
		// articleImageItem.src = `${articleImage}`;
		// articleImageItem.height = "300";
		// articleImageItem.width = "400";
		// articleCardList.append(articleImageItem);
		counter += 1;
	}
};
console.log(getNews1());
