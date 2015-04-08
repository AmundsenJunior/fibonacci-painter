var fibonacciSquareSketch = function ( fsq ) {

  var canvas, f0, f1, x, y, f0Scaled, f1Scaled;
  var scale = 3;

  fsq.setup = function() {
    canvas = fsq.createCanvas(500, 500);
    fsq.frameRate(10);
    fsq.background(0);
    fsq.noFill();
    fsq.stroke(255);
    fsq.smooth();
    fsq.noLoop();
  };

  fsq.draw = function() {

    fsq.rect(x, y, f1Scaled, f1Scaled);
  
    //iterate up the fibonacci sequence
    var fibStep = fsq.fibIterator(f0Scaled, f1Scaled);
    f0Scaled = fibStep[0];
    f1Scaled = fibStep[1];
  
    //scale the starting point of the next square
    x = x + (2 * f0Scaled);
    y = y + (2 * f0Scaled);
  };

  fsq.fibIterator = function( fI, fJ ) {
    fibs = [
      fJ,
      fI + fJ
    ];
  
    return fibs;
  };

  fsq.mousePressed = function() {
    x = fsq.mouseX;
    y = fsq.mouseY;

    f0 = 0;
    f1 = 1;
    f0Scaled = f0 * scale;
    f1Scaled = f1 * scale;

    fsq.loop();
  };  

  fsq.mouseReleased = function() {
    fsq.noLoop();
  };

};

var fibonacciSquare = new p5(fibonacciSquareSketch, 'fibonacci-square');
