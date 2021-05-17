// pages/cover/cover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideUp: {},
    slideShow: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
        var slideUp = wx.createAnimation({
            duration: 800,
            timingFunction: 'ease',
        });
        slideUp.opacity(1).translateY(-200).step();
        this.setData({
          slideUp: slideUp.export()
        })
        var slideShow = wx.createAnimation({
            duration: 1500,
            timingFunction: 'ease',
        });
        slideShow.opacity(1).step();
        this.setData({
          slideShow: slideShow.export()
        })
    },500);
    setTimeout(() => {
        wx.switchTab({
            url: '../index/index',
        });
    },3500)
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