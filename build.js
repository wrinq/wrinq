var buildify = require("buildify");
var scriptsPath = "./scripts/";
var fs = require("fs");
var hmin = require("html-minifier").minify;

buildify.task({
    name:"css-min",
    task:function(){
	console.log("starting css compression....");
	buildify().concat([
	    "/styles/simple_grid.css",
	    "./styles/wrinq_styles.css",
	    "./styles/bootstrap_tables.css"
	]).cssmin().save("./styles/style.min.css");

	console.log("Completed css completion");
    }

});


buildify.task({
    name:"js-min",
    task:function(){
	console.log("starting js compression....");
	buildify().concat([scriptsPath+"currency.js",scriptsPath+"index.js",scriptsPath+"rent_calculator.js"])
	    .uglify().save("./scripts/index.min.js");
	buildify().concat([scriptsPath+"blog.js",scriptsPath+"rent_calculator.js"])
	    .uglify().save("./scripts/blog.min.js");
	console.log("completed script compaction");
    }

});


buildify.task({
    name:"index-assembly",
    task:function(){
	console.log("assembling the index page");
	var index_1 = fs.readFileSync("./index_part_1.html",{encoding:"utf-8"});
	var index_2 = fs.readFileSync("./index_part_2.html",{encoding:"utf-8"});
	fs.writeFileSync("./index.html",index_1+index_2);
	console.log("index page assembled");
    }

});
