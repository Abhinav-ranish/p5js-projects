
function handAI(open_close) {
  //figures out frame rate: best to be above 10 fps
  if (total_sum > 1000) {
    //console.log("Frames rate", frames_processed)
    frame_rate = frames_processed
    total_sum = 0
    frames_processed = 0
  }
  
  else {
    frames_processed += 1
    total_sum += deltaTime
  }
  
  if(frame_rate<6){
    load()
    z = 7
  }
  
  else{
    image(capture, windowWidth/4, windowHeight/4);
  }
   
  //after everything has loaded, run hand program
  if (stream_loaded && started) {
    const  estimationConfig = {flipHorizontal: false};
   detector.estimateHands(capture.elt, estimationConfig).then (hands =>
                                                                              {
      //wait for fifteen before loading hands to prevent glitches 
    if (count == 15) {
      old_hands = hands
      count = 0
    }
    else{
      count += 1
    }

    //calls function to see if hand is open or not
    open_close = draw_circle(hands,open_close)
    //print(open_close.state, 1);
    return open_close
    })
    }
  return open_close;
}

function draw_circle(hands, open_close) {
  if (hands){
    open_close.set_state("open")
  }
  else {
    open_close.set_state("idle")
  }

//   return new Open_Close(open_close.state, "open")
  
  for (i = 0; i < hands.length; i++) {  
    distance = (-hands[i].keypoints[17].x + hands[i].keypoints[2].x)*(7/5)
    
    if (hands[i].keypoints[0].y-hands[i].keypoints[7].y < distance && hands[i].keypoints[0].y-hands[i].keypoints[11].y < distance && hands[i].keypoints[0].y-hands[i].keypoints[15].y < distance && hands[i].keypoints[0].y-hands[i].keypoints[19].y < distance){
      open_close.set_state("close")
        }
   }
  return open_close;
}