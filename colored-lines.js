function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  colorMode (HSB)
  
  for (var x = 10; x < width-10; x = x + 10) {
    stroke(random(1, 255), random(1, 255), random(10, 255))
    line(x, height/2, mouseX, mouseY);
  }
}
