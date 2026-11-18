Page({
  data: {
    motto: '欢迎使用我和我的宠物小程序'
  },
  onLoad() {},
  // 新增：跳转到分类页面
  goToCategory() {
    wx.navigateTo({
      url: '/pages/category/category'
    })
  },
  // 新增：跳转到发布页面
  goToPublish() {
    wx.navigateTo({
      url: '/pages/publish/publish'
    })
  }
})
