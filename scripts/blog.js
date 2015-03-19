function random_ad(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ads = ["come_out.html"];

var ad = ads[random_ad(0,0)];

$("#ad_div").load("/ads/"+ad,function(){
    console.log("loaded the html ad");
});
