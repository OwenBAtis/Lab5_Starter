// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //Variable Access
  const audio = document.querySelector("audio");
  const img = document.querySelector("img");
  const div = document.getElementById("volume-controls"); 
  const icon = document.querySelector("div img");

  //Input Variables
  const button = document.querySelector("button");
  const select = document.getElementById("horn-select");
  const input = document.querySelector("input");

  //confetti
  const jsConfetti = new JSConfetti();
  
  //Event Listeners
  button.addEventListener("click", playSound => {
    if(audio.getAttribute("src") != ""){
      if(img.src = '../assets/images/party-horn.svg'){
        jsConfetti.addConfetti(); 
      }
      audio.play(); 
    }
  });

  select.addEventListener("change", (event) => {
      audio.src = '../assets/audio/' + event.target.value + '.mp3';
      img.src = '../assets/images/' + event.target.value + '.svg';
  });

  input.addEventListener("input", (event) => {
    audio.volume = event.target.value / 100;
  }); 

  icon.addEventListener("load", () => {
    if(audio.volume <= 0){
      icon.src =  '../assets/icons/volume-level-0.svg';
    }
    else if(audio.volume >= 0.1 && audio.volume <= 0.32){
      icon.src =  '../assets/icons/volume-level-1.svg';
    }
    else if(audio.volume >= 0.33 && audio.volume <= 0.66){
      icon.src =  '../assets/icons/volume-level-2.svg'; 
    }
    else{
      icon.src =  '../assets/icons/volume-level-3.svg';
    }
  });

}