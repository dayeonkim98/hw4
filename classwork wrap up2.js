var x = [210];
var y = [290];
var r = [0];
var colors = [40, 90];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 10; i = i + 1) {
   append(x, 210);
   append(y, random(1, 400));
   append(r, random(5, 10)); 
   append(colors, random(40, 140));
	}
  
  colorMode(HSB, 100, 100, 100, 100);
}

function draw() {
  background(255);
  noStroke();
  
  // draw smokestack
  fill(219, 58, 93, 50);
  stroke(0, 50);
  strokeWeight(3);
  rect(195, height, 30, -100);
	for (var i = 0; i < 10; i = i + 1) {
    
  // darker as it gets closer to 0
  push();
  fill(random(10, 255), random(10, 255), random(10, 255), y[i]);
  noStroke(); 
  translate(x[i], y[i]);
  rotate(r[i]);
  ellipse(random(50, -12), random(10, -12), random(10, 30));
  pop();
  
  // up 3 pixels
  y[i] -= 5;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.05
  
  // if reach past the top a bunch
  if (y[i] < -150) {
    y[i] = 290;
    }
  }   
}
