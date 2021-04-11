//----Repeat HTML Elements----//

//--Container Div--//
const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.append(containerDiv);
//--Header/Navigation Div--//
const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
containerDiv.append(headerDiv);
//--Navigation Links--//
const homeLink = document.createElement("a");
homeLink.id = "homeLink";
headerDiv.append(homeLink);
const newsLink = document.createElement("a");
newsLink.id = "newsLink";
headerDiv.append(newsLink);
const marketLink = document.createElement("a");
marketLink.id = "marketLink";
headerDiv.append(marketLink);
const cultureLink = document.createElement("a");
cultureLink.id = "cultureLink";
headerDiv.append(cultureLink);
const sportLink = document.createElement("a");
sportLink.id = "sportLink";
headerDiv.append(sportLink);
const techLink = document.createElement("a");
techLink.id = "techLink";
headerDiv.append(techLink);
