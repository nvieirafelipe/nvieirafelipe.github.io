var Sticky = (function(module) {
  module.update = function(sticky, timeline, spacer) {
    if(exceedsThreshold(spacer)) {
      sticky.css('left', leftPosition(timeline));
      sticky.css('width', sticky.outerWidth());
      sticky.addClass('sticky');
    }
    else {
      sticky.removeClass('sticky');
      sticky.css('left', '');
      sticky.css('width', '');
    }
  };

  function exceedsThreshold(spacer) {
    return $(window).scrollTop() > yThreshold(spacer) &&
      window.innerWidth > 640;
  };

  function yThreshold(spacer) {
    return spacer.offset()['top'] + spacer.outerHeight(true) - 25;
  };

  function leftPosition(timeline) {
    return timeline.offset()['left'] + timeline.outerWidth();
  };

  return module;
})(Sticky || {});
