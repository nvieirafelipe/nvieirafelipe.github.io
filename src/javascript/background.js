import $ from 'jquery'

export default class Background {
  constructor() {
    setInterval(() => this.update(), 5000)
  }

  update() {
    var numberOfBg = 5
    var imageNumber = Math.floor(Math.random() * (numberOfBg)) + 1

    $('header').removeClass('bg-0' + (imageNumber - 1));
    $('header').addClass('bg-0' + imageNumber);
  }
}
