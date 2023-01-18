let load2 = 0;
let time = 0;

function typing_music() {
  z = 2
  background("black")
  noStroke()
  
  fill('#beffc7')
  circle(windowWidth/2,windowHeight/2 - 20,wave)
  fill('#769FB6')
  circle(windowWidth/2,windowHeight/2 - 20,wave-50)
  wave = wave + positive_negative*deltaTime/60;
  
  if (wave <= 10 || wave >= windowHeight-110|| wave >= windowWidth-50) {
      positive_negative = (-1)*positive_negative;
      }
  
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("Typing Music", windowWidth/2, height/2);
  textSize(20);
  text("Press to start", windowWidth/2, height-50);
  load2 = load2 + deltaTime
  
  if (load2 > 500){
    combo = 0
    counter = 0
    time = 0;
    }
  
}

function game2_start(){ 
  z = 5
  
  background('black');
  //set up tiles
  fill('grey')
  rect(0, 0, windowWidth/4,windowHeight)
  rect(windowWidth/2, 0, windowWidth/4, windowHeight)
  textSize(100)
  text("z    t    m   p", windowWidth/2, windowHeight/2)
  stroke('#beffc7')
  line(0, windowHeight*8/9, windowWidth, windowHeight*8/9)
  
  
  //defines object circles
  class circles {
    constructor(x,y,radius, tries, velocity){
      this._x = x
      this._y = y
      this.radius = radius; 
      this.tile_number = 1;
      this.try = -1;
      this.velocity = velocity;
    }
    
    get press() {
      //determines if user hits the right key in time
      
      if (key === 'z' && this._x == tile_1 && this._y > windowHeight*7/9 && this._y < windowHeight-20) {
        this.try = 1;
        fill('green')
        
        //fun rectangle
        rect(0, windowHeight*8/9, windowWidth/4,windowHeight)
      }   
      
      else if (key === 't' && this._x == tile_2 && this._y > windowHeight*4/5 && this._y < windowHeight-20) {
        this.try = 1;
        fill('green')
        
        //fun rectangle
        rect(windowWidth/4, windowHeight*8/9, windowWidth/4, windowHeight)
      }
      
      else if (key === 'm' && this._x == tile_3 && this._y > windowHeight*4/5 && this._y < windowHeight-20) {
        this.try = 1;
        fill('green')
        
        //fun rectangle 
        rect(windowWidth/2, windowHeight*8/9, windowWidth/4, windowHeight)
      }
      
      else if (key === 'p' && this._x == tile_4 && this._y > windowHeight*4/5 && this._y < windowHeight-20) {
        this.try = 1;
        fill('green')
        
        //fun rectangle
        rect(windowWidth*3/4, windowHeight*8/9, windowWidth, windowHeight)
      }
      
      else if (keyIsPressed) {
        this.try = 0
      }
      
      if (this._y >= windowHeight+10 && tries != 1){
        //changes to fail if user hasn't clicked yet
        if (this.try != 1){
          this.try = 0;
        }
        }
      
      return this.try;
    }   
     
    get x() {
      if (this._y >= windowHeight*13/12){
        //changes tile when neccessary
        this.tile_number = Math.ceil(random(0,4))
        switch (this.tile_number){
          case 1:
            this._x = tile_1
            break;
          case 2:
            this._x = tile_2
            break;
          case 3:
            this._x = tile_3
            break;
          case 4:
            this._x = tile_4
            break;
        }
            }
    
      return this._x;
    } 
     
    get y(){
      //changes height when neccessary
      this._y = this._y + velocity
      if (this._y >= windowHeight*7/6){
        tries = 0
        this._y = -windowHeight*1/6; 
      }
      return this._y;
    }
    
  }
  
  //declares each circle as object
  let circle_1 = new circles(tile_value1, y_value1, windowWidth/12, tries, velocity);
  let circle_2 = new circles(tile_value2, y_value2, windowWidth/12, tries, velocity);
  let circle_3 = new circles(tile_value3, y_value3, windowWidth/12, tries, velocity);
  let circle_4 = new circles(tile_value4, y_value4, windowWidth/12, tries, velocity);
  
  //changes y value for next iteration
  y_value1 = circle_1.y
  y_value2 = circle_2.y
  y_value3 = circle_3.y
  y_value4 = circle_4.y
  
  //changes tile placement for next iteration
  tile_value1 = circle_1.x
  tile_value2 = circle_2.x
  tile_value3 = circle_3.x
  tile_value4 = circle_4.x
  
  //prints circles
  fill('#769FB6')
  circle(tile_value1, y_value1, circle_1.radius)
  circle(tile_value2, y_value2, circle_2.radius)
  circle(tile_value3, y_value3, circle_3.radius)
  circle(tile_value4, y_value4, circle_4.radius)

  fill('red')
  //determines if user pressed key in time
  if (circle_1.press == 1 || circle_2.press == 1 || circle_3.press == 1 || circle_4.press == 1){
    tries = 1
    ++ counter
    fill('green')
  }
  
  else if(circle_1.press == 0 || circle_2.press == 0 || circle_3.press == 0|| circle_4.press == 0){
    counter = 0
    fill('red')
  }
  
  if (counter > combo){
    combo = counter
  }

  // displays winning or losing statement
  fill('#769FB6')
  high_score(combo, counter)
  
  if (! keyIsPressed){
    key = '`'
  }
  
  time = time + deltaTime/1000
  
  if (time > max_time){
    y_value1 = -100
    y_value2 = -100
    y_value3 = -100
    y_value4 = -100
  }
  
  if (time > max_time + 3) {
    background("black")
    textSize(50)
    text("Final score: " + combo, windowWidth/2, windowHeight/2)
  }
  
  if (time > max_time + 10){
    z = 2;
    typing_music()
  }
  
}

function high_score(combo, counter){
  textSize(20)
  fill("black")
  text("\nCurrent Score: " + counter, windowWidth/2, 0)
  text("\nBiggest Combo: " + combo, windowWidth/2, 30)
}

function E(){
  velocity = 1.4;
  prayer.play();
  
  max_time = 233
  
  y_value1 = - windowHeight/3 - 40;
  y_value2 = - windowHeight*2/3 - 40;
  y_value3 = - windowHeight - 40;
  y_value4 = - windowHeight*4/3 - 40;
  z = 5;
}

function M(){
  velocity = 3.8
  sea_shanty.play();
  
  max_time = 153
  
  y_value1 = - windowHeight/3;
  y_value2 = - windowHeight*2/3;
  y_value3 = - windowHeight;
  y_value4 = - windowHeight*4/3;
  
  z = 5
}

function H(){
  velocity = 5.7
  how_we_roll.play()
  
  max_time = 220
  
  y_value1 = - windowHeight/3;
  y_value2 = - windowHeight*2/3;
  y_value3 = - windowHeight;
  y_value4 = - windowHeight*4/3;
  
  
  
  z = 5;
}