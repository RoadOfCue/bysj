// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideUp: {},
    slideShow: {},
    mapImg: ['http://5b0988e595225.cdn.sohucs.com/images/20180909/102414d7bad34a3e8b46ffcfcd19394c.jpeg']
  },
  previewImage(){
    wx.previewImage({
        urls: this.data.mapImg // 需要预览的图片https链接列表
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var slideUp = wx.createAnimation({
          duration: 800,
          timingFunction: 'ease',
      });
      slideUp.opacity(1).top(180).step();
      this.setData({
        slideUp : slideUp.export()
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var slideUp = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    slideUp.opacity(0).top(200).step();
    this.setData({
      slideUp : slideUp.export()
    })
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

  },
})