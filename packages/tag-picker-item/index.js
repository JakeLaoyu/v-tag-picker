import tagPickerItem from '../tag-picker/src/tag-picker-item.vue'

tagPickerItem.install = function (Vue) {
  Vue.component(tagPickerItem.name, tagPickerItem)
}

export default tagPickerItem
