// components/btn/btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: "primary"
    },
    ot: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindUserInfo(data) {
      console.log(data)
      wx.BaaS.handleUserInfo(data).then(res => {
        var myEventDetail = {} // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('login', myEventDetail, myEventOption)
      }, res => {
        if (res.id) {
          wx.showToast({
            title: '请授权信息后继续',
            icon: 'none'
          })
        }
      })
    },
    submitForm(event) {
      if (event.detail.formId != "the formId is a mock one") {
        wx.BaaS.wxReportTicket(event.detail.formId)
      }
    }
  }
})
