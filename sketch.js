function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var ball = new Ball(x, y, 80, 80)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ball.show();
}