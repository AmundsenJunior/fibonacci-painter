var fibonacciStaticSketch = function( fst ) {
  
  var canvas;

  fst.setup = function() {
    canvas = fst.createCanvas(500, 500);
    canvas.id("fibonacci-static");
    canvas.mouseMoved(fst.newFibonacci);
    fst.background(0);
  };

  fst.draw = function() {
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

  fst.mouseMoved = function() {
    var x = fst.mouseX;
    var y = fst.mouseY;
    return {
      x: x,
      y: y
    };
  };

  fst.newFibonacci = function() {
    if (fst.mouseIsPressed) {
      var pos = fst.mouseMoved();
      var x = pos.x;
      var y = pos.y;  
      fst.fibonacci(x, y);
    }
  };  
};

var fibonacciStatic = new p5(fibonacciStaticSketch, 'fibonacci-static');

