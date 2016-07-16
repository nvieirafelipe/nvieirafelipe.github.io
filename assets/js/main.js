---
---
{% include_relative background.js %}
{% include_relative xp.js %}
{% include_relative sticky.js %}

$(document).ready(function() {
  Background.start();

  XP.languageChart($('#language-chart').get(0));
  XP.frameworksChart($('#frameworks-chart').get(0));

  var sticky = $('[sticky]');
  var timeline = $('.timeline');
  var spacer = $('.who-spacer');
  $(window).on('scroll resize', function(e) {
    Sticky.update(sticky, timeline, spacer);
  });
});
