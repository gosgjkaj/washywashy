// components/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "标题"
    },
    titleStyle: {
      type: String,
      value: "dark"
    },
    backButton: {
      type: Boolean,
      value: false
    },
    refreshButton: {
      type: Boolean,
      value: false
    },
    homeButton: {
      type: Boolean,
      value: false
    },
    cover: {
      type: Boolean,
      value: false
    }
  },
  data: {
    refreshAni: {},
    statusBarHeight: null
  },
  ready() {
    const app = getApp()
    // 适配状态栏高度
    let statusBarHeight = app.globalData.statusBarHeight
    this.setData({
      statusBarHeight: statusBarHeight,
    })
  },
  methods: {
    navigateBack() {
      wx.navigateBack({
        delta: 1
      })
    },
    toHome() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    refresh() {
      let animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease'
      })

      animation.rotate(360).step()
      animation.rotate(0).step({ duration: 0 })

      this.setData({
        refreshAni: animation.export(),
      })
      this.triggerEvent('refresh', {}, {})
    }
  }
})
