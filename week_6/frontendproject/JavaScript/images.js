const getImages = async () => {
	const getImageData = await fetch(
		"https://picsum.photos/v2/list?page=2&limit=100"
	);
	const getImageDataJson = await getImageData.json();
	console.log(getImageDataJson);
};
console.log(getImages());
