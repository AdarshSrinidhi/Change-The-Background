var r = 0;
var g = 50;
var b = 255;
var ball;

function setup() {
  createCanvas(400,400)
}

function draw() {
  background("white");
  
  fill(r,g,b);
  rect(25,25,300,300);
  
  ball = ellipse(mouseX,mouseY,20,20);
}

function mouseMoved() {
  r = r + 10;
  g = g + 20;
  b = b + 30;
  
  if (r > 255) {
    r = 0;
  }

if (g > 255) {
    g = 0;
  }
  
  if (b > 255) {
    b = 0;
  }
  }

  