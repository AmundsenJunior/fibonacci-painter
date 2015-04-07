
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('fibonacci-static');
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    var x_pos = mouseX;
    var y_pos = mouseY;
    fibonacci(x_pos, y_pos);
  }
}    
  
function fibonacci(x, y) {
  stroke(255);
  noFill();
  arc(x, y, 10, 10, PI, TWO_PI);
  arc(x-5, y, 20, 20, 0, HALF_PI);
  arc(x-5, y-5, 30, 30, HALF_PI, PI);
  arc(x+5, y-5, 50, 50, PI, PI+HALF_PI);
  arc(x+5, y+10, 80, 80, PI+HALF_PI, TWO_PI);
  arc(x-20, y+10, 130, 130, 0, HALF_PI);
}
