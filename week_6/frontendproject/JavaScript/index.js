//--Create HTML Elements--//

//--Header/Navigation Div--//

const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle-1";
appTitle.innerText = "Artisan";
headerDiv.append(appTitle);

//-Inputs + Buttons-//

// const inputName = document.createElement("input");
// inputName.id = "inputName";
// inputName.type = "text";
// inputName.placeholder = "Username";
// headerDiv.append(inputName);
// const inputPassword = document.createElement("input");
// inputPassword.id = "inputPassword";
// inputPassword.type = "text";
// inputPassword.placeholder = "Password";
// headerDiv.append(inputPassword);
// const submitButtonHome = document.createElement("button");
// submitButtonHome.id = "submitButtonHome";
// submitButtonHome.type = "text";
// submitButtonHome.innerText = "Submit";
// headerDiv.append(submitButtonHome);

//--Container Div (s)--//

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
// const containerDiv2 = document.createElement("div");
// containerDiv2.id = "containerDiv-2";
// document.body.appendChild(containerDiv2);

//-Navigation Links--//

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
