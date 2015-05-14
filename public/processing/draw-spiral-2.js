var drawSpiralTwoSketch = function( ds2 ) {

  var theta = 0.0;
  var radius = 0.0;

  var x;
  var y;

  var frameRate = 6;
  var arcRate = ds2.HALF_PI / frameRate;

  var canvas;

  var thetaSlider, thetaLabel;
  var scaleSlider, scaleLabel;

  ds2.setup = function() {
    
    thetaLabel = ds2.createElement("p", "Starting Angle: ");
    thetaSlider = ds2.createSlider(0.0, ds2.TWO_PI, ds2.PI);

    scaleLabel = ds2.createElement("p", "Scale Factor: ");
    scaleSlider = ds2.createSlider(0.1, 10.0, 1.0);

    canvas = ds2.createCanvas(500, 500);
    canvas.id("draw-spiral");
    canvas.mousePressed(ds2.newSpiral);
    
    ds2.frameRate(frameRate);
    ds2.background(0);
    ds2.stroke(255);
    ds2.smooth();
    ds2.fill(255, 255, 255, 127);
  };

  ds2.draw = function() {

    incRadius = radius + 16.18;
    incTheta = theta + arcRate;

    ds2.arc(x, y, radius, incRadius, theta, incTheta);

    radius = incRadius;
    theta = incTheta;
  }; 

  ds2.newSpiral = function() {
    x = ds2.mouseX;
    y = ds2.mouseY;
    theta = incTheta = thetaSlider.value();
    radius = incRadius = 0.0;
    ds2.loop();
    return {
      x: x,
      y: y,
      theta: theta,
      radius: radius,
      incTheta: incTheta,
      incRadius: incRadius
    };
  };

  ds2.mouseReleased = function() {
    ds2.noLoop();
  };

};

var drawSpiralTwo = new p5(drawSpiralTwoSketch, 'draw-spiral-2');
