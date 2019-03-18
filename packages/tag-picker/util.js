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

export const sleep = (time) => {
  /* eslint-disable */
  return new Promise(reslove => {
    setTimeout(() => {
      reslove()
    }, time)
  })
}
