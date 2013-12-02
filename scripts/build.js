var buildify = require('buildify');

buildify().concat(['helpers.js','html.js','main.js']).save('./index.js').uglify().save('./index.min.js');
buildify().load('../styles/style.css').cssmin().save('../styles/styles.min.css');
