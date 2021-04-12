//----Repeat HTML Elements----//

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
//--Navigation Links--//
const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "home.html");
anchorHome.innerText = "Home";
anchorHome.id = "anchorHome";
headerDiv.append(anchorHome);
const anchorCreators = document.createElement("a");
anchorCreators.setAttribute("href", "creators.html");
anchorCreators.innerText = "Creators";
anchorCreators.id = "anchorCreators";
headerDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "products.html");
anchorProducts.innerText = "Products";
anchorProducts.id = "anchorProducts";
headerDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "companies.html");
anchorCompanies.innerText = "Companies";
anchorCompanies.id = "anchorCompanies";
headerDiv.append(anchorCompanies);
