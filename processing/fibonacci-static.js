var fibonacciStaticSketch = function( fst ) {

  fst.setup = function() {
    fst.createCanvas(500, 500);
    fst.background(0);
  };

  fst.draw = function() {
    if (fst.mouseIsPressed) {
      var x_pos = fst.mouseX;
      var y_pos = fst.mouseY;
      fst.fibonacci(x_pos, y_pos);
    }
  };    
  
  fst.fibonacci = function(x, y) {
    fst.stroke(255);
    fst.noFill();
    fst.arc(x, y, 10, 10, fst.PI, fst.TWO_PI);
    fst.arc(x-5, y, 20, 20, 0, fst.HALF_PI);
    fst.arc(x-5, y-5, 30, 30, fst.HALF_PI, fst.PI);
    fst.arc(x+5, y-5, 50, 50, fst.PI, fst.PI+fst.HALF_PI);
    fst.arc(x+5, y+10, 80, 80, fst.PI+fst.HALF_PI, fst.TWO_PI);
    fst.arc(x-20, y+10, 130, 130, 0, fst.HALF_PI);
  };
};

var fibonacciStatic = new p5(fibonacciStaticSketch, 'fibonacci-static');

