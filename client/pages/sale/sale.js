// pages/sale/sale.js
var config = require('../../config');
var Util = require('../../utils/util.js'); 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    salePosterPic:"../../images/sale/sale_poster.png",
  },
    // wx.request({
    //   method: "POST",
    //   url: config.service.salerUrl, //仅为示例，并非真实的接口地址
    //   data: Util.json2Form({
    //     userName: "UPC_FUZI"
    //   }),
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  formSubmit: function (e) {
    var that = this;
    wx.request({
      method: "POST",
      url: config.service.salerUrl,
      data: Util.json2Form({
        userName: e.detail.value.userName,
        telephone: e.detail.value.telephone,
        city: e.detail.value.city,
        brand: e.detail.value.brand,
        mileage: e.detail.value.mileage,
        licenseDate: e.detail.value.licenseDate
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.showToast({
          title: '提交信息成功',
        })
      },
      fail: function () {
        wx.showToast({
          title: '提交信息失败',
        })
      }, 
      complete: function () {
        wx.switchTab({
          url: '../index/index'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
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