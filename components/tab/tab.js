// components/tab/tab.js
Component({
  properties: {
    index: {
      type: Number,
      value: 0
    },
    login: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isIPX: false
  },
  ready() {
    const app = getApp()
    // 适配 iPhone X 底栏
    this.setData({
      isIPX: app.globalData.isIPX
    })
  },
  methods: {
    touchTab(option) {
      let id = option.currentTarget.id;
      if (id == 'index') {
        wx.switchTab({
          url: "/pages/index/index"
        })
      } else {
        wx.switchTab({
          url: "/pages/me/me"
        })
      }
    },
    newNotice() {
      wx.navigateTo({
        url: "/pages/newNotice/newNotice",
      })
    }
  }
})
