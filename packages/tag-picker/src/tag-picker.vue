<template>
  <div
    ref="vtag-wrap"
    class="vtag-wrap"
    :style="{
      'z-index': zIndex
    }"
  >

    <div class="vtag-top" ref="top">
      <div ref="top-content" class="vtag-top__content" :style="vtagTopContentStyle">
        <div class="vtag-top-content__width" :style="{
          width: vtopContentWidth,
          height: '1px'
        }"></div>
        <VTagPickerItem
          class="vtag-top__item"
          type="light"
          v-for="(item,index) in selection"
          :key="index"
          :title="item.title"
          :style="{
            transition: `transform ${animationDuration / 1000}s`
          }"
        />
      </div>

      <div class="vtag-top__right" v-if="showTagNum">
        <div class="vtag-top__num">{{ `+${selection.length}` }}</div>
      </div>
    </div>

    <slot name="top"></slot>

    <div class="vtag-container" ref="container">
      <div class="vtag-container__content">
        <VTagPickerItem
          class="vtag-container__item"
          v-for="(item,index) in tagData"
          :key="index"
          :title="item.title"
          @click="(e)=>{ handleClickVtag(e,item) }"
          :style="{
            transition: `all ${animationDuration / 1000}s`,
            animationDuration: `${animationDuration / 1000}s`
          }"
          />
      </div>
    </div>

    <div ref="vtag-footer" class="vtag-footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>
<script>
import { sleep, debounce } from '../util.js'
export default {
  name: 'VTagPicker',
  props: {
    zIndex: Number,
    tagData: {
      type: Array,
      default: () => ([])
    },
    multipleSelection: {
      type: Array,
      default: () => ([])
    },
    animationDuration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      vtagTopContentStyle: {},
      showTagNum: false,
      selection: [],
      domQueue: [],
      animating: false,
      totalSelection: [],
      vtopContentWidth: '100%',
      debounceResetContentTag: debounce(this.resetContentTag, this.animationDuration * 1.5),
      hasSelectionDom: []
    }
  },
  watch: {
    multipleSelection: {
      handler (val) {
        this.selection = JSON.parse(JSON.stringify(val))
        this.totalSelection = JSON.parse(JSON.stringify(val))
        this.$nextTick(() => {
          this.computedTagNumShow()
        })
      },
      immediate: true
    },
    totalSelection (val) {
      this.$emit('change', JSON.parse(JSON.stringify(val)))
    },
    tagData: {
      handler (val) {
        this.$nextTick(() => {
          this.computedContainerHeight()
          this.initTagPosition()
        })
      },
      immediate: true
    }
  },
  methods: {
    handleClickVtag (e, data) {
      if (e.target.classList.contains('vtag-item-light')) return
      e.target.classList.add('animate')
      e.target.classList.add('vtag-item-light')
      this.totalSelection.push(data)
      this.domQueue.push({
        event: e,
        data
      })
      setTimeout(() => {
        e.target.classList.remove('animate')
        if (this.animating) return
        let dom = this.domQueue.shift()
        this.moveTag(dom.event, dom.data)
      }, this.animationDuration)
    },
    async moveTag (e, data) {
      this.animating = true
      let $target = e.target
      let $targetClone = e.target.cloneNode(true)
      let $targetRect = $target.getBoundingClientRect()
      let $vtagWrap = this.$refs['vtag-wrap']

      $targetClone.style.position = 'fixed'
      $targetClone.style.left = `${$targetRect.x}px`
      $targetClone.style.top = `${$targetRect.y}px`

      $vtagWrap.appendChild($targetClone)

      $target.style.width = `${$target.offsetWidth}px`
      $target.style.height = `${$target.offsetHeight}px`
      $target.style.background = `transparent`
      $target.innerHTML = ''

      await sleep(10)

      this.moveExist(e)
      $targetClone.style.transform = `translate(${-$targetRect.x + 15}px,${-$targetRect.y + 10}px)`
      setTimeout(() => {
        this.hasSelectionDom.push($target)
        this.debounceResetContentTag()
        $targetClone.parentNode.removeChild($targetClone)
        this.selection.unshift({
          ...data,
          key: this.selection.length
        })
        this.animating = false
        this.computedTagNumShow()
        if (this.domQueue.length) {
          let dom = this.domQueue.shift()
          this.moveTag(dom.event, dom.data)
        }
      }, this.animationDuration)
    },
    moveExist (e) {
      let $target = e.target
      let $targetWidth = $target.offsetWidth
      let vtagItems = this.$refs['top-content'].querySelectorAll('.vtag-item')
      vtagItems.forEach(item => {
        let transformX = Number(item.getAttribute('transform-x')) + $targetWidth + 15
        item.setAttribute('transform-x', transformX)
        item.style.transform = `translate(${transformX}px, 0)`
      })
    },
    // 初始化标签位置，方便后续动画
    initTagPosition () {
      let vtagItems = this.$refs['top-content'].querySelectorAll('.vtag-item')
      vtagItems.forEach((dom, index) => {
        dom.setAttribute('transform-x', 0)
        if (index === 0) {
          dom.style.left = `15px`
        } else {
          dom.style.left = `${vtagItems[index - 1].offsetLeft + vtagItems[index - 1].offsetWidth + 15}px`
        }
      })
    },
    // 判断是否显示顶部隐藏的tag数量
    computedTagNumShow () {
      const $topContent = this.$refs['top-content']
      if ($topContent.scrollWidth === $topContent.clientWidth) {
        this.showTagNum = false
        this.$set(this.vtagTopContentStyle, 'width', '100%')
        this.$set(this.vtagTopContentStyle, 'paddingRight', '15px')
      } else {
        this.showTagNum = true
        let $topContent = this.$refs['top-content']
        let firstItem = $topContent.querySelector('.vtag-item')
        let firstItemRect = firstItem.getBoundingClientRect()
        this.$set(this.vtagTopContentStyle, 'paddingRight', '94px')
        console.log('束带结发')
        console.log(firstItem.offsetLeft)
        console.log(firstItem.getAttribute('transform-x'))
        console.log(firstItemRect.width)
        console.log(Number($topContent.style.paddingLeft))
        this.vtopContentWidth = `${firstItem.offsetLeft + Number(firstItem.getAttribute('transform-x')) + firstItemRect.width + Number($topContent.style.paddingLeft) + 94}px`
      }
    },
    // 计算内容区域高度
    computedContainerHeight () {
      const $vtagWrap = this.$refs['vtag-wrap']
      const $container = this.$refs.container
      const $vtagFooter = this.$refs['vtag-footer']
      $container.style.height = `${$vtagWrap.offsetHeight - $container.offsetTop - ($vtagFooter.offsetHeight || 0)}px`
    },
    resetContentTag () {
      this.hasSelectionDom.forEach(item => {
        item.classList.add('hide')
      })
    }
  },
  mounted () {
    this.bodyStyle = document.body.style
    document.body.style = `${this.bodyStyle}overflow: hidden;`
  },
  beforeDestroy () {
    document.body.style = this.bodyStyle
  }
}
</script>
<style scoped lang="less">
@import '../style/animate.less';
.vtag {
  &-wrap{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &-top {
    height: 50px;
    box-sizing: border-box;
    background: #F2F2F2;
    font-size: 0;
    margin-bottom: 15px;
    position: relative;
    &__content {
      padding: 10px 15px;
      overflow: auto;
      box-sizing: border-box;
      white-space: nowrap;
      position: relative;
      height: 100%;
    }
    &__right {
      text-align: right;
      padding-right: 15px;
      box-sizing: border-box;
      width: 94px;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background:linear-gradient(90deg,rgba(245,245,245,0) 0%,rgba(245,245,245,1) 100%);
      &:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
    }
    &__num {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      color: #fff;
      height: 32px;
      line-height: 32px;
      padding: 0 6px;
      border-radius: 16px;
      background: #000000;
    }
    &__item {
      position: absolute;
      left: 15px;
    }
  }
  &-container {
    text-align: center;
    font-size: 0;
    position: relative;
    box-sizing: border-box;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      z-index: 2;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30px;
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      transform: rotate(180deg);
      z-index: 2;
    }
    &__content {
      min-width: 100px;
      overflow: auto;
      height: 100%;
      padding: 30px 25px;
      box-sizing: border-box;
    }
    &__item {
      display: inline-block;
      margin: 0 15px 15px 0;
      position: relative;
      &.hide {
        margin: 0;
        padding: 0;
        width: 0!important;
        height: 0!important;
      }
      &.animate {
        animation: grow linear alternate;
      }
    }
  }
}
</style>
