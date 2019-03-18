<template>
  <div
    class="vtag-item"
    :class="[ `vtag-item-${type}` ]"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'VTagPickerItem',
  props: {
    title: {
      type: String,
      required: true
    },
    type: { // default, light
      type: String,
      default: 'default'
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.vtag {
  &-item {
    display: inline-block;
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 14px;
    white-space: nowrap;
    &-default {
      background: #EFEFEF;
      color: #444;
    }
    &-light {
      color: #fff;
      background: #7C6CD9;
    }
  }
}
</style>
