<template>
  <div id="app">
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
        <a href="#">进入首页</a>
      </div>
    </v-tag-picker>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'app',
  components: {},
  data () {
    return {
      tagData: [
        {
          'name': '心血管'
        },
        {
          'name': '骨科'
        },
        {
          'name': '呼吸'
        },
        {
          'name': '血液'
        },
        {
          'name': '精神'
        },
        {
          'name': '内分泌'
        },
        {
          'name': '肾内'
        },
        {
          'name': '影像'
        },
        {
          'name': '肿瘤'
        },
        {
          'name': '神经'
        },
        {
          'name': '整形外科'
        },
        {
          'name': '科研论文'
        },
        {
          'name': '普外'
        },
        {
          'name': '罕见病'
        },
        {
          'name': '风湿'
        },
        {
          'name': '泌尿'
        },
        {
          'name': '耳喉鼻'
        },
        {
          'name': '妇产科'
        },
        {
          'name': '感染'
        }
      ],
      multipleSelection: [
        {
          'name': '妇产科'
        },
        {
          'name': '感染'
        }
      ]
    }
  },
  methods: {
    change (val) {
      // console.log(val)
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

<style lang="less">
html,
body {
  max-width: 640px;
}
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
