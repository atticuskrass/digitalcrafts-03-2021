//--Search Inputs && Buttons--//
//-Inputs-//
const inputName = document.createElement("input");
inputName.id = "inputName";
inputName.type = "text";
inputName.placeholder = "First, Last Name";
headerDiv.append(inputName);
const inputPassword = document.createElement("input");
inputPassword.id = "inputPassword";
inputPassword.type = "text";
inputPassword.placeholder = "Enter password";
headerDiv.append(inputPassword);
//-Buttons-//
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
