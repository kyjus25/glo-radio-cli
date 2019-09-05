const CONFIG = require('../../config.json');
const child_process = require('child_process');
const glo = require('./glo.js');

module.exports = {
  uploadImage: function (board, card, thumbnail, videoId, title) {
    child_process.exec('./helpers/bash/upload.sh ' + board.id + ' ' + card.id + ' ' + thumbnail + ' ' + CONFIG['GITKRAKEN_API_KEY'], function(error, stdout, stderr){
      stdout = JSON.parse(stdout);
      glo.addComment(board.id, card.id, card.column_id, stdout.url, title, videoId, stdout.id);
    }, error => {});
  }
};
