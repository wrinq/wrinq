function random_ad(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ads = ["come_out.html","chaos_for_tenancy.html"];

var ad = ads[random_ad(0,1)];

$("#ad_div").load("/ads/"+ad,function(){
});
