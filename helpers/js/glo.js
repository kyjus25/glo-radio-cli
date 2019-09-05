const CONFIG = require('../../config.json');
const request = require('request');
const GloSDK = require('@axosoft/glo-sdk');


module.exports = {
  setCard: function (boardId, cardId, columnId, title, videoId, attachmentId) {
    console.log(attachmentId);
    const card = {
      name: title,
      column_id: columnId,
      description: {
        text: videoId
      },
      cover_image_attachment_id: attachmentId,
    };
    GloSDK(CONFIG['GITKRAKEN_API_KEY']).boards.cards.edit(boardId, cardId, card).then(res => {
      // console.log(res);
    }).catch(res => {
      console.log('FAILED', res);
    });
  },
  addComment: function (boardId, cardId, columnId, thumbnail, title, videoId, attachmentId) {
    const comment = {
      text: '![image](' + thumbnail + ')'
    };
    GloSDK(CONFIG['GITKRAKEN_API_KEY']).boards.cards.comments.create(boardId, cardId, comment).then(res => {
      // console.log(res);
      this.setCard(boardId, cardId, columnId, title, videoId, attachmentId);
    });
  }
};
