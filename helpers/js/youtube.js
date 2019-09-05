const CONFIG = require('../../config.json');
const request = require('request');
const glo = require('./glo.js');
const upload = require('./upload.js');

module.exports = {
  getMetadata: function (board, card) {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
      + card.name + ' official song&maxResults=1&key='
      + CONFIG['YOUTUBE_API_KEY'];
    request(url, function (error, response, body) {

      body = JSON.parse(body);
      // console.log(body['items'][0]);
      const id = body['items'][0]['id']['videoId'];
      const title = body['items'][0]['snippet']['title'];
      const image = body['items'][0]['snippet']['thumbnails']['high']['url'];
      upload.uploadImage(board, card, image, id, title);
    });
  }
};


