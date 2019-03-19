<template>
  <div
    class="vtag-item"
    :class="[ `vtag-item-${type}` ]"
    @click="handleClickVtag"
  >
    {{ name }}
  </div>
</template>
<script>
export default {
  name: 'VTagPickerItem',
  props: {
    name: {
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
  },
  methods: {
    handleClickVtag (e) {
      this.$emit('click', e)
    }
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
    box-sizing: border-box;
    vertical-align: middle;
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
