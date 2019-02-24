import Chart from 'chart.js'

import options from 'nvieirafelipe/xp/options'
import languages from 'nvieirafelipe/xp/languages'
import frameworks from 'nvieirafelipe/xp/frameworks'

export function languageChart (element) {
  buildChart(element.getContext('2d'), languages)
}

export function frameworkChart (element) {
  buildChart(element.getContext('2d'), frameworks)
}

function buildChart (element, data) {
  return new Chart(element, {
    type: 'polarArea',
    data: buildData(data),
    options: options
  })
}

function buildData (data) {
  return {
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
      }
    ],
    labels: data.map((item) => item.label)
  }
}
