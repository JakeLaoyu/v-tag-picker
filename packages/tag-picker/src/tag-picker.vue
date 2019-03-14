<template>
  <div class="vtag-wrap" :style="{
    'z-index': zIndex
  }">

  </div>
</template>
<script>
export default {
  name: 'VTagPicker',
  props: {
    zIndex: Number
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
.tag {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
