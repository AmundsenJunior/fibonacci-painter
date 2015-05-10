var spiralLooperSketch = function( sl ) {

  var canvas, radius, theta0, theta1, x, y;

  sl.setup = function() {
    canvas = sl.createCanvas(500, 500);
    canvas.id("spiral-looper");
    canvas.mousePressed(sl.newSpiral);

    sl.frameRate(10);
    sl.background(0);
    sl.noFill();
    sl.stroke(255);
    sl.smooth();
    sl.noLoop();
  };

  sl.draw = function() {
    //draws a 90deg arc around the initial mouse location
    sl.arc(x, y, radius, radius, theta0, theta1);

    //increments the radius and turns the angle by 90deg
    radius += 10;
    theta0 = theta1;
    theta1 += sl.HALF_PI;
  };

  sl.newSpiral = function() {
    //captures mouse location to start loop
    x = sl.mouseX;
    y = sl.mouseY;

    //resets radius and thetas to starting values
    radius = 10;
    theta0 = 0;
    theta1 = sl.HALF_PI;
    sl.loop();
  };

  sl.mouseReleased = function() {
    sl.noLoop();
  };

};

var spiralLooper = new p5(spiralLooperSketch, 'spiral-looper');
