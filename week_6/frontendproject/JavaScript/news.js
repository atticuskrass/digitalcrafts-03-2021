//----Get News Function----//
const getNews1 = async () => {
	//-Get News Data-//
	const getNewsData = await fetch(
		"https://api.thenewsapi.com/v1/news/all?api_token=6i1mPY54dyfuIGs0MchnCRkl63fBulfmFaqjtCrh&language=en&limit=5"
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
		let articleDescription = getNewsDataJson[counter].description;
		let articleSnippet = getNewsDataJson[counter].snippet;
		let articleSource = getNewsDataJson[counter].url;
		let articleImage = getNewsDataJson[counter].image_url;
		//-Article Header-//
		const articleHeader = document.createElement("h2");
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
		articleSnipperItem.className = "articleSnippetItem";
		articleSnippetItem.innerText = `${articleSnippet}`;
		articleCardList.append(articleSnippetItem);
		const articleSourceItem = document.createElement("li");
		articleSourceItem.className = "articleSourceItem";
		articleSourceItem.innerText = `${articleSource}`;
		articleCardList.append(articleSourceItem);
		const articleImageItem = document.createElement("li");
		articleImageItem.className = "articleImageItem";
		articleImageItem.innerText = `${articleImage}`;
		articleCardList.append(articleImageItem);
	}
};
