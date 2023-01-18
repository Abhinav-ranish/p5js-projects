A = 720
B = 400
BACKGROUND_COLOR = 220
 
COL_MAX = 255
 
function setup() {
 
  createCanvas(A, B);
  background(BACKGROUND_COLOR);
}
 

 
function setRandomFill() {
 
  c = color(random(COL_MAX), random(COL_MAX), random(COL_MAX))
  fill(c)
}
 
function getRadius(min_r, max_r) {
 
  return random(min_r, max_r)
}
 
function mouseClicked() {
  let MIN_R1 = min(A, B) / 100
  let MIN_R2 = min(A, B) / 10
  let FRAME_RATE = 4
 
  frameRate(FRAME_RATE)
 
  setRandomFill()
  
  x = random(A)
  y = random(B)
  r1 = getRadius(MIN_R1, MIN_R2)
  r2 = getRadius(r1 / 2, r1 * 2)
  circle(mouseX - r1 - r2, mouseY, 2 * r2)
  circle(mouseX + r1 + r2, mouseY, 2 * r2)
  circle(mouseX, mouseY - r1 - r2, 2 * r2)
  circle(mouseX, mouseY + r1 + r2, 2 * r2)
  drawFlower(mouseX, mouseY, r1, r2)
}

function drawFlower(x, y, r1, r2) {
  mouseClicked(true)
  circle(x, y, 2 * r1)
 
}
