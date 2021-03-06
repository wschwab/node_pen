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

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    //loop through returned tweets
    for(let i=0; i<data.statuses.length; i++){
      //get tweet id
      let id = { id: data.statuses[i].id_str }
      //try to favorite
      T.post('favorites/create', id, function(err, response){
        if(err){
          console.log(err[0].message);
        }else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', 'https://twitter.com/${username}/status/$tweetId')
        }
      });
    }
  }else{
    console.log(err);
  }
})
