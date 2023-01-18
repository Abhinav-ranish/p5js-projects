m_row = 0
m_col = 0
var x = 50
var y = 50
var z = 75
 
DELAY_IN_MS = 750

total_ms = DELAY_IN_MS + 1
 
reload = false
 
function setup() {
  createCanvas(300, 300)
}
 
function draw() {
 
  background(220)
 
  fill("white")
  circle(x,y,z)
  circle(3*x,y,z)
  circle(5*x,y,z)
  circle(x,3*y,z)
  circle(3*x,3*y,z)
  circle(5*x,3*y,z)
  circle(x,5*y,z)
  circle(3*x,5*y,z)
  circle(5*x,5*y,z)
 
  total_ms += deltaTime  
  if (total_ms > DELAY_IN_MS || reload) {
 
    m_row = round(random(2))
    m_col = round(random(2))
 
    // Get their centers
    m_center_x = get_center_x(m_row)
    m_center_y = get_center_y(m_col)
 
    // We drew a random circle
    // Reset the timer to wait another 500ms
    total_ms = 0
 
    // Also set is_cleared to false since its
    // a new circle
    reload = false
  }
 
  // We always have a center to draw red!
  fill("red")
  circle(m_center_y, m_center_x, 75)
}
 
function get_center_x(row) {
 
  return row * 100 + 50
}
 
function get_center_y(column) {
 
  return column * 100 + 50
}
 
function is_point_in_circle(x, y, row, column) {
 
  center_x = get_center_x(row)
  center_y = get_center_y(column)
 
  radius = 75 / 2
 
  if (dist(x, y, center_x, center_y) < radius) {
 
    return true
  }
  else {
 
    return false
  }
}
 
function mouseClicked() {
 
  if (is_point_in_circle(mouseY, mouseX, m_row, m_col)) {
 
    reload = true
  }
}
 
