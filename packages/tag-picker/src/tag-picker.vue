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
        <VTagPickerItem
          class="vtag-top__item"
          type="light"
          v-for="item in selection"
          :key="item.key"
          :title="item.title"
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
          v-for="item in tagData"
          :key="item.key"
          :title="item.title"
          />
      </div>
    </div>

    <div ref="vtag-footer" class="vtag-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
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
    }
  },
  data () {
    return {
      showTagNum: false,
      selection: []
    }
  },
  computed: {
    vtagTopContentStyle () {
      return {
        paddingRight: this.showTagNum ? '94px' : '15px'
      }
    }
  },
  watch: {
    multipleSelection: {
      handler (val) {
        this.selection = [...val]
      },
      immediate: true
    },
    selection: {
      handler (val) {
        this.$nextTick(() => {
          this.computedTagNumShow()
        })
      },
      immediate: true
    },
    tagData: {
      handler (val) {
        this.$nextTick(() => {
          this.computedContainerHeight()
        })
      },
      immediate: true
    }
  },
  methods: {
    computedTagNumShow () {
      const $topContent = this.$refs['top-content']
      if ($topContent.scrollWidth === $topContent.offsetWidth) {
        this.showTagNum = false
      } else {
        this.showTagNum = true
      }
    },
    computedContainerHeight () {
      const $vtagWrap = this.$refs['vtag-wrap']
      const $container = this.$refs.container
      const $vtagFooter = this.$refs['vtag-footer']
      $container.style.height = `${$vtagWrap.offsetHeight - $container.offsetTop - ($vtagFooter.offsetHeight || 0)}px`
    }
  }
}
</script>
<style scoped lang="less">
.vtag {
  &-wrap{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &-top {
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
      display: inline-block;
    }
    &__item+.vtag-top__item {
      margin-left: 15px;
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
    }
  }
}
</style>
