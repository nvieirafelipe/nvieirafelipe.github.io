var updateBackground = function() {
  var numberOfBg = 5;
  var imageNumber = Math.floor(Math.random() * (numberOfBg)) + 1;
  var headerImage = 'url("/assets/images/backgrounds/bg-0'+imageNumber+'.jpg")';

  $('header').css('background-image', headerImage);
}

$(document).ready(function() {
  window.setInterval(function() {
    updateBackground()
  }, 5000);
});
