$("#preview").click(function(e){
    console.log("clicked");
    var name = $("#name_tenant").val();
    var email = $("#email_tenant").val();
    var rent =$("#rent_tenant");
    if(name) $("#var_name").text(name);
    if(email) $("#var_email").text(email);
    if(rent) $("#var_rent").text(rent);

});
