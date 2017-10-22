var width = 1000
	, height =550;

// var renderer2 = PIXI.autoDetectRenderer(width, height, {
// 	transparent: true,
// 	resolution: 1,
// 	antialias: true
// });

// document.getElementById('Footer').appendChild(renderer2.view);
// var stage = new PIXI.Container();


var lowerHandle = $('.TimelineHandleLower')
	, upperHandle = $('.TimelineHandleUpper');

addListeners();

function addListeners(){
	lowerHandle.on('mousedown', lowerHandleMouseDown);
	upperHandle.on('mousedown', upperHandleMouseDown);
	window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
	window.removeEventListener('mousemove', lowerHandleMove, true);
	window.removeEventListener('mousemove', upperHandleMove, true);
}

function lowerHandleMouseDown(e){
	window.addEventListener('mousemove', lowerHandleMove, true);
}

function lowerHandleMove(e){
	lowerHandle.css({left: e.clientX + 'px'});
}

function upperHandleMouseDown(e){
	window.addEventListener('mousemove', upperHandleMove, true);
}

function upperHandleMove(e){
	upperHandle.css({left: e.clientX + 'px'});
}