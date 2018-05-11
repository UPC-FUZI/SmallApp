// pages/sale/sale.js
var model = require('../../model/model.js')

var show = false;
var item = {};

Page({
  /**
   * 页面的初始数据
   */
  data: {
    carType: ['轿车', 'SUV'],
    typeIndex: 0,
    salePosterPic:"../../images/sale/sale_poster.png",
    item: {
      show: show
    }
  },
  bindPickerChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  // formSubmit: function (e) {
  //   var that = this;
  //   var formData = e.detail.value;
  //   wx.request({
  //     url: 'http://127.0.0.1:8888/saler/submitCarInfo', //仅为示例，并非真实的接口地址
  //     data: {
  //       userName: e.detail.value.userName,
  //       telephone: e.detail.value.telephone,
  //       city: e.detail.value.city,
  //       brand: e.detail.value.brand,
  //       mileage: e.detail.value.mileage,
  //       licsenceDate: e.detail.value.licsenceDate
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: "POST",
  //     success: function (res) {
  //       console.log(res.data)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },
  //点击选择城市按钮显示picker-view
  translate: function (e) {
    model.animationEvents(this, 0, true, 400);
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false, 400);
  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})