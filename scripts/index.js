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


var signUp= helpers.id("signup");
var login= helpers.id("login");
var splashDiv = helpers.id("splash");

signUp.onclick = function(){
helpers.hide(splashDiv);
};

login.onclick = function(){
helpers.hide(splashDiv);
};
