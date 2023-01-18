let scene=0;
var x = 0;
var y = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;
function preload(){
    soundFormats('mp3', 'ogg');
    bg = loadImage("assets/spotify2.jpg")
    img = loadImage("assets/spider.png")
    fontBold = loadFont('assets/bold.ttf');
    spookysound = loadSound('assets/haloween.mp3')
}
function setup(){
    
    createCanvas(780, 480)
    spookysound.play()
 
}
function draw(){
    background(bg)
    blood1()
    blood1()
    blood2()
    blood2()
    blood3()
    blood4()
    blood4()
    blood5()
    blood5()
    blood6()
    blood6()
    blood3()
    
    switch(scene){
        case 0:
            fill(255);
            textSize(100);
                        
            fill('yellow')
            textAlign(CENTER);
            textFont(fontBold)
            text("MUSICAL TILES", width/2, height/2);
             textSize(40);
            fill('red')
            
            text("Halloween Edition", width/2, height/2 +50);
            textSize(50);
            fill('lightgreen')
            text("Press to start", width/2, height-50);

            if(mouseIsPressed){
                scene++;
            }
        
            break;
            case 1:
                textSize(100);
                text("CHUCKY ATE YOU.", width/2, height/2);
                fill('yellow')
                textSize(50);
                text("Better Luck Next time", width/2, height/2 + 50);
        
            
                break;
        }}
  
  function blood1(){
      fill('red')
      
      noStroke()
      y = y + 3
      x = x 
      fill('red')
      noStroke()
 
      ellipse(50 + x,0 + y + 5,6)
      ellipse(50 + x,10 + y,10)

      if(y>480){y = 0
               }}
  function blood2(){
      fill('red')
      noStroke()
      y1 = y1 + 4
      x = x 
      fill('red')
      noStroke()

      ellipse(150 + x,0 + y1 + 5,6)
      ellipse(150 + x,10 + y1,10)

      if(y1>480){y1 = 0
               }}
 function blood3(){
      fill('red')
      noStroke()
      y2 = y2 + 5
      x = x 
      fill('red')
      noStroke()

      ellipse(300 + x,0 + y2 + 5,6)
      ellipse(300 + x,10 + y2,10)

      if(y2>480){y2 = 0
               }}
function blood4(){
      fill('red')
      noStroke()
      y3 = y3 + 2.5
      x = x 
      fill('red')
      noStroke()

      ellipse(450 + x,0 + y3 + 5,6)
      ellipse(450 + x,10 + y3,10)

      if(y3>480){y3 = 0
               }}
function blood5(){
      fill('red')
      noStroke()
      y4 = y4 + 7
      x = x 
      fill('red')
      noStroke()

      ellipse(600 + x,0 + y4 + 5,6)
      ellipse(600 + x,10 + y4,10)

      if(y4>480){y4 = 0
               }}
function blood6(){
      fill('red')
      noStroke()
      y5 = y5 + 3
      x = x 
      fill('red')
      noStroke()

      ellipse(750 + x,0 + y5 + 5,6)
      ellipse(750 + x,10 + y5,10)

      if(y5>480){y5 = 0
               }}
