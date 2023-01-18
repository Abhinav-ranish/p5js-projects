let load3 = 0;
let spider_y1 = 0
let spider_y2 = 0
let spider_y3 = 0
let spider_y4 = 0
let spider_y5 = 0
let spider_y6 = 0
let score = 0
let stop = false
let open_close = undefined

var myPromise = new Promise(
  function(resolve, reject){
    // resolve the promise after 1 second
    setTimeout(resolve, 1000)
  }
);

//variables for handAI
count = 0
started = false
let stream_loaded = false

async function fists_of_fury() {
  open_close = new Open_Close("idle", "open")
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER)
  
  total_sum = 0
  frames_processed = 0
  frameRate(10)
  
  //starts HandAI
    while (! started) {
      load()
      //loading video
      capture = createCapture(VIDEO, test)
      capture.size(windowWidth/2,windowHeight/2)
      capture.hide()
      
      //loads program: detector model
      const modeler = handPoseDetection.SupportedModels.MediaPipeHands;

      const detectorConfig = {
        runtime: 'tfjs',
    };
      
      detector = await handPoseDetection.createDetector(modeler, detectorConfig);
      
      //program starts after everything has loaded
      started = true
  }
  startup3();
  z = 3
}

function startup3() {
  z = 3  
  background("black")
  
  let blood1 = new blood(0, spider_y1, 6)
  let blood2 = new blood(width/6, spider_y2, 8)
  let blood3 = new blood(width/3, spider_y3, 10)
  let blood4 = new blood(width/2, spider_y4, 5)
  let blood5 = new blood(width*2/3, spider_y5, 14)
  let blood6 = new blood(width*5/6, spider_y6, 6)
  
  spider_y1 = blood1.falling()
  spider_y2 = blood2.falling()
  spider_y3 = blood3.falling()
  spider_y4 = blood4.falling()
  spider_y5 = blood5.falling()
  spider_y6 = blood6.falling()
       

  fill('yellow')
  textAlign(CENTER);
  textFont(fontBold)
  text("FISTS OF FURY", width/2, height/2);
  
  textSize(40);
  fill('red')
  text("Halloween Edition", width/2, height/2 +50);
  
  textSize(50);
  fill('lightgreen')
  text("Press to start", width/2, height-50);
  
  load3 = load3 + deltaTime;
  
  if (mouseIsPressed && load3 > 500){
    z = 6
    counter3 = 0
    time3 = 0
    load()
    jeopardy.play()
  }
  
}

function game3_start(){
  z = 7
  background(0, 0, 100)

  //background
  fill(150, 0, 0)
  circle(0, 0, windowWidth/2)
  circle(0, windowHeight, windowWidth/2)
  circle(windowWidth, 0, windowWidth/2)
  circle(windowWidth, windowHeight, windowWidth/2)
  
  fill(0, 0, 100)
  circle(0, 0, windowWidth/4)
  circle(0, windowHeight, windowWidth/4)
  circle(windowWidth, 0, windowWidth/4)
  circle(windowWidth, windowHeight, windowWidth/4)

  blend(sparkles, 0, 0, windowWidth, windowHeight, 0, 0, windowWidth, windowHeight, SOFT_LIGHT)
  
  //variable determiner
  state = "idle"
  open_close = handAI(open_close)
  state = open_close.state;
  
  //game time stuff
  textFont('Georgia')
  
  if (time3 < 218){
    open_close.set_prompt()
    counter3 = 0
    textSize(20)
    fill("white")
    text("Raise your hand", windowWidth/2, windowHeight/6)
    text("Prepare to open and close your fist", windowWidth/2, windowHeight*5/6)
  }
  
  else if (time3 % 44 == 0){
    open_close.set_prompt()
    counter3 = 0
    stop = false
  }
  
  else if (time3 < 1144){
    textFont('Times New Roman')
    fill("white")
    text(score, 70, 70)
  }
  
  if (time3 >= 1144 && time3 < 1250){
    background("black")
    fill("white")
    text("Score: " + score + " out of 20", windowWidth/2, windowHeight/2)
  }
  
  if (time3 >= 1250){
    startup3()
    z = 3;
  }
  
  time3 = time3 + 1;
  
  
  //game score stuff
  if (time3 < 1144 && time3 > 220){
    if (counter3 >= 30){
      counter3 = 0
      ++score
      stop = true
    }
    else if (state == open_close.prompt && stop == false){
      ++counter3
    }
    textSize(50)
    text(open_close.prompt, windowWidth/2, 100)
    fill("white")
    rect(windowWidth/3, windowHeight*7/8, counter3*5, 30)
    noFill()
    stroke(50)
    rect(windowWidth/3, windowHeight*7/8, 30*5, 30)
    noStroke()
    
  }
  
  
  //starts program after load
  if (! jeopardy.isPlaying()){
    if (! sunflower.isPlaying()){
      sunflower.play()
    }
  }
  else{
    load()
    time3 = 0
    score = 0
  }

}

class blood{
  constructor(spider_x, spider_y, velocity){
    this.spider_y = spider_y;
    this.spider_x = spider_x;
    this.velocity = velocity;
  }
  
  falling(){
    this.spider_y = this.spider_y + this.velocity;
    fill('red')
    noStroke()
    
    ellipse(50 + this.spider_x,0 + this.spider_y + 5,6)
    ellipse(50 + this.spider_x,10 + this.spider_y,10)
  if(this.spider_y>windowHeight){
    this.spider_y = 0
           }
  return this.spider_y;
  }
  
}
