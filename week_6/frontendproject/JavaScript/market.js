//--Product(s) Buttons--//

const submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.type = "input";
submitButton.innerText = "Get Products";
headerDiv.append(submitButton);
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.type = "input";
clearButton.innerText = "Clear Page";
headerDiv.append(clearButton);

//--Get Product(s) Function--//
const getProducts = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=5"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//
		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv.append(productDiv);
		//-Element InnerText-//
		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productDescript = getProductDataJson[counter].description;
		let productPrice = getProductDataJson[counter].price;
		//-Product Name Header-//
		const productName = document.createElement("h3");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);
		//-Product Card List-//
		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		const productDescriptItem = document.createElement("li");
		productDescriptItem.className = "productDescriptItem";
		productDescriptItem.innerText = `${productDescript}`;
		productDiv.append(productDescriptItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
console.log(getProducts());
