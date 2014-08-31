var buildify = require("buildify");

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
	buildify().load("./scripts/index.js").uglify().save("./scripts/index.min.js");
	console.log("completed script completion");
    }

});
