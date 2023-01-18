let button;
let button1;
let button2;
let button3;
let button4;
let z;

let easy;
let medium;
let hard;

let old_hands = []
let frame_rate = 0
started = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER)
  
  // global variables
  roy = 255;
  g = 0;
  biv = 0;
  x = 0;
  y = 0;
  z = -1;
  
  //variables needed for typing music
  wave = 100;
  positive_negative=1;
  radius = windowHeight/10;
  tile_value1 = windowWidth/8
  tile_value2 = windowWidth*3/8
  tile_value3 = windowWidth*5/8
  tile_value4 = windowWidth/8
  tile_1 = windowWidth/8;
  tile_2 = windowWidth*3/8;
  tile_3 = windowWidth*5/8;
  tile_4 = windowWidth*7/8;
  tries = -1;
  counter = 0
  combo = 0
  
  //variables needed for bubble pop
  object_holder = initial_shape_values()
  
  //variables needed for fists of fury
  spider_y1 = 0;
  spider_y2 = 0;
  spider_y3 = 0;
  spider_y4 = 0;
  spider_y5 = 0;
  spider_y6 = 0;
  
  //loading images
  img = loadImage("assets/spider.png")
  music = loadImage("assets/musicnote.png")
  sparkles = loadImage("assets/sparkles.jpg")
  bg = loadImage("assets/spotify2.jpg")
  
  //loading music
  sunflower = loadSound("assets/sunflower.mp3")
  bomb = loadSound('assets/bomb.mp3')
  prayer = loadSound("assets/prayer.mp3")
  sea_shanty = loadSound("assets/sea_shanty.mp3")
  how_we_roll = loadSound("assets/how_we_roll.mp3")
  firework = loadSound("assets/Firework.mp3")
  jeopardy = loadSound("assets/jeopardy.mp3")
  
  //loading fonts
  fontBold = loadFont("assets/bold.ttf")
  
  // loading buttons
  button = createButton('Main Menu');
  
  button1 = createButton('Bubble Pop').size(windowWidth/6,windowWidth/6);
  button1.style("font-family", "Helvetica");
  button1.style("font-size", "25px");
  button1.style('background-color','black');
  button1.style('color', 'white');
  
  button2 = createButton('Typing Music').size(windowWidth/6,windowWidth/6);
  button2.style("font-family", "Helvetica");
  button2.style("font-size", "25px");
  button2.style('background-color','black');
  button2.style('color', 'white');
  
  button3 = createButton('Fists of Fury').size(windowWidth/6,windowWidth/6);
  button3.style("font-family", "Helvetica");
  button3.style("font-size", "25px");
  button3.style('background-color','black');
  button3.style('color', 'white');
  
  button4 = createButton('Exit').size(windowWidth/15+10,windowWidth/15-10);
  button4.style("font-family", "Helvetica");
  button4.style("font-size", "18px");
  
  easy = createButton("EASY").size(windowWidth/5)
  medium = createButton("MEDIUM").size(windowWidth/5)
  hard = createButton("HARD").size(windowWidth/5)

}

function draw() {
  
  if (z == -1) {
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    
    startup()
    
    if (mouseX > windowWidth/2-40 && mouseX < windowWidth/2+40 && mouseY > 2*windowHeight/3-30 && mouseY < 2*windowHeight/3) {
      fill("black")
      rect(windowWidth/2-55, 2*windowHeight/3-30,110,40)
      
      textSize(30)
      fill(roy, g, biv)
      text('START', windowWidth/2, 2*windowHeight/3);
      
      if (mouseIsPressed) {
        z = 0
          }
  }

  }
  
  if (z == 0){
    noStroke()
    sunflower.stop()
    how_we_roll.stop()
    firework.stop()
    prayer.stop()
    sea_shanty.stop()
    
    button.hide()
    easy.hide()
    medium.hide()
    hard.hide()
    button1.show()
    button2.show()
    button3.show()
    button4.show()
    
    load1 = 0
    button1.position(windowWidth/4-40, windowHeight/3-20);
    button1.mousePressed(bubble_pop);
  
    load2 = 0
    button2.position(windowWidth/2-40, windowHeight*2/3-20);
    button2.mousePressed(typing_music);
    
    load3 = 0
    button3.position(3*windowWidth/4-40, windowHeight/3-20);
    button3.mousePressed(fists_of_fury);
    
    button4.position(windowWidth*7/10, windowHeight*4/5);
    button4.mousePressed(startup);
    
    menu()
  }
  
  if (z == 1) {
    bubble_pop()
    button.position(20, 20);
    button.mousePressed(menu);
    
    button.show()
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    easy.hide()
    medium.hide()
    hard.hide() 
  }
  
  if (z == 2) {
    button.show()
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    easy.show()
    medium.show()
    hard.show()
    
    easy.position(windowWidth*1/10, height-40)
    medium.position(windowWidth*4/10, height-40)
    hard.position(windowWidth*7/10, height-40)
    
    easy.mousePressed(E)
    medium.mousePressed(M)
    hard.mousePressed(H)
    
    button.position(20, 20);
    button.mousePressed(menu);
    
    typing_music()
  }
  
  if (z == 3) {
    button.show()
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    
    button.position(20, 20);
    button.mousePressed(menu);
    
    spider_y = 0;
    spider_x = 0;
    
    startup3()
  }
  
  if (z == 4) {
    load1 = 0;
    game1_start()
    
  }
  
  if (z == 5) {
    easy.hide()
    medium.hide()
    hard.hide()
    game2_start()
  }
  
  if (z == 6) {
    load()
    game3_start()
  }
  
  if (z == 7){
    game3_start()
  }

}

function test(stream) {
  //program has loaded
  stream_loaded = true
}
