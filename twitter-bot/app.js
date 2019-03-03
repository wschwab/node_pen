// https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
// https://codeburst.io/25-node-js-tutorials-1db3b1da0260

var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var params = {
  q: '#nodejs',
  count: 10,
  result_type = 'recent',
  lang: 'en'
}
