float radius = 100.0;
//+ and - operators against radius on beginX, beginY, endX, endY, x, y
//change the quadrant through which the arc is drawn
float beginX = 320.0;
float beginY = 180.0 + radius;
float prevX = 320.0;
float prevY = 180.0;
float endX = beginX + radius;
float endY = beginY - radius;
float distX;
float distY;
float x = 0.0;
float y = 0.0;
//step can control the drawing rate, as related to frameRate
//if step is too high, draw does not complete a full 90deg arc
//best with step < 0.01
float step = 0.005;
float pct = 0.0;

void setup() {
  size(640, 360);
  frameRate(60);
  background(0);
  smooth();
  distX = endX - beginX;
  distY = endY - beginY;
}

void draw() {
  pct += step;
  if (pct < 1.0) {
    x = beginX + (pct * distX);
    y = beginY - sqrt(abs(sq(radius) - sq(pct * distY)));
  }
  stroke(255);
  line(prevX, prevY, x, y);
  prevX = x;
  prevY = y;
}

void mousePressed() {
  pct = 0.0;
  beginX = mouseX;
  beginY = mouseY + radius;
  prevX = mouseX;
  prevY = mouseY;
}