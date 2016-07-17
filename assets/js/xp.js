var XP = (function(module) {
  {% include_relative xp/languages.js %}
  {% include_relative xp/frameworks.js %}

  const OPTIONS = {
    legend: { display: false },
    scale: { ticks: { min: 0, display: false } },
    elements: { arc: { borderWidth: 1 } },
    tooltips: {
      callbacks: {
        label: function(item, data) {
          return data.labels[item.index];
        }
      }
    }
  }

  module.languageChart = function(element) {
    buildChart(element.getContext('2d'), languages);
  };

  module.frameworksChart = function(element) {
    buildChart(element.getContext('2d'), frameworks);
  };

  function buildChart(element, data) {
    var chart = new Chart(element, {
      type: 'polarArea',
      data: buildData(data),
      options: OPTIONS
    });
    return chart;
  };

  function buildData(data) {
    var chartData = {
      datasets: [
        {
          data: data.map(function(item) { return item.value; }),
          backgroundColor: data.map(function(item) { return item.color; }),
        }
      ],
      labels: data.map(function(item) { return item.label; })
    }

    return chartData;
  };

  return module;
})(XP || {});
