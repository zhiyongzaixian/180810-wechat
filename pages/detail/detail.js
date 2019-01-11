// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
let dataArr = datas.list_data;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}
  },

  /**
   * 生命周期函数--监听页面加载w
   */
  onLoad: function (options) {
    console.log(options);
    // 获取路由参数
    let index = options.index;
    // 更新detailObj的状态
    this.setData({
      detailObj: dataArr[index]
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