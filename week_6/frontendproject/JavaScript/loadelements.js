//----Repeat HTML Elements----//

//--Header/Navigation Div--//
const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
//--Container Div--//
const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
//--Navigation Links--//
const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "home.html");
anchorHome.innerText = "Home";
anchorHome.id = "anchorHome";
headerDiv.append(anchorHome);
const anchorNews = document.createElement("a");
anchorNews.setAttribute("href", "news.html");
anchorNews.innerText = "News";
anchorNews.id = "anchorNews";
headerDiv.append(anchorNews);
const anchorCulture = document.createElement("a");
anchorCulture.setAttribute("href", "culture.html");
anchorCulture.innerText = "Culture";
anchorCulture.id = "anchorCulture";
headerDiv.append(anchorCulture);
const anchorSport = document.createElement("a");
anchorSport.setAttribute("href", "sport.html");
anchorSport.innerText = "Sport";
anchorSport.id = "anchorSport";
headerDiv.append(anchorSport);
const anchorCommerce = document.createElement("a");
anchorCommerce.setAttribute("href", "market.html");
anchorCommerce.innerText = "Commerce";
anchorCommerce.id = "anchorCommerce";
headerDiv.append(anchorCommerce);
const anchorTech = document.createElement("a");
anchorTech.setAttribute("href", "tech.html");
anchorTech.innerText = "Technology";
anchorTech.id = "anchorTech";
headerDiv.append(anchorTech);
