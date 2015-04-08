var fibStatSketch = function( fibStat ) {

  fibStat.setup = function() {
    fibStat.createCanvas(500, 500);
    fibStat.background(0);
  };

  fibStat.draw = function() {
    if (fibStat.mouseIsPressed) {
      var x_pos = fibStat.mouseX;
      var y_pos = fibStat.mouseY;
      fibStat.fibonacci(x_pos, y_pos);
    }
  };    
  
  fibStat.fibonacci = function(x, y) {
    fibStat.stroke(255);
    fibStat.noFill();
    fibStat.arc(x, y, 10, 10, fibStat.PI, fibStat.TWO_PI);
    fibStat.arc(x-5, y, 20, 20, 0, fibStat.HALF_PI);
    fibStat.arc(x-5, y-5, 30, 30, fibStat.HALF_PI, fibStat.PI);
    fibStat.arc(x+5, y-5, 50, 50, fibStat.PI, fibStat.PI+fibStat.HALF_PI);
    fibStat.arc(x+5, y+10, 80, 80, fibStat.PI+fibStat.HALF_PI, fibStat.TWO_PI);
    fibStat.arc(x-20, y+10, 130, 130, 0, fibStat.HALF_PI);
  };
};

var fibonacciStatic = new p5(fibStatSketch, 'fibonacci-static');

