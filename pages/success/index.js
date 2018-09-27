var app = getApp()
var that = {};
Page({
  data: {
    name: "",
    image: "",
    sku: "",
    date: "",
    expire: "",
    place: "",
    scanHistories: []
  },
  onLoad: function() {
    

  },
  onShow: function () {
    that = this;
    that.setData({
      name: app.globalData.name,
      image: app.globalData.image,
      sku: app.globalData.sku,
      date: app.globalData.date,
      expire: app.globalData.expire,
      place: app.globalData.place,
      scanHistories: app.globalData.scanHistories,
    })
  },
})