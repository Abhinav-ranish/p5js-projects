function color_change(roy, g, biv) {
  //changes if red is at max
  if (roy == 255 && x == 0) {
    if (g != 255 && biv == 0) {
     g = g + 1;
   }
    else if (biv != 0) {
     biv = biv - 1; 
   }
    else {
      x = 1;
    }
  }

  //changes if green is at max
  if (g == 255 && x == 1) {
    if (roy != 0) {
     roy = roy - 1; 
   }
    else if (biv != 255) {
     biv = biv + 1; 
   }
    else {
      x = 2;
    }
  }

  //changes if blue is at max
  if (biv == 255 && x == 2) {
    if (g != 0) {
     g = g - 1; 
    }
    else if (roy != 255) {
     roy = roy + 1; 
    }
    else {
      x = 0
    }
  }
   return [roy, g, biv];
}