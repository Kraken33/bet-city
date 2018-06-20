import $ from 'jquery'

export default function () {
  $('#btn-result').click(function () {
    $('html, body').animate({
      scrollTop: $('#clock').offset().top
    }, 1000)
  })
}
