// pages/detail/detail.js
var config = require('../../config');
var Util = require('../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: ['../../images/car/gs1.png', '../../images/car/gs2.png', '../../images/car/gs3.png', '../../images/car/gs4.png'],
    poster: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    carInfo:null
    // videoUrl: "https://dm30webimages.geely.com/GeelyPromotion/DiHaoGS/SectionFourth/videos/video/pc1.mp4",
    // brand_detail:"2018款 优雅版 1.8L 手动风尚型",
    // price:"4.70 万",
    // new_price:"11.28万(含税)",
    // carInfo:null
  },
  callTelephone: function(){
    wx.makePhoneCall({
      phoneNumber: "18811530776" //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      method: "POST",
      url: config.service.detailPageUrl,
      data: Util.json2Form({
        id: options.id
      }),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          carInfo: res.data.data.carInfo
        })
        wx.showToast({
          title: '获取详情成功' + options.id,
        })
      },
      fail: function () {
        wx.showToast({
          title: '获取详情失败',
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