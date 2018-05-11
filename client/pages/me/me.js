// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:"../../images/logo.png",
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 36.629270,
      longitude: 119.129580,
      width: 15,
      height: 15,
      name: "君博二手车"
    }]
  },
  callTelephone: function(){
    wx.makePhoneCall({
      phoneNumber: "18811530776" //仅为示例，并非真实的电话号码
    })
  },
  // previewImage: function(){
  //   wx.previewImage({
  //     //需要是链接
  //     current: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525864233225&di=6c7e515eb3b46cbd77bf176020bfcff3&imgtype=0&src=http%3A%2F%2Fwww.hxcjwh.com%2Ffile%2Fupload%2F201707%2F25%2F10-55-52-33-159.gif", 
  //     urls: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525864233225&di=6c7e515eb3b46cbd77bf176020bfcff3&imgtype=0&src=http%3A%2F%2Fwww.hxcjwh.com%2Ffile%2Fupload%2F201707%2F25%2F10-55-52-33-159.gif"]
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