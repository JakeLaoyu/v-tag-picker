<template>
  <div id="app">
    <v-tag-picker
      :tagData="tagData"
      :multipleSelection="multipleSelection"
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
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      tagData: Array.from(new Array(50), (val, index) => ({ title: '心血管', key: index })),
      multipleSelection: Array.from(new Array(50), (val, index) => ({ title: '心血管', key: index }))
    }
  }
}
</script>

<style lang="less">
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
