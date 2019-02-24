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

export default OPTIONS
