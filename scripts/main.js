var signUp= helpers.id("signup");
var login= helpers.id("login");
var splashDiv = helpers.id("splash");
var formDiv = helpers.id("formDiv");

signUp.onclick = function(){
helpers.hide(splashDiv);
formDiv.innerHTML = domElements.signUpForm;
};

login.onclick = function(){
helpers.hide(splashDiv);
formDiv.innerHTML= domElements.loginForm;
};
