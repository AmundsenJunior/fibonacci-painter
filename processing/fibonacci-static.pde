Fibonacci fib;

void setup() {
  size(500, 500);
  background(0);
}

void draw() {
  if (mousePressed) {
    x_pos = mouseX;
    y_pos = mouseY;
    fib = new Fibonacci(x_pos, y_pos);
    fib.display();
  }
}    
  
class Fibonacci {
  float x, y;
  
  // Constructor
  Fibonacci(int x_pos, int y_pos) {
    x = x_pos;
    y = y_pos;
  }
  
  void display() {
    stroke(255);
    noFill();
    arc(x, y, 10, 10, PI, TWO_PI);
    arc(x-5, y, 20, 20, 0, HALF_PI);
    arc(x-5, y-5, 30, 30, HALF_PI, PI);
    arc(x+5, y-5, 50, 50, PI, PI+HALF_PI);
    arc(x+5, y+10, 80, 80, PI+HALF_PI, TWO_PI);
    arc(x-20, y+10, 130, 130, 0, HALF_PI);
  }
}
