// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '搜索'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clear() {
      this.setData({ value: '' })
      this.triggerEvent('search', { value: '' }, {})
    },
    search(e) {
      this.setData({ value: e.detail.value })
      var myEventDetail = { value: e.detail.value } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('search', myEventDetail, myEventOption)
    }
  }
})
