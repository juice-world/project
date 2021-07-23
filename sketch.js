var run
function preload(){
  loadImage("Runner-1.png");
  loadImage("Runner-2.png");
}

function setup(){
  createCanvas(900,900);
run=loadImage("Runner-1.png","Runner-2.png")
 run=createSprites(450,450,30,30)
}

function draw() {
  background(4);

}
