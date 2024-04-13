$(document).ready(function() {
    var audio = document.getElementById('minos');
    audio.volume = 0.2;

});

function changeBackgroundImage() {
  var audio = document.getElementById('minos');
  audio.volume = 0.5;
  document.querySelector('body').style.backgroundImage = "url('cr2.jpg')";
  document.getElementByClass('span').style.display = "none";
}

function couloir(){ 
  window.location.pathname = 'creepy.html';
}

function src(){
  window.location.pathname = 'sources.html';
}