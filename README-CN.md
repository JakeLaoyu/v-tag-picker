# v-tag-picker

一个酷酷移动端标签选择器 [ENG DOC](https://github.com/JakeLaoyu/v-tag-picker/blob/master/README.md)

[![npm](https://img.shields.io/npm/v/v-tag-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-tag-picker)
[![npm](https://img.shields.io/npm/dt/v-tag-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-tag-picker)
[![npm](https://img.shields.io/npm/l/v-tag-picker.svg?style=flat-square)](https://github.com/jakelaoyu/v-tag-picker/blob/master/LICENSE)

# Introduction

[DEMO](https://jakelaoyu.github.io/v-tag-picker/demo/#/demo)

# Screenshot

![](https://blogimg.jakeyu.top/v-tag-picker/screenshot-3.gif)

# Install

```sh
npm i v-tag-picker -S
```

# Usage

```js
// 全局引用
import vTagPicker from 'v-tag-picker'

Vue.use(vTagPicker)

// 组件内引用
import { vTagPicker } from 'v-tag-picker'

components: {
  vTagPicker
}
```

```html
<v-tag-picker
  :totalData="tagData"
  :selectedData="selectedData"
  @change="change"
>
  <div class="img-wrap" slot="top">
    <img class="" src="~@/examples/assets/tagbg.png" alt="">
    <div class="img-wrap__title">最感兴趣的栏目</div>
    <div class="img-wrap__subtitle">定制专属于我的课程栏目</div>
  </div>

  <div class="footer" slot="footer">
    <a href="/">进入首页</a>
  </div>
</v-tag-picker>
```

# Props

| Name              | Type   | Default | Description                                   |
| ----------------- | ------ | ------- | --------------------------------------------- |
| zIndex            | Number |         | 选择器`z-index`样式                           |
| totalData         | Array  | []      | 列表数据，必需有`name`字段。[{ name: 'tag' }] |
| selectedData      | Array  | []      | 已选择列表                                    |
| animationDuration | Number | 500     | 动画时间(ms).                                 |
| OnlyKey           | String | name    | 数据唯一值的 key                              |

# Events

| Name   | Description        | return   |
| ------ | ------------------ | -------- |
| change | 已选数据改变时触发 | 已选数据 |

# slot

| Name   | Description |
| ------ | ----------- |
| top    | 在列表上面  |
| footer | 页面底部    |

# License
MIT © [JakeLaoyu](https://github.com/JakeLaoyu)
