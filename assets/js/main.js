---
---
{% include_relative header.js %}
{% include_relative xp-data.js %}

var buildChart = (context, data) => {
  var options = {
    responsive: true,
    scaleShowLabels: false,
    segmentStrokeWidth: 1,
    tooltipTemplate: "<%= label %>"
  }
  new Chart(context).PolarArea(data, options)
}

var languageChart = $("#language-chart").get(0);
var frameworkChart = $("#frameworks-chart").get(0);

if (languageChart) {
  buildChart(languageChart.getContext("2d"), languageData);
}

if (frameworkChart) {
  buildChart(frameworkChart.getContext("2d"), frameworksData);
}
