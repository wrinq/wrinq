var helpers = {

    id : function(id){
	return document.getElementById(id);
    },
    show : function(element){
	element.style.display="block";
    },

    hide : function(element){
	element.style.display = "none";
    },
    clearHtml :function(element){
	element.innerHTML = '';
    }

};


var domElements = {

    'signUpForm' :'<form action="" method = "post" id ="signUpForm"><p><input type="text" name="username" value="" placeholder= "username" required/></p><p><input type="password" name="password" value="" placeholder="password"  required/></p><p><input type="text" name="email" value="" placeholder="email"/></p><p><input type="button"  value="sign up"/></p></form>',

    'loginForm': '<form action="" method="post" id="loginForm"><p><input type="text" name="username" value="" placeholder="username"  required/></p><p><input type="password" name="password" value="" placeholder="password"  required/></p><p><input type="button" name="" value="login"/></p></form>'

};



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
