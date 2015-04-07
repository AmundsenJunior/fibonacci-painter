var fibStatSketch = function( fibStat ) {

  fibStat.setup = function() {
    fibStat.canvas = createCanvas(500, 500);
    fibStat.background(0);
  };

  fibStat.draw = function() {
    if (mouseIsPressed) {
      var x_pos = mouseX;
      var y_pos = mouseY;
      fibStat.fibonacci(x_pos, y_pos);
    }
  };    
  
  fibStat.fibonacci = function(x, y) {
    fibStat.stroke(255);
    fibStat.noFill();
    fibStat.arc(x, y, 10, 10, PI, TWO_PI);
    fibStat.arc(x-5, y, 20, 20, 0, HALF_PI);
    fibStat.arc(x-5, y-5, 30, 30, HALF_PI, PI);
    fibStat.arc(x+5, y-5, 50, 50, PI, PI+HALF_PI);
    fibStat.arc(x+5, y+10, 80, 80, PI+HALF_PI, TWO_PI);
    fibStat.arc(x-20, y+10, 130, 130, 0, HALF_PI);
  };
};

var fibonacciStatic = new p5(fibStatSketch, 'fibonacci-static');

