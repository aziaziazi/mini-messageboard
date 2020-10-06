var express = require('express');
var router = express.Router();

var messages = [
  {
    author: 'bunbun',
    message: "I'm hungry",
    date: new Date()
  },{
    author: 'Coco',
    message: "Me too",
    date: new Date()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages});
});

router.post('/new', function(req, res, next) {
  console.log(req.body)
  messages.push({
    author: req.body.author,
    message: req.body.message,
    date: new Date()
  })
  res.redirect('/')
});

module.exports = router;
