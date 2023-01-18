var x = 0
var y = 0
var z = 60

function setup() {
  createCanvas(720, 400);
  background(102);
  circle(10 + x,10 + y,x)
}


function draw() {
  background(220);
  y = y +1
  x = x +1
  circle(10 + x,10 + y,z)
  
}
