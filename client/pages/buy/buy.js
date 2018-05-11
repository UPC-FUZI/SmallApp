// pages/bug/bug.js
var config = require('../../config');
var Util = require('../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: "https://dm30webimages.geely.com/GeelyPromotion/DiHaoGS/SectionFourth/showpic/pc/3s.jpg",
    carInfos:null,
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      method: "GET",
      url: config.service.buyPageUrl, //仅为示例，并非真实的接口地址
      success: function (res) {
        that.setData({
          carInfos: res.data.data.carInfos,
          count: res.data.data.count
        })
        wx.showToast({
          title: "共获取到"+ res.data.data.count +"辆车的信息",
        })
      },
      fail: function () {
        wx.showToast({
          title: '获取信息失败',
        })
      }
    })
  },

  getDetails: function (e) {
    wx.navigateTo({
      //e.currentTarget.dataset.id 传递的参数
      url: '../detail/detail',
      success: function (res) {
        wx.showToast({
          title: "获取详情成功",
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "获取详情失败",
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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