A = 700
B = 500
BACKGROUND_COLOR = 220 
col = 255
 
function setup() {

 
  createCanvas(A, B);
  background(BACKGROUND_COLOR);

}
 
function draw() {
  c = color(random(col), random(col), random(col))
  fill(c)
  R1 = random(30)
  R2 = random(30)
  D1 = 2 * R1
  D2 = 2 * R2
  CENTER_X = random(A)
  CENTER_Y = random(B)
  
  circle(CENTER_X, CENTER_Y, D1)
  circle(CENTER_X - R1 - R2, CENTER_Y, D2)
  circle(CENTER_X + R1 + R2, CENTER_Y, D2)
  circle(CENTER_X, CENTER_Y - R1 - R2, D2)
  circle(CENTER_X, CENTER_Y + R1 + R2, D2)
 
}
 
