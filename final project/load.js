let dots = '';
let loading = 0;

function load() {
  background("black")
  textSize(30)
  fill("white")
  text('LOADING', 80, height-40)
  textSize(60)
  
  if (loading < 1) {
    dots = ''
  }
  else if (loading < 2) {
    dots = '.'
  }
  else if (loading < 3){
    dots = '..'
  }
  else if (loading < 4){
    dots = '...'
  }
  else {
    loading = 0
  }
  
  
  text(dots, 180, height-40)
  loading = loading + 1*(deltaTime/1000)
  
  
}