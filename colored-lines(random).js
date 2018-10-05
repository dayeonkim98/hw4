function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  colorMode (HSB)
  
  for (var x = 10; x < width-10; x = x + 10) {
    stroke(random(1, 350), 100, 100)
    line(x, height/2, mouseX, mouseY);
  }
}
