let load1 = 0;
let radius = 50
var mySound;

function bubble_pop() { 
  z = 1
  delay = 0
  time1 = 0;
  counter = 0;
  background('rgb(246,215,231)');
  fill(255)
  textSize(60);
  textAlign(CENTER)
  fill('hotpink')
  text("Bubble Pop", width/2, height/2);
  textSize(25);
  text("Press to start", width/2, height-100);
  
  object_mover()
  
  if (mouseIsPressed && load1 > 500) {
    z = 4
    fill("hotpink")
    firework.play()
    object_holder = initial_shape_values()
    game1_start()
  }
  
  load1 = load1 + deltaTime
}


function game1_start() {
  z = 4
  
  background(20);
  if (time1 < 3){
    text("Get ready", windowWidth/2, windowHeight/2)
  }
  else if (time1 < 4){
    text("5", windowWidth/2, windowHeight/2)
  }
  
  else if (time1 < 5){
    text("4", windowWidth/2, windowHeight/2)
  }
  
  else if (time1 < 6){
    text("3", windowWidth/2, windowHeight/2)
  }
  
  else if (time1 < 7){
    text("2", windowWidth/2, windowHeight/2)
  }
  
  else if (time1 < 8){
    text("1", windowWidth/2, windowHeight/2)
  }
  
  else if (time1 < 155){
      object_mover()
      text(counter, windowWidth/2, 50) 
  }
  
  if (counter == 10){
    firework.stop()
    background("rgb(246,215,231)")
    fill("hotpink")
    text("SUCCESS!\nTime: "+ round((time1 - 8),2) + " seconds", windowWidth/2, windowHeight/2)
    textSize(30)
    ++delay;
    if (delay > 500){
      z = 1
      object_holder = initial_shape_values()
      bubble_pop()
    }
  }
  
  else if (time1 > 155){
    firework.stop()
    background("rgb(246,215,231)")
    fill("hotpink")
    text("Better luck next time!", windowWidth/2, windowHeight/2)
    if (time1 > 165){
      z = 1
      object_holder = initial_shape_values()
      bubble_pop()
    }
  }
  
  else {
    time1 = time1 + deltaTime/1000
  }
}

function object_mover(){
  //defines all objects
  class shape{
    constructor(object_x, object_y, radius, change, counter){
      this._radius = radius
      this._object_y = object_y
      this._object_x = object_x
      this._change = change
    }
    
    get object_x(){
      if (this._change[0]){
       this._object_x = this._object_x + 1;
     }
      if (! this._change[0]){
        this._object_x = this._object_x - 1;
    }
      return this._object_x;
 
    }
    
    get object_y(){
      if (this._change[1]){
        this._object_y = this._object_y + 1;
      }
      if (! this._change[1]){
        this._object_y = this._object_y - 1;
      }
      return this._object_y
    }
    
    get change(){
      if (this._object_y==0){
        this._change[1] = true;
      }
      if (this._object_x==0){
        this._change[0] = true;
      }
      if (this._object_y==windowHeight){
        this._change[1] = false;
      }
      if (this.object_x== windowWidth){
        this._change[0] = false;
      }
      return this._change;
    }
    
    get explosion(){
      if(mouseX < this._object_x + this._radius/2 && mouseX > this._object_x - this._radius/2 && mouseY < this._object_y + this._radius/2 && mouseX > this._object_y - this._radius/2 && mouseIsPressed){
        if(this._radius < 600){
          fill('hotpink')
          this._radius = this._radius + 10
          if(this._radius < 550 && this._radius >500){ 
            bomb.play()
          }
      }
      else {
        this._radius = 0
        ++ counter;
      }
  }
      return [this._radius,counter];
    }
  } 
  
  // changes variables for each run
  for (i=0; i<10; ++i){
    x1 = object_holder[i].object_x
    y1 = object_holder[i].object_y
    change1 = object_holder[i].change
    radius1 = object_holder[i].explosion[0]
    
    let object1 = new shape(x1, y1, radius1, change1, counter);
    counter = object1.explosion[1]
    
    object_holder[i] = object1
    circle(x1, y1, radius1)
  }


}
