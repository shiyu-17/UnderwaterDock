// pages/UnderwearDock.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      result:'等待获取token',
  },
  /**
   * 获取token按钮按下：
   */
  touchBtn_gettoken:function()
  {
      console.log("获取token按钮按下");
      this.setData({result:'获取token按钮按下'})
      this.gettoken();
  },
  /**
   * 获取设备影子按钮按下：
   */
  touchBtn_getshadow:function()
  {
      console.log("获取设备影子按钮按下");
  },
   /**
   * 设备命令下发按钮按下：
   */
  touchBtn_setCommand:function()
  {
      console.log("设备命令下发按钮按下");
  },  
/**
     * 获取token
     */
    gettoken:function(){
        console.log("开始获取。。。");//打印完整消息
        var that=this;  //这个很重要，在下面的回调函数中由于异步问题不能有效修改变量，需要用that获取
        wx.request({
            url: 'https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens',
            data:'{"auth": { "identity": {"methods": ["password"],"password": {"user": {"name": "IAMserv","password": "IAMserver","domain": {"name": "epiphany17"}}}},"scope": {"project": {"name": "cn-north-4"}}}}',
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {'content-type': 'application/json' }, // 请求的 header 
            success: function(res){// success
              // success
                console.log("获取token成功");//打印完整消息
                console.log(res);//打印完整消息
                //解析token
                var token='';
                token=JSON.stringify(res.header['X-Subject-Token']);//解析消息头token
                token=token.replaceAll("\"", "");
                console.log("获取token=\n"+token);//打印token
                wx.setStorageSync('token',token);//把token写到缓存中,以便可以随时随地调用
            },
            fail:function(){
                // fail
                console.log("获取token失败");//打印完整消息
            },
            complete: function() {
                // complete
                console.log("获取token完成");//打印完整消息
            } 
        });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})