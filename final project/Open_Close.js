class Open_Close{
  constructor(state, prompt) {
    this.state = state;
    this.prompt = prompt;
  }
  set_state(state){
    this.state = state;
  }
  flip(){
    print(this.state, "inside flip")
    if (this.state == "open"){
      this.state = "close"
    }
    else if (this.state == "close"){
      this.state = "open"
    }
  }

  set_prompt(){
    if (this.prompt == "open"){
      this.prompt = "close"
    }
    else if (this.prompt == "close"){
      this.prompt = "open"
    }
  }

}