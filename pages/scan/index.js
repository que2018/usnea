//获取应用实例  
var app = getApp()
Page({
  data: {
    show: "",
  },
  click: function () {
    this.scan();
  },
  scan: function () {
    wx.scanCode({
      success: (res) => {
        var qrcode =  res.result; 
        this.verify(qrcode);
      },

      fail: (res) => {
       
      },
      complete: (res) => {
        
      }
    })
  },
  verify: function(code) {
    wx.request({
      url: "https://api.usnea.org/api/vcode_verification",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: { sn: code },
      complete: function (res) { 
        if(res.data.status == 200) 
        {
          app.globalData.name = res.data.name;
          app.globalData.image = res.data.image;
          app.globalData.sku = res.data.sku;
          app.globalData.date = res.data.date;
          app.globalData.expire = res.data.expire;
          app.globalData.place = res.data.place;
          app.globalData.scanHistories = res.data.sn_histories;

          wx.navigateTo({
            url: '../success/index'
          });
        } 
        else
        {
          wx.navigateTo({
            url: '../fail/index'
          })
        }
      },
      fail: function () {
        wx.showToast({
          title: "fail",
          icon: 'success',
          duration: 2000
        });
      }
    })
  }
})
