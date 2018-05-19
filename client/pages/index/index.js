//index.js
//获取应用实例
var config = require('../../config');
const app = getApp();

Page({
  data: {
    host: config.service.host,
    poster:{
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    imgUrls: null,
    newCarInfos:null
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      method: "GET",
      url: config.service.homePageUrl, //仅为示例，并非真实的接口地址
      success: function (res) {
        that.setData({
          imgUrls : res.data.data.imgUrls,
          newCarInfos : res.data.data.newCarInfos
        })
      },
      fail: function(){
        wx.showToast({
          title: '获取信息失败',
        })
      }
    })
  },
  //事件处理函数
  getDetails: function(e){
    wx.navigateTo({
      //e.currentTarget.dataset.id 传递的参数
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
      // success:function(res){
      //   wx.showToast({
      //     title: "获取详情成功",
      //   })
      // },
      // fail: function(res){
      //   wx.showToast({
      //     title: "获取详情失败",
      //   })
      // }
    }) 
  }
})
