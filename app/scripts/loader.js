import { TweenLite, TimelineLite } from 'gsap'
import Header from './../assets/header.script'

export default function () {
  var tl = new TimelineLite()

  var loaderWrap = document.getElementsByClassName('loader-wrap')[0]
  var header = document.getElementsByTagName('header')[0]
  //   var loader = document.getElementsByClassName('loader')[0]
  document.body.style['overflow-y'] = 'scroll'

  tl.add(TweenLite.fromTo(loaderWrap, 0.9, { y: '0', opacity: 1 }, {y: '-100%', opacity: 0}), TweenLite.fromTo(header, 0.9, { y: '100%' }, {y: '0%'}))
  setTimeout(Header, 900)
//   tl.add(TweenLite.fromTo(textBefore, 0.5, { y: 100, opacity: 0 }, {y: 0, opacity: 1}), TweenLite.fromTo(textAfter, 1.1, { y: 100, opacity: 0 }, {y: 0, opacity: 1}))
}
