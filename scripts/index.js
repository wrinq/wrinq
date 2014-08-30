$("#preview").click(function(e){
    var validation = $("#preview_validation");
    validation.text("");
    var name = $("#name_tenant").val();
    var email = $("#email_tenant").val();
    var rent =$("#rent_tenant").val();
    if(name) $("#var_name").text(name);
    if(email) $("#var_email").text(email);
    if(rent) $("#var_rent").text(rent);

    if(!name||!rent){
	validation.text("It is important that you fill in the name and email fields for preview to work");
    }

});
