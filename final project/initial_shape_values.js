function initial_shape_values(){
  object_holder = [0,0,0,0,0,0,0,0,0,0];
  counter = 0
  
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
  
  for (i=0; i<10; ++i){
    x1 = random_spacex()
    y1 = random_spacey()
    change1 = [random_boolean(), random_boolean()]
    radius1 = random_radius()
    
    let object1 = new shape(x1, y1, radius1, change1, counter);
    
    counter = object1.explosion[1]
    
    object_holder[i] = object1
    circle(x1, y1, radius1)
  }
  
  return object_holder
}

function random_spacey(){
  y_value = Math.ceil(random(1,windowHeight))
  return y_value
}

function random_spacex(){
  x_value = Math.ceil(random(1,windowWidth))
  return x_value
}

function random_boolean(){
  number = Math.ceil(random(0,2))
  
  switch (number){
    case 0:
      return true
      break;
    case 1:
      return false;
      break;
  }
}

function random_radius(){
  return random(windowWidth/10,windowWidth/4)
}