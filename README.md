# v-tag-picker

A cool mobile component of tag picker width vue.js

# Introduction

[DEMO](https://github.com/JakeLaoyu/v-tag-picker)

# Screenshot

![](https://blogimg.jakeyu.top/v-tag-picker/Screenshot.gif)

# Install

```sh
yarn add v-tag-picker
```

# Usage

```js
import vTagPicker from 'v-tag-picker'

Vue.use(vTagPicker)
```

```html
<v-tag-picker
  :totalData="tagData"
  :multipleSelection="multipleSelection"
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

| Name              | Type   | Default | Description                                             |
| ----------------- | ------ | ------- | ------------------------------------------------------- |
| zIndex            | Number |         | tag-picker z-index                                      |
| totalData         | Array  | []      | picker list data,Must has `name` key. [{ name: 'tag' }] |
| multipleSelection | Array  | []      | Selected list                                           |
| animationDuration | Number | 500     | Animation time(ms).                                     |
| OnlyKey           | String | name    | Unique identifier for each item of data                 |

# Events

| Name   | Description          | return        |
| ------ | -------------------- | ------------- |
| change | Selected data change | Selected data |

# License
MIT © [JakeLaoyu](https://github.com/JakeLaoyu)
