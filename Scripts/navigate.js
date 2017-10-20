var width = 1000
	, height =550;

var renderer = PIXI.autoDetectRenderer(width, height, {
	transparent: true,
	resolution: 1,
	antialias: true
});

document.getElementById('ChartStage').appendChild(renderer.view);
var stage = new PIXI.Container();

$(document).ready(function() {
	$('.LeftBarLabel').click(function(e) {
		var id = e.currentTarget.id;
		$.get('http://10.14.41.20:8081/api/labels/'+id, function(data, status){
			console.log(data)
			$('.CurrentLabelName').html(data.name);
			for(var i = 0; i < 10; i++) {
				if(data.relations[i]) {
					$('.CurrentLabelRelations').children().eq(i).html(data.relations[i].name);
					$('.CurrentLabelRelations').children().eq(i).attr('id', data.relations[i].id);
				}
				
				drawDots(data);
			}
		})
	})

	$('.CurrentLabelRelationsName').click(function(e) {
		var id = e.currentTarget.id;
		$.get('http://10.14.41.20:8081/api/labels/'+id, function(data, status){
			console.log(data)
			$('.CurrentLabelName').html(data.name);
			for(var i = 0; i < 10; i++) {
				if(data.relations[i]) {
					$('.CurrentLabelRelations').children().eq(i).html(data.relations[i].name);
					$('.CurrentLabelRelations').children().eq(i).attr('id', data.relations[i].id);
				}
				
				drawDots(data);
			}
		})
	})
})

// var data = {
//   "name": "Darth Vador",
//   "id": "asdfasdfasdf",
//   "video_count": 123343,
//   "relations": [
//     {
//       "id": "asdfasdfasdf",
//       "name": "Battlefront2",
//       "is_meta": true,
//       "count": 455
//     },
//     {
//       "id": "asdfasdfasdf",
//       "name": "Starwhat",
//       "is_meta": false,
//       "count": 450
//     }
//   ],
//   "history": {
//     "grouped_by": "hour",
//     "videos": [
//       [
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.2",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.3",
//           "title": "One Awesome Video",
//           "views": 123123
//         }
//       ],[
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.1",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.2",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.3",
//           "title": "One Awesome Video",
//           "views": 123123
//         }
//       ],[
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.1",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.3",
//           "title": "One Awesome Video",
//           "views": 123123
//         }
//       ],
//       [
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.1",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.2",
//           "title": "One Awesome Video",
//           "views": 123123
//         },
//         {
//           "id": "asdfasdfasdfasfd",
//           "href": "http://www.youtube.3",
//           "title": "One Awesome Video",
//           "views": 123123
//         }
//       ]
//     ]
//   }
// }

// drawDots(data);

function drawDots(data) {
	var stage = new PIXI.Container();
	for(var j = 0; j < data.history.videos.length; j++) {
		for(var k = 0; k < data.history.videos[j].length; k++) {
			var dot = new PIXI.Graphics();
			dot.beginFill(4473924);
			dot.drawRoundedRect(0, 0, 15, 15, 5);
			dot.x = width - 20*(j+1);
			dot.y = height - 20*(k+1);
			dot.interactive = true;
			dot.buttonMode = true;
			dot.index = [j,k];

			dot.on('mousedown', (e) => {
					showVideo(data.history.videos[e.target.index[0]][e.target.index[1]]);
				})
			stage.addChild(dot); 
		}
	}
	renderer.render(stage);
}

function showVideo(data) {
	
	
	$('.Overlay').removeClass('hidden').addClass('reveal');
	$('.OverlayVideo').attr('src', 'https://www.youtube.com/embed/'+ getId(data.href) +'?autoplay=1');

}

function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

$('.OverlayClose').click(function() {
	$('.Overlay').removeClass('reveal').addClass('hidden');
})