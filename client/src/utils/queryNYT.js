var axios = require('axios');

var articleQuery = function(topic, startYear, endYear){

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";

	return new Promise (function (fulfill, reject){

    axios.get(queryURL).then(function(response) {
		  var result = [];

      if (response.data.response.docs[0]) {
        for(var i=0; i<response.data.response.docs.length; i++){		          
          if(i === 5){
            break;
          }
          else {
            result.push(response.data.response.docs[i]);
          }
        }
        fulfill(result);
      }
      else{
        reject("");
      }
		});
	})
}

module.exports = {
  articleQuery
}