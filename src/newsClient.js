const apiKey = require('./apiKey');

const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

class NewsClient {
  loadNews(callback) {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      callback(data);
      console.log(data);
      })
    };
  };

  module.exports = NewsClient;