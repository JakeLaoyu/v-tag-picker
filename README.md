# v-tag-picker

A cool mobile component of tag picker width vue.js [中文文档](https://github.com/JakeLaoyu/v-tag-picker/blob/master/README-CN.md)

[![npm](https://img.shields.io/npm/v/v-tag-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-tag-picker)
[![npm](https://img.shields.io/npm/dt/v-tag-picker.svg?style=flat-square)](https://www.npmjs.com/package/v-tag-picker)
[![npm](https://img.shields.io/npm/l/v-tag-picker.svg?style=flat-square)](https://github.com/jakelaoyu/v-tag-picker/blob/master/LICENSE)

# Introduction

[DEMO](https://jakelaoyu.github.io/v-tag-picker/demo/#/demo)

# Screenshot

![](./images/screenshot-3.gif)

# Install

```sh
npm i v-tag-picker -S
```

# Usage

```js
// global
import vTagPicker from 'v-tag-picker'

Vue.use(vTagPicker)

// component
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

| Name              | Type    | Default | Description                                             |
| ----------------- | ------- | ------- | ------------------------------------------------------- |
| zIndex            | Number  |         | tag-picker z-index                                      |
| totalData         | Array   | []      | picker list data,Must has `name` key. [{ name: 'tag' }] |
| selectedData      | Array   | []      | Selected list                                           |
| animationDuration | Number  | 500     | Animation time(ms).                                     |
| onlyKey           | String  | name    | Unique identifier for each item of data                 |
| appendToBody      | Boolean | name    | append to body element                                  |

# Events

| Name   | Description          | return        |
| ------ | -------------------- | ------------- |
| change | Selected data change | Selected data |

# slot

| Name   | Description          |
| ------ | -------------------- |
| top    | In front of the list |
| footer | bottom page          |

# License
MIT © [JakeLaoyu](https://github.com/JakeLaoyu)
