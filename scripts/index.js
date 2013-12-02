var helpers = {

    id : function(id){
	return document.getElementById(id);
    },
    show : function(element){
	element.style.display="block";
    },

    hide : function(element){
	element.style.display = "none";
    }

};


var domElements = {

    'signUpForm' :'<form action="" method = "post" id ="signUpForm"><input type="text" name="username" value="" placeholder= "username"/><input type="password" name="password" value="" placeholder="password"/><input type="text" name="email" value="" placeholder="email"/></form>',

    'loginForm': '<form action="" method="post" id="loginForm"><input type="text" name="username" value="" placeholder="username"/><input type="password" name="password" value="" placeholder="password"/></form>'

};

var signUp= helpers.id("signup");
var login= helpers.id("login");
var splashDiv = helpers.id("splash");

signUp.onclick = function(){
helpers.hide(splashDiv);
};

login.onclick = function(){
helpers.hide(splashDiv);
};
