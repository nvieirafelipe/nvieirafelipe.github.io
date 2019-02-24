import $ from 'jquery';

export default class Sticky {
  constructor(sticky, timeline, spacer) {
    this.sticky = $(sticky)
    this.timeline = $(timeline)
    this.spacer = $(spacer)
  }

  update() {
    if(exceedsThreshold(this.spacer)) {
      this.sticky.css('left', leftPosition(this.timeline))
      this.sticky.css('width', this.sticky.outerWidth())
      this.sticky.addClass('sticky')
    }
    else {
      this.sticky.removeClass('sticky')
      this.sticky.css('left', '')
      this.sticky.css('width', '')
    }
  }
}

function exceedsThreshold(spacer) {
  return $(window).scrollTop() > yThreshold(spacer) &&
    window.innerWidth > 640
}

function yThreshold(spacer) {
  return spacer.offset()['top'] + spacer.outerHeight(true) - 25
}

function leftPosition(timeline) {
  return timeline.offset()['left'] + timeline.outerWidth()
}
