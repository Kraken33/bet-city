import Tilt from 'vanilla-tilt'

export default function () {
  for (let item of document.getElementsByClassName('item')) {
    Tilt.init(item, {
      max: 25,
      speed: 400,
      scale: 1.1
    })
  }
}
