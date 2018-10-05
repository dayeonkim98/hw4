function setup() {
  createCanvas(400, 400);
  for (var i = 0;  i <100; i = i + 1) {
    append(x, random(width));
    append(y, random(height));
    append(changeInX, random(-3, 3));
    append(changeInY, random(-3, 3));
    append(colors, random(40, 140));
  }  
  
  colorMode(HSB);
}

var x = [50, 70];
var y = [200, 90];
var changeInX = [3, 4];
var changeInY = [3, 7];
var colors = [40, 90];

function draw() {
  background(220);

  noStroke();
  
  for (var i = 0; i  < x.length; i = i + 1) {
  fill(colors[i], 100, 100, 50, 50);
  ellipse(x[i], y[i], random(10, 50));
  
  x[i] = x[i] + changeInX[i];
  y[i] = y[i] + changeInY[i];
  
  if (x[i] > width) {
    changeInX[i] = -changeInX[i];
    colors[i] = colors[i] + 10;
  }
  
  if (x[i] < 0) {
    changeInX[i] = -changeInX[i];
    colors[i] = colors[i] - 30;
  }

  if (y[i] > height) {
    changeInY[i] = -changeInY[i];
    colors[i] = colors[i] - 60;
  }
  
  if (y[i] < 0) {
    changeInY[i] = -changeInY[i];
    colors[i] = colors[i] + 90;
  	}
  }
}
