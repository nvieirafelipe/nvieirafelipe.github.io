var Sticky = (function(module) {
  module.update = function(sticky, timeline, spacer) {
    if(exceedsThreshold(spacer)) {
      sticky.addClass('sticky');
      sticky.css('left', leftPosition(timeline));
    }
    else {
      sticky.removeClass('sticky');
      sticky.css('left', '');
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
