
var renderer = PIXI.autoDetectRenderer(256, 256);

document.getElementById('ChartStage').appendChild(renderer.view);
// console.log(document.getElementById('ChartStage'))

var stage = new PIXI.Container();

renderer.render(stage);
