/**
 * 节流函数
 * @param {Function} fun 要执行的函数
 * @param {Number} delay 延迟
 * @param {Number} time time时间内，必需执行一次
 */
export const throttle = (fun, delay, time) => {
  let timeout

  let startTime = new Date()

  return function () {
    let context = this

    let args = Array.prototype.slice.call(arguments)

    let curTime = new Date()

    clearTimeout(timeout)
    if (curTime - startTime >= time) {
      // 如果达到了规定的触发时间间隔，触发 handler
      fun.apply(context, args)
      startTime = curTime
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = setTimeout(function () {
        fun.apply(context, args)
      }, delay)
    }
  }
}

/**
 * 去抖
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 延迟时间
 */

export const debounce = (fn, delay) => {
  let timer = null

  return function () {
    // 通过 'this' 和 'arguments'
    // 获得函数的作用域和参数
    let context = this
    let args = Array.prototype.slice.call(arguments)
    // 如果事件被触发，清除 timer 并重新开始计时
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 睡眠函数
 * @param {Number} time 时间/ms
 */
export const sleep = (time) => {
  /* eslint-disable */
  return new Promise(reslove => {
    setTimeout(() => {
      reslove()
    }, time)
  })
   /* eslint-enable */
}
