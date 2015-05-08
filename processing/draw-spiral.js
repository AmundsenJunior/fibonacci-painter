var drawSpiralSketch = function( ds ) {

  var beginTheta;
  var beginRadius;
  var prevTheta;
  var prevRadius;
  var endTheta;
  var endRadius;
  var incTheta;
  var incRadius;
  var theta = 0.0;
  var radius = 0.0;

  // set the spiral origin point
  var x;
  var y;

  //step can control the drawing rate, as related to frameRate
  //if step is too high, draw does not complete a full 90deg arc
  //best with step < 0.01
  var frameRate = 60;
  var arcRate = ds.HALF_PI / frameRate;

  ds.setup = function() {
    ds.createCanvas(500, 500);
    ds.frameRate(frameRate);
    ds.background(0);
    ds.stroke(255);
    ds.smooth();
    ds.noFill();
  };

  ds.draw = function() {
    if (ds.mouseIsPressed) {
      var mousePress = ds.mousePressed();
      x = mousePress.x;
      y = mousePress.y;
      theta = mousePress.theta;
      radius = mousePress.radius;
      incTheta = mousePress.incTheta;
      incRadius = mousePress.incRadius;
    }

    incRadius = radius + 1;
    incTheta = theta + arcRate;

    ds.arc(x, y, radius, incRadius, theta, incTheta);

    radius = incRadius;
    theta = incTheta;
  }; 

  ds.mousePressed = function() {
    x = ds.mouseX;
    y = ds.mouseY;
    theta = 0.0;
    radius = 0.0;
    incTheta = 0.0;
    incRadius = 0.0;
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
