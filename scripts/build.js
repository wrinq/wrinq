var buildify = require('buildify');

buildify.concat([]).save('./index.js').uglify().save('index.min.js');