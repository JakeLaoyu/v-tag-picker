<template>
  <div id="app">
    <v-tag-picker
      :totalData="tagData"
      :multipleSelection="multipleSelection"
      @change="change"
    >
      <div class="img-wrap" slot="top">
        <img class="" src="~@/assets/tagbg.png" alt="">
        <div class="img-wrap__title">最感兴趣的栏目</div>
        <div class="img-wrap__subtitle">定制专属于我的课程栏目</div>
      </div>

      <div class="footer" slot="footer">
        <a href="#">进入首页</a>
      </div>
    </v-tag-picker>
  </div>
</template>

<script>
// import axios from 'axios'
import { vTagPicker } from '~'
export default {
  name: 'app',
  components: {
    vTagPicker
  },
  data () {
    return {
      tagData: Array.from(new Array(100), (val, index) => ({ name: `${index}` })),
      multipleSelection: Array.from(new Array(2), (val, index) => ({ name: `${index}` }))
    }
  },
  methods: {
    change (val) {
      console.log(val)   //eslint-disable-line
    }
  },
  mounted () {
    // axios.get('http://yapi.demo.qunar.com/mock/60654/tag').then(res => {
    //   this.tagData = res.data.data
    // })
    // axios.get('http://yapi.demo.qunar.com/mock/60654/selection').then(res => {
    //   this.multipleSelection = res.data.data
    // })
  }
}
</script>

<style lang="less" scoped>
.img-wrap {
  text-align: center;
  height: 94px;
  position: relative;
  padding-top: 23px;
  box-sizing: border-box;
  img {
    width: 290px;
    height: 94px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
  }
  &__title {
    position: relative;
    font-size: 24px;
    color: #7C6CD9;
    margin-bottom: 4px;
  }
  &__subtitle {
    position: relative;
    color: #999;
    font-size: 14px;
  }
}
.footer {
  padding: 25px 0;
  text-align: center;
  a {
    text-decoration: none;
    color: #7C6CD9;
    font-size: 14px;
  }
}
</style>
