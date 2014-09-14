var buildify = require("buildify");
var scriptsPath = "./scripts/";

buildify.task({
    name:"css-min",
    task:function(){
	console.log("starting css compression....");
	buildify().load("./styles/styles.css").cssmin().save("./styles/styles.min.css");
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
