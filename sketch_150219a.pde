void setup() {
  size(500, 400);
  background(200);
}

void draw() {
  stroke(20);
  fill(100);
  rect(100, 100, 100, 200);
  if(mousePressed) {
    fill(mouseX, 0, mouseY);
    ellipse(mouseX, mouseY, 20, 20);
  } else {
    fill(mouseX, 0, mouseY);
    rect(mouseX, mouseY, 20, 20);
  }
}

