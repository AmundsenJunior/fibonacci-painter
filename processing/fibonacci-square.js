float f0;
float f1;
int x;
int y;
float scale = 3;
float f0Scaled;
float f1Scaled;

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
  rect(x, y, f1Scaled, f1Scaled);
  
  //iterate up the fibonacci sequence
  float[] fibStep = fibIterator(f0Scaled, f1Scaled);
  f0Scaled = fibStep[0];
  f1Scaled = fibStep[1];
  
  //scale the starting point of the next square
  x = x + (2 * f0Scaled);
  y = y + (2 * f0Scaled);
}

float[] fibIterator(float fI, float fJ) {
  float[] fibs = new float[2];
  
  fibs[0] = fJ;
  fibs[1] = fI + fJ;
  
  return fibs;
}

void mousePressed() {
  x = mouseX;
  y = mouseY;

  f0 = 0;
  f1 = 1;
  f0Scaled = f0 * scale;
  f1Scaled = f1 * scale;

  loop();
}

void mouseReleased() {
  noLoop();
}