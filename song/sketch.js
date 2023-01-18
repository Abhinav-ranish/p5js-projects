let x = 400
let y = 400
let z = 50
var mySound;
function setup() {
  createCanvas(x, y);
  background(220);
  fill('red')
  sunflower.play()
}

function preload() { 
  
  soundFormats('mp3', 'ogg')
  mySound = loadSound('assets/bomb.mp3')
  sunflower = loadSound('assets/sunflower.mp3')
} 

function draw() {
  if(x == 0){
    if(z < 600){
    fill('red')
    circle(x/2,y/2,z)
    z = z + 10
        if(z < 550 && z >500){  
      mySound.play()}
    
    }
    else {
      background(220)
    
    }}
  }
