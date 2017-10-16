
var renderer = PIXI.autoDetectRenderer(512, 512, {
	transparent: true,
	resolution: 1,
	antialias: true
});

document.getElementById('ChartStage').appendChild(renderer.view);

var stage = new PIXI.Container();

const dot = new PIXI.Graphics();
dot.beginFill(000);
dot.drawCircle(0, 0, 10);
dot.x = 100;
dot.y = 100;
stage.addChild(dot);


renderer.render(stage);
