const prompt = require('prompt');

prompt.start();
yourName = prompt.get(["name"]);

console.log('Hey ' + yourName.name);