const express = require('express');
const bodyParser = require('body-parser');


const youtube = require('./helpers/js/youtube.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let video = null;

app.post('/', function (req, res) {
  if (
    (req.body.action === 'added' || req.body.action === 'reordered' || req.body.action === 'deleted' || req.body.action === 'moved_column' )
    && (req.body.hasOwnProperty('card') && !req.body.hasOwnProperty('comment'))
  ) {
    processWebhook(req, req.body.board, req.body.card, req.body.action);
  }
  res.send({'status': 'success'});
});

function processWebhook(req, board, card, action) {
  // console.log(req.body);
  switch(action) {
    case 'added':
      youtube.getMetadata(board, card);
      break;
    case 'reordered':

      break;
    case 'deleted':

      break;
    case 'moved_column':

      break;
    default:
    // code block
  }
}

app.listen(port, () => console.log(`GLO radio listening on port ${port}!`));
