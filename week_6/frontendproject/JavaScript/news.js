const getNews1 = async () => {
	const getNewsData = await fetch(
		"https://api.thenewsapi.com/v1/news/all?api_token=6i1mPY54dyfuIGs0MchnCRkl63fBulfmFaqjtCrh&language=en&limit=5"
	);
	const getNewsDataJson = await getNewsData.json();
	console.log(getNewsDataJson);
};
//-Article Div-//
