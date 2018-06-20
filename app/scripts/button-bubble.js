export default function () {
  var bubblyButtons = document.getElementsByClassName('bubbly-button')

  for (let item of bubblyButtons) {
    item.onmouseover = function (e) {
      // reset animation
      item.classList.remove('animate')

      item.classList.add('animate')
      setTimeout(function () {
        item.classList.remove('animate')
      }, 700)
    }
  }
}
