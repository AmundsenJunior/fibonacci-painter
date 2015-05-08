var drawSpiralSketch = function( ds ) {

  var theta = 0.0;
  var radius = 0.0;

  var x;
  var y;

  var frameRate = 60;
  var arcRate = ds.HALF_PI / frameRate;

  var canvas;

  ds.setup = function() {
    canvas = ds.createCanvas(500, 500);
    canvas.id("draw-spiral");
    
    ds.frameRate(frameRate);
    ds.background(0);
    ds.stroke(255);
    ds.smooth();
    ds.noFill();
  };

  ds.draw = function() {

    incRadius = radius + 1.618;
    incTheta = theta + arcRate;

    ds.arc(x, y, radius, incRadius, theta, incTheta);

    radius = incRadius;
    theta = incTheta;
  }; 

  ds.mousePressed = function() {
    x = ds.mouseX;
    y = ds.mouseY;
    theta = radius = incTheta = incRadius = 0.0;
    return {
      x: x,
      y: y,
      theta: theta,
      radius: radius,
      incTheta: incTheta,
      incRadius: incRadius
    };
  };

};

var drawSpiral = new p5(drawSpiralSketch, 'draw-spiral');
