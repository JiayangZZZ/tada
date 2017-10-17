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

			stage.addChild(dot); 
		}
	}
	renderer.render(stage);
}

function showVideo(href) {

}