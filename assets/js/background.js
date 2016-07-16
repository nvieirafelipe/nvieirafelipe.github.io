var Background = (function(module) {
  module.start = function() {
    setInterval(function() {
      update();
    }, 5000);
  };

  function update() {
    var numberOfBg = 5;
    var imageNumber = Math.floor(Math.random() * (numberOfBg)) + 1;
    var headerImage = 'url("/assets/images/backgrounds/bg-0'+imageNumber+'.jpg")';

    $('header').css('background-image', headerImage);
  };

  return module;
})(Background || {});
