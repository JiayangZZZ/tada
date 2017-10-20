
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

var labels = {
  "description": {
      "sorted_by": "popularity",
      "label_count": 18283848
  },
  "data": [{
      "name": "Darth vador",
      "id": "asdfasdfasdfasdf",
      "is_meta": true,
      "video_count": 123412
  },{
      "name": "Dar",
      "id": "asdfasdfasdfasdf",
      "is_meta": false,
      "video_count": 123412
  },{
      "name": "dor",
      "id": "asdfasdfasdfasdf",
      "is_meta": false,
      "video_count": 123412
  }]
}

var label = {
  "name": "Darth Vador",
  "id": "asdfasdfasdf",
  "video_count": 123343,
  "relations": [
    {
      "id": "asdfasdfasdf",
      "name": "Battlefront2",
      "is_meta": true,
      "count": 455
    },
    {
      "id": "asdfasdfasdf",
      "name": "Starwhat",
      "is_meta": false,
      "count": 450
    }
  ],
  "history": {
    "grouped_by": "hour",
    "videos": [
      [
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.1",
          "title": "One Awesome Video",
          "views": 123123
        },
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.2",
          "title": "One Awesome Video",
          "views": 123123
        },
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.3",
          "title": "One Awesome Video",
          "views": 123123
        }
      ],
      [
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.1",
          "title": "One Awesome Video",
          "views": 123123
        },
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.2",
          "title": "One Awesome Video",
          "views": 123123
        },
        {
          "id": "asdfasdfasdfasfd",
          "href": "http://www.youtube.3",
          "title": "One Awesome Video",
          "views": 123123
        }
      ]
    ]
  }
}

app.get('/', function(req, res) {
  // res.render('index', {
  //   title: "Tada Interface Prototype",
  //   data: labels.data
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
