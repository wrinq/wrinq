var signUp= helpers.id("signup");
var login= helpers.id("login");
var splashDiv = helpers.id("splash");

signUp.onclick = function(){
helpers.hide(splashDiv);
};

login.onclick = function(){
helpers.hide(splashDiv);
};
