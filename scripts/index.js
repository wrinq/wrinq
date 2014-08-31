//get two tokens here

$("#preview").click(function(e){
    var validation = $("#preview_validation");
    validation.html("");
    
    var name = $("#tname").val();
    var email = $("#temail").val();
    var rent =$("#trent").val();
    var int_rent = parseInt(rent.replace(/[^0-9]/gi, ''),10);
    var valid_rent = isNaN(int_rent)?false:rent;
    var valid_email= email? validateEmail(email):false;
    if(name) $("#var_name").text(name);
    if(valid_email) $("#var_email").text(email);
    if(valid_rent) $("#var_rent").text(valid_rent);    
    if(rent&&!valid_rent){
	validation.append("<p>Rent should be a number like $450</p>");

    }
    if(!name||!rent){
	validation.append("<p>It is important that you fill in the name and rent fields for preview to work</p>");
    }

    if(name && valid_rent){
	//analyze this
    }

});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

$("#email-form").click(function(e){
    var validation = $("#email_validation");
    validation.html("");
    
    var name = $("#lname").val();
    var email = $("#lemail").val();
    var rent =$("#lrent").val();
    var int_rent = parseInt(rent.replace(/[^0-9]/gi, ''),10);
    var valid_rent = isNaN(int_rent)?false:rent;
    var valid_email= email? validateEmail(email):false;
    if(rent&&!valid_rent){
	validation.append("<p>Rent should be a number like $450</p>");

    }
    if(!name||!rent||!email){
	validation.append("<p>It is important that you fill in the name and rent fields for preview to work</p>");
    }

    if(name && valid_rent){
	//analyze this
    }

});
