float radius;
float theta0;
float theta1;
float x;
float y;

void setup() {
  size(500, 500);
  frameRate(10);
  background(0);
  noFill();
  stroke(255);
  smooth();
  noLoop();
}

void draw() {
  //draws a 90deg arc around the initial mouse location
  arc(x, y, radius, radius, theta0, theta1);

  //increments the radius and turns the angle by 90deg
  radius += 10;
  theta0 = theta1;
  theta1 += HALF_PI;
}

void mousePressed() {
  //captures mouse location to start loop
  x = mouseX;
  y = mouseY;

  //resets radius and thetas to starting values
  radius = 10;
  theta0 = 0;
  theta1 = HALF_PI;
  loop();
}

void mouseReleased() {
  noLoop();
}

