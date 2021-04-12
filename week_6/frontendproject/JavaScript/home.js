//--Sign In && Buttons--//

//-Inputs-//

const inputName = document.createElement("input");
inputName.id = "inputName";
inputName.type = "text";
inputName.placeholder = "Username";
headerDiv.append(inputName);
const inputPassword = document.createElement("input");
inputPassword.id = "inputPassword";
inputPassword.type = "text";
inputPassword.placeholder = "Password";
headerDiv.append(inputPassword);

//-Buttons-//
const submitButtonHome = document.createElement("button");
submitButtonHome.id = "submitButtonHome";
submitButtonHome.type = "text";
submitButtonHome.innerText = "Submit";
headerDiv.append(submitButtonHome);
