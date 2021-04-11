//----Repeat HTML Elements----//

//--Container Div--//
const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
//--Header/Navigation Div--//
const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
//--Navigation Links--//
const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "../Home/home.html");
anchorHome.innerText = "Home";
anchorHome.id = "anchorHome";
headerDiv.append(anchorHome);
const anchorNews = document.createElement("a");
anchorNews.setAttribute("href", "../News/news.html");
anchorNews.innerText = "News";
anchorNews.id = "anchorNews";
headerDiv.append(anchorNews);
const anchorCulture = document.createElement("a");
anchorCulture.setAttribute("href", "..Culture/culture.html");
anchorCulture.innerText = "Culture and Art";
anchorCulture.id = "anchorCulture";
headerDiv.append(anchorCulture);
const anchorMarket = document.createElement("a");
