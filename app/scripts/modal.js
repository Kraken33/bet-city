import $ from 'jquery'

export default function () {
  $('.button-modal').click(function () {
    $('.modal-wrap').css('z-index', '8')
    $('.modal-wrap').animate({
      opacity: 1
    }, 500)
  })
  $('.modal-window__close').click(function () {
    $('.modal-wrap').animate({
      opacity: 0
    }, 500, function () {
      $('.modal-wrap').css('z-index', '0')
    })
  })
}
