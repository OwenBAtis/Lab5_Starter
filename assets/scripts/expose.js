// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.querySelector("button");
  const audio = document.querySelector("audio");
  const select = document.getElementsByClassName("select");

  button.addEventListener("click", playSound => {
    audio.play(); 
  });
  
}