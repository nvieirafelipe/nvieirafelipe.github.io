import $ from 'jquery'
import Background from 'nvieirafelipe/background'
import { languageChart, frameworkChart } from 'nvieirafelipe/xp'
import Sticky from 'nvieirafelipe/sticky'

import main from '../sass/main.sass'

$(document).ready(() => {
  let background = new Background()

  languageChart(document.getElementById('language-chart'))
  frameworkChart(document.getElementById('framework-chart'))

  let sticky = new Sticky('[sticky]', '.timeline', '.who-spacer')

  $(window).on('scroll resize', () => sticky.update())
})
