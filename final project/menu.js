function menu () {
  z = 0
  background(roy,g,biv);
  roy = color_change(roy, g, biv)[0];
  g = color_change(roy, g, biv)[1];
  biv = color_change(roy, g, biv)[2];
  
  fill("grey")
  rect(50, 25, windowWidth-100, windowHeight-50, 10);
  
  tint(roy, g, biv);
  image(music, 50, 25, 75, 75);
  image(music, 90, 75, 30, 30);
  image(music, windowWidth-130, windowHeight-110, 75, 75);
  image(music, windowWidth-90, windowHeight-60, 30, 30);
  
  textSize(35);
  tint(roy, g, biv);
  fill("black")
  text('MENU', windowWidth/2, 100);
  fill(roy, g, biv);
  text('MENU', windowWidth/2-2, 99);
  textFont('Helvetica') 
}