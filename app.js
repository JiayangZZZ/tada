
var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

app.use(express.static(__dirname + '/Views'));
app.set('views', path.join(__dirname, '/Views'));
app.use('/Scripts', express.static('Scripts'));
app.use('/JSON', express.static('JSON'));
app.use('/Styles', express.static('Styles'));
app.use('/Images', express.static('Images'));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  // res.render('index', {
  //   title: "Tada Interface Prototype",
  //   data: [{
  //     "name": "tag1",
  //     "video_count": 1234
  //   },{
  //     "name": "tag2",
  //     "video_count": 123423
  //   },{
  //     "name": "tag3",
  //     "video_count": 331234
  //   }]
  // })
  request.get({
    headers: {'content-type' : 'application/json; charset=utf-8'},
    url: 'http://10.14.41.20:8081/api/labels',
    json: true
  }, function(err, r, body) {
    if(err)
      console.log(err);
    else {
      res.render('index', {
        title: "Tada interface prototype",
        data: body.data
      })
    }
  })
})

/*
 * Express app
 */
app.listen(process.env.PORT || 3000, function(){
  console.log("Tada server listening on port %d in %s mode", this.address().port, app.settings.env);
});
