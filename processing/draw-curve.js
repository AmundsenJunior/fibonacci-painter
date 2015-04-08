var drawCurveSketch = function( dc ) {

  var radius = 100.0;

  //+ and - operators against radius on beginX, beginY, endX, endY, x, y
  //for both these global declarations and in the functions
  //change the quadrant through which the arc is drawn
  var beginX;
  var beginY;
  var prevX;
  var prevY;
  var endX;
  var endY;
  var distX;
  var distY;
  var x = 0.0;
  var y = 0.0;

  //step can control the drawing rate, as related to frameRate
  //if step is too high, draw does not complete a full 90deg arc
  //best with step < 0.01
  var step = 0.005;
  var pct = 0.0;

  dc.setup = function() {
    dc.createCanvas(500, 500);
    dc.frameRate(60);
    dc.background(0);
    dc.smooth();
  };

  dc.draw = function() {
    if (dc.mouseIsPressed) {
      var mousePress = dc.mousePressed();
      pct = mousePress.pct;
      beginX = mousePress.beginX;
      beginY = mousePress.beginY;
      prevX = mousePress.prevX;
      prevY = mousePress.prevY;
    }

    pct += step;
    if (pct < 1.0) {
      distX = dc.dist( beginX, dc.endX( beginX, radius));
      x = beginX + (pct * distX);
      distY = dc.dist( beginY, dc.endY( beginY, radius));
      y = beginY - dc.sqrt(dc.abs(dc.sq(radius) - dc.sq(pct * distY)));
    }
    dc.stroke(255);
    dc.line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
  }; 

  dc.mousePressed = function() {
    pct = 0.0;
    beginX = dc.mouseX;
    beginY = dc.mouseY + radius;
    prevX = dc.mouseX;
    prevY = dc.mouseY;
    return {
      pct: pct,
      beginX: beginX,
      beginY: beginY,
      prevX: prevX,
      prevY: prevY
    };
  };

  dc.endX = function( beginX, radius ) {
    return beginX + radius;
  };

  dc.endY = function( beginY, radius ) {
    return beginY - radius;
  };

  dc.dist = function( begin, end ) {
    return end - begin;
  };
};

var drawCurve = new p5(drawCurveSketch, 'draw-curve');
