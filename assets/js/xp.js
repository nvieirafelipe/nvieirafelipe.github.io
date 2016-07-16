var XP = (function(module) {
  {% include_relative xp/languages.js %}
  {% include_relative xp/frameworks.js %}

  const OPTIONS = {
    responsive: true,
    scaleShowLabels: false,
    segmentStrokeWidth: 1,
    tooltipTemplate: "<%= label %>"
  }

  module.languageChart = function(element) {
    buildChart(element.getContext('2d'), languages);
  };

  module.frameworksChart = function(element) {
    buildChart(element.getContext('2d'), frameworks);
  };

  function buildChart(element, data) {
    return new Chart(element).PolarArea(data, OPTIONS);
  };

  return module;
})(XP || {});
