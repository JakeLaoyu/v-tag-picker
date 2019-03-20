<template>
  <div class="demo">
    <div class="title">v-tag-picker</div>
    <h3 class="subtitle">🦴 A cool mobile component of tag picker width vue.js
      <a href="https://github.com/JakeLaoyu/v-tag-picker">Github</a>
    </h3>
    <p>
      <a href="https://www.npmjs.com/package/v-tag-picker" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/6d568bc6b16ff3247b8880e521e9e4522d9b6e55/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f762d7461672d7069636b65722e7376673f7374796c653d666c61742d737175617265"
          alt="npm"
          data-canonical-src="https://img.shields.io/npm/v/v-tag-picker.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
      <a href="https://www.npmjs.com/package/v-tag-picker" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/ad71ecec36373d405abafeaa803280587bec9c60/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f762d7461672d7069636b65722e7376673f7374796c653d666c61742d737175617265"
          alt="npm"
          data-canonical-src="https://img.shields.io/npm/dt/v-tag-picker.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
      <a href="https://github.com/jakelaoyu/v-tag-picker/blob/master/LICENSE">
        <img
          src="https://camo.githubusercontent.com/b1ee47e981370879d7d1f5e30947cff1b0de5d85/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f762d7461672d7069636b65722e7376673f7374796c653d666c61742d737175617265"
          alt="npm"
          data-canonical-src="https://img.shields.io/npm/l/v-tag-picker.svg?style=flat-square"
          style="max-width:100%;"
        >
      </a>
    </p>
    <div class="demo__container">
      <div class="demo__code">
        <pre v-highlightjs>
          <code class="vue">
&lt;template&gt;
  &lt;v-tag-picker
    :totalData="tagData"
    :selectedData="selectedData"
    @change="change"
  &gt;
    &lt;div class="img-wrap" slot="top"&gt;
      &lt;img class="" src="~@/assets/tagbg.png" alt=""&gt;
      &lt;div class="img-wrap__title"&gt;最感兴趣的栏目&lt;/div&gt;
      &lt;div class="img-wrap__subtitle"&gt;定制专属于我的课程栏目&lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="footer" slot="footer"&gt;
      &lt;a href="#"&gt;进入首页&lt;/a&gt;
    &lt;/div&gt;
  &lt;/v-tag-picker&gt;
&lt;/template&gt;

&lt;script&gt;
import { vTagPicker } from 'v-tag-picker'
export default {
  name: 'app',
  components: {
    vTagPicker
  },
  data () {
    return {
      tagData: Array.from(new Array(100), (val, index) => ({ name: `${index}` })),
      selectedData: Array.from(new Array(2), (val, index) => ({ name: `${index}` }))
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
      </div>

      <div class="demo__iframe">
        <iframe src="#test" frameborder="0"></iframe>
      </div>
    </div>
    <canvas id="Evan"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // 彩带
    // 初始化变量
    let c = document.getElementsByTagName('canvas')[0]
    let x = c.getContext('2d')
    let pr = window.devicePixelRatio || 1 // 设置像素比
    let w = window.innerWidth
    let h = window.innerHeight
    let f = 90
    let q
    let m = Math
    let r = 0
    let u = m.PI * 2 // Math.PI*2
    let v = m.cos // 余弦值
    let z = m.random // 随机数值
    c.width = w * pr // 设置 Canvas 宽度为可视窗口的宽度*像素比
    c.height = h * pr // 设置 Canvas 高度为可视窗口的高度*像素比
    x.scale(pr, pr) // 缩放 Canvas pr = 1 = 100%
    x.globalAlpha = 0.6 // 设置 Canvas 透明度
    // 循环函数
    function i () {
      x.clearRect(0, 0, w, h) // 清空矩形
      // 数组变量对象
      q = [{
        x: 0,
        y: h * 0.7 + f
      }, {
        x: 0,
        y: h * 0.7 - f
      }]
      // 循环，0 < 可视窗口宽度+90
      while (q[1].x < w + f) {
        d(q[0], q[1]) // 绘制函数传参
      }
    }
    // 绘制函数传参，i 和 j 均有一个 x 与 y 数值对象
    function d (i, j) {
      x.beginPath() // 开始路径
      x.moveTo(i.x, i.y) // 移动路径
      x.lineTo(j.x, j.y) // 创建线条
      var k = j.x + (z() * 2 - 0.25) * f // 重新定义数组对象 q[1] 的变量对象，z() 随机数值
      var n = y(j.y) // 将 y() 传参函数赋值给 n
      x.lineTo(k, n) // 创建线条
      x.closePath() // 关闭路径
      r -= u / -50
      // 填充颜色，toString(16)转换为16进制颜色值
      // 关于（<< 与 |）位运算操作参考：http://www.w3school.com.cn/js/pro_js_operators_bitwise.asp
      x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(
        16)
      x.fill()
      // 重新定义数组对象，增加无限可变性
      q[0] = q[1]
      q[1] = {
        x: k,
        y: n
      }
    }
    // 传参函数 return 返回数值
    function y (p) {
      var t = p + (z() * 2 - 1.1) * f // z() 随机数值
      return (t > h || t < 0) ? y(p) : t // 判断后返回不同数值后增加了更多的可变性
    }
    // 点击与触摸时执行 i() 函数
    document.onclick = i
    i()
  }
}
</script>
<style scoped lang="less">
#Evan {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.demo {
  &__container {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
}

.hljs {
  border: 1px solid #eee;
  width: 414px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: left;
  max-width: 90%;
  font-size: 13px;
}
iframe {
  border: 1px solid #eee;
  display: inline-block;
  width: 414px;
  height: 736px;
  margin: 0 auto;
}
.title {
  font-size: 45px;
  color: #42b983;
}
.subtitle {
  a {
    color: #42b983;
  }
}
</style>
