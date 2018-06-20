import FClock from 'flipclock'
import $ from 'jquery'

export default function () {
  var clock = new FClock($('.flipclock'))
  console.log(clock)
}
