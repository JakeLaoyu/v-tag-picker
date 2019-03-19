<template>
  <div
    ref="vtag-wrap"
    class="vtag-wrap"
    :style="{
      'z-index': zIndex
    }"
  >

    <div class="vtag-top" ref="top">
      <div
        ref="top-content"
        class="vtag-top__content"
        :style="vtagTopContentStyle"
        @click="(e)=>{ handleCancelVtag(e) }"
        @scroll="topScroll"
      >
        <VTagPickerItem
          class="vtag-top__item"
          type="light"
          v-for="(item,index) in selection"
          :key="index"
          :name="item.name"
          :totalSelectionKey="item[OnlyKey]"
          :style="{
            transition: `all ${animationDuration / 1000}s`
          }"
        />

        <div class="vtag-top-content__width" :style="{
          width: vtopContentWidth,
          height: '1px'
        }"></div>
      </div>

      <div class="vtag-top__right" v-if="showTagNum">
        <div class="vtag-top__num">{{ `+${rightTagNum}` }}</div>
      </div>
    </div>

    <slot name="top"></slot>

    <div class="vtag-container" ref="container">
      <div class="vtag-container__content">
        <VTagPickerItem
          class="vtag-container__item"
          v-for="(item,index) in totalData"
          :key="index"
          :name="item.name"
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
import { sleep, debounce, throttle } from '../util.js'
import tagPickerItem from './tag-picker-item'
export default {
  name: 'vTagPicker',
  components: {
    VTagPickerItem: tagPickerItem
  },
  props: {
    zIndex: Number,
    totalData: {
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
    },
    OnlyKey: {
      type: String,
      default: 'name'
    }
  },
  data () {
    return {
      rightTagNum: 0, // 右侧被遮挡的 tag 数量
      vtagTopContentStyle: {},
      showTagNum: false,
      selection: [], // 顶部显示数据
      domQueue: [],
      animating: false,
      totalSelection: [], // 所有已选数据
      vtopContentWidth: '100%',
      debounceResetContentTag: debounce(this.resetContentTag, this.animationDuration * 1.5),
      topScroll: throttle(this.computedTagNumShow, 100, 200),
      hasSelectionDom: [], // 缓存已选 content中的dom,用于动画结束后，合并content
      topVtagItemCache: null // 缓存顶部已选 tag第一个
    }
  },
  watch: {
    multipleSelection: {
      handler (val) {
        this.selection = JSON.parse(JSON.stringify(val))
        this.totalSelection = JSON.parse(JSON.stringify(val))
        this.$nextTick(() => {
          this.computedTagNumShow()
          this.initTagPosition()
        })
      },
      immediate: true
    },
    totalSelection (val) {
      this.$emit('change', JSON.parse(JSON.stringify(val)))
    },
    totalData: {
      handler (val) {
        this.$nextTick(() => {
          this.computedContainerHeight()
        })
      },
      immediate: true
    }
  },
  methods: {
    // 取消选中tag
    handleCancelVtag (e) {
      let $target = e.target
      let $targetWidth = $target.offsetWidth
      if ($target.classList.contains('vtag-item-default') || !$target.classList.contains('vtag-item')) return
      $target.classList.remove('vtag-item-light')
      $target.classList.add('vtag-item-default')
      let index = this.totalSelection.findIndex(item => item[this.OnlyKey] === $target.getAttribute('totalSelection-key'))
      this.totalData.push(this.totalSelection[index])
      this.totalSelection.splice(index, 1)
      $target.innerHTML = ''
      let currentNode = $target
      while (currentNode.nextElementSibling && currentNode.nextElementSibling.classList.contains('vtag-item')) {
        let nextElement = currentNode.nextElementSibling
        let transformX = Number(nextElement.getAttribute('transform-x')) - $targetWidth - 15
        nextElement.setAttribute('transform-x', transformX)
        nextElement.style.transform = `translate(${transformX}px, 0)`
        currentNode = nextElement
      }

      $target.parentNode.removeChild($target)

      this.computedTagNumShow()
    },
    // 选中 tag
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
      let $topContent = this.$refs['top-content']
      $topContent.scrollLeft = 0

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
        this.topPrepend(e, data)
        this.animating = false
        this.computedTagNumShow()
        if (this.domQueue.length) {
          let dom = this.domQueue.shift()
          this.moveTag(dom.event, dom.data)
        }
      }, this.animationDuration)
    },
    // 向右移动已选tag
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
    // 插入选中tag
    topPrepend (e, data) {
      let $topContent = this.$refs['top-content']
      if (!this.selection.length) {
        this.selection.unshift(data)
        this.$nextTick(() => {
          $topContent.querySelector('.vtag-item').setAttribute('totalSelection-key', data[this.OnlyKey])
          this.topVtagItemCache = $topContent.querySelector('.vtag-item').cloneNode(true)
        })
      } else {
        let newVtag = this.topVtagItemCache.cloneNode(true)
        newVtag.setAttribute('totalSelection-key', data[this.OnlyKey])
        newVtag.innerHTML = data.name
        $topContent.prepend(newVtag)
      }
    },
    // 初始化标签位置，方便后续动画
    initTagPosition () {
      let vtagItems = this.$refs['top-content'].querySelectorAll('.vtag-item')
      if (vtagItems.length) {
        this.topVtagItemCache = vtagItems[0].cloneNode(true)
      }
      vtagItems.forEach((dom, index) => {
        dom.setAttribute('transform-x', 0)
        dom.style.transform = `translate(${0}px, 0)`
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
        let vtagItems = $topContent.querySelectorAll('.vtag-item')
        let firstItem = vtagItems[vtagItems.length - 1]
        let firstItemRect = firstItem.getBoundingClientRect()
        this.$set(this.vtagTopContentStyle, 'paddingRight', '94px')
        this.vtopContentWidth = `${firstItem.offsetLeft + Number(firstItem.getAttribute('transform-x')) + firstItemRect.width + Number($topContent.style.paddingLeft) + 94}px`
        this.rightTagNum = 0
        vtagItems.forEach(item => {
          let domRect = item.getBoundingClientRect()
          let topContentStyle = window.getComputedStyle($topContent)
          if (domRect.left + domRect.width > $topContent.clientWidth - Number(topContentStyle.paddingLeft.replace('px', '')) - Number(topContentStyle.paddingRight.replace('px', ''))) this.rightTagNum++
        })
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
@import url('../style/index.less');
</style>
