var fibonacciCounterSketch = function( fc ) {

  var canvas, f0 = 0, f1 = 0, fibStep, loop = false;

  fc.setup = function() {
    canvas = fc.createCanvas(500, 500);
    canvas.id("fibonacci-counter");
    canvas.mousePressed(fc.restartCounter);

    fc.frameRate(2);
    fc.stroke(255);
    fc.smooth();
    fc.noLoop();

    fc.textSize(64);
    fc.textAlign(fc.CENTER);
  };

  fc.draw = function() {

    fc.background(0);

    if (fc.textWidth(String(f1)) < ( canvas.width * 0.8) ) {
      fc.text(String(f1), canvas.width/2, canvas.height/2);

      fibStep = fc.fibIterator(f0, f1);
      f0 = fibStep[0];
      f1 = fibStep[1];
    } else { 
      fc.background(0);
      fc.text("0", canvas.width/2, canvas.height/2); 
      fc.restartCounter;
    }
  };

  fc.fibIterator = function( fI, fJ ) {
    fibs = [
      fJ,
      fI + fJ
    ];

    return fibs;
  };

  fc.restartCounter = function() {
    f0 = 0;
    f1 = 1;

    if (loop == false) {
      fc.loop();
    } else {
      fc.noLoop();
    }
  };

};

var fibonacciCounter = new p5(fibonacciCounterSketch, 'fibonacci-counter');

