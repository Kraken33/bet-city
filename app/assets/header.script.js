import { TweenLite, TimelineLite } from 'gsap'

export default function () {
  var tl = new TimelineLite()

  var textCenter = document.getElementsByClassName('header-center')[0]
  var textBefore = document.getElementsByClassName('header-before')[0]
  var textAfter = document.getElementsByClassName('header-after')[0]
  var headerImage = document.getElementsByClassName('header-image')[0]
  var headerImage2 = document.getElementsByClassName('header-image2')[0]
  var topImg = document.getElementsByClassName('header-top-img')[0]

  tl.add(TweenLite.fromTo(textCenter, 0.9, { y: 100, opacity: 0 }, {y: 0, opacity: 1}))
  tl.add(TweenLite.fromTo(topImg, 0.9, { y: 100, opacity: 0 }, {y: 0, opacity: 1}))
  tl.add(TweenLite.fromTo(textBefore, 0.5, { y: 100, opacity: 0 }, {y: 0, opacity: 1}), TweenLite.fromTo(textAfter, 1.1, { y: 100, opacity: 0 }, {y: 0, opacity: 1}))
  tl.add(TweenLite.fromTo(headerImage2, 0.6, { y: 100, opacity: 0 }, {y: 0, opacity: 1}), TweenLite.fromTo(headerImage, 0.6, { y: 100, opacity: 0 }, {y: 0, opacity: 1}))
}
