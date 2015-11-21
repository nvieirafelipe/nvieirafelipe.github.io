var updateBackground = () => {
  var numberOfBg = 5;
  var imageNumber = Math.floor(Math.random() * (numberOfBg)) + 1;
  var headerGradient = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(9, 113, 178, 0.25))';
  var headerImage = 'url("../assets/images/backgrounds/bg-0'+imageNumber+'.jpg")';

  $('header').css('background-image', headerImage);
}

$(document).ready(() => {
  window.setInterval(() => {
    updateBackground()
  }, 5000);
});
