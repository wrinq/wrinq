$(".button").click(function(e){
    e.preventDefault();
    var id = $(e.target).attr('href');
    $(id).get(0).scrollIntoView();
});

var get_tokens = "http://localhost:5984/wrinq_landing_analytics/_design/wrinq_landing_analytics/_update/create_doc";
var metric_analysis = "http://localhost:5984/wrinq_landing_analytics/_design/wrinq_landing_analytics/_update/update_analysis";

function analyze(){
    $.post(get_tokens,function(data){
	var metric_analysis_req = metric_analysis+data;
	$.put(metric_analysis_req,function(data){
	    console.log(data);
	});
    });
};

var select = $("#preview_currency>select");
var select_email = $("#email_currency>select"); 
for(var key in currency){
    if(!currency.hasOwnProperty(key))continue;
    var option = "<option value="+currency[key].name+">"+currency[key].name+"("+currency[key].symbol_native+")</option>";
    select.append(option);
    select_email.append(option);
}

$("#preview").click(function(e){
    e.preventDefault();
    var validation = $("#preview_validation");
    validation.html("");
    
    var name = $("#tname").val();
    var email = $("#temail").val();
    var rent =$("#trent").val();
    var int_rent = parseInt(rent.replace(/[^0-9]/gi, ''),10);
    var symbol = $("#preview_currency>select :selected").text();
    var symbol_extract = symbol.substring(symbol.indexOf("(")+1,symbol.indexOf(")"));
    var valid_rent = isNaN(int_rent)?false:int_rent;
    var valid_email= validateEmail(email)?email:false;

    if(rent&&!valid_rent){
	validation.append("<p>Rent should be a number like 450, 579 etc</p>");

    }
    if(!name||!rent){
	validation.append("<p>It is important that you fill in the name and rent fields for preview to work</p>");
    }

    if(name && valid_rent){
	$("#var_name").text(name);
	$("#payment_des").attr('title',name+" on clicking this link you will be taken to paypal to pay the rent");
	if(valid_email) $("#var_email").text(email);
	$("#var_rent").html(symbol_extract+" "+valid_rent);    
	$("#preview_panel").get(0).scrollIntoView();
	analyze();
    }

});


$("#notify").click(function(e){
    var validation = $("#email_validation");
    validation.html("");
    
    var name = $("#lname").val();
    var email = $("#lemail").val();
    var rent =$("#lrent").val();
    var int_rent = parseInt(rent.replace(/[^0-9]/gi, ''),10);
    var valid_rent = isNaN(int_rent)?false:int_rent;
    var valid_email= validateEmail(email)?email:false;
    if(rent&&!valid_rent){
	validation.append("<p>Rent should be a number like 450, 579 etc</p>");

    }
    if(!name||!rent||!valid_email){
	validation.append("<p>Could you please fill in a valid email,rent and first name fields so we can send you an email?</p>");
    }

    if(name && valid_rent && valid_email){
	//analyze this
    }

});


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
