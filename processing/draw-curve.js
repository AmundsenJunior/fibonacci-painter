var radius = 100.0;

//+ and - operators against radius on beginX, beginY, endX, endY, x, y
//for both these global declarations and in the functions
//change the quadrant through which the arc is drawn
var beginX;
var beginY;
var prevX;
var prevY;
var endX = beginX + radius;
var endY = beginY - radius;
var distX;
var distY;
var x = 0.0;
var y = 0.0;

//step can control the drawing rate, as related to frameRate
//if step is too high, draw does not complete a full 90deg arc
//best with step < 0.01
var step = 0.005;
var pct = 0.0;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('draw-curve');
  frameRate(60);
  background(0);
  smooth();
  var distX = endX - beginX;
  var distY = endY - beginY;
}

function mousePressed() {
  var pct = 0.0;
  beginX = mouseX;
  beginY = mouseY + radius;
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
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

