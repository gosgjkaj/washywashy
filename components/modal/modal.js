// components/modal/modal.js
const aniModel = (that, show, duration) => {
  let animation1 = wx.createAnimation({
    duration: duration,
    timingFunction: 'ease'
  })
  let animation2 = wx.createAnimation({
    duration: duration,
    timingFunction: 'ease'
  })

  if (show) {
    animation2.opacity(1).step()
    animation1.translateY(-60).step()
  } else {
    animation2.opacity(0).step()
    animation1.translateY(60).step()
  }
  

  that.setData({
    modalAnimation: animation1.export(),
    bgAnimation: animation2.export()
  })
}

Component({
  properties: {
    title: {
      type: String,
      value: '通知'
    },
    subtitle: {
      type: String,
      value: ''
    },
    warn: {
      type: Boolean,
      value: false
    },
    confirmTitle: {
      type: String,
      value: '确认'
    },
    canConfirm: {
      type: Boolean,
      value: false
    }
  },
  data: {
    modalAnimation: {},
    bgAnimation: {}
  },
  ready: function () {
    aniModel(this, true, 200)
  },
  methods: {
    cancel() {
      const that = this
      let myEventDetail = { success: false } // detail对象，提供给事件监听函数
      let myEventOption = {} // 触发事件的选项
      aniModel(this, false, 200)
      setTimeout(function () {
        that.triggerEvent('closemodal', myEventDetail, myEventOption)
      }, 200)
    },
    confirm() {
      const that = this;
      let myEventDetail = { success: true } // detail对象，提供给事件监听函数
      let myEventOption = {} // 触发事件的选项
      aniModel(this, false, 200)
      setTimeout(function () {
        that.triggerEvent('closemodal', myEventDetail, myEventOption)
      }, 200)
    },
    touchModal() {
      // 什么都不做
    }
  },
  
})
