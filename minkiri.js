var sounds = (function () {
  return {
    MIN : new Audio("minminzemi-cry1.mp3"),
    KIRI: new Audio("teleogryllus-emma-cry1.mp3")
  };
})();

window.onload = function() {
  var hour = (new Date()).getHours();
  var sound;
  var filter = document.getElementById('filter');
  if(hour >= 6 && hour <= 18){
    sound = sounds.MIN;
    filter.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    sound = sounds.KIRI;
    filter.style.backgroundColor = "rgba(0,0,0,0.9)";
  }
  sound.loop = true;
  sound.volume = 0.01;
  sound.play();
};
