Page({
  data: {},
  onLoad() {},

  // 点击分类卡片跳转逻辑，传递分类名称
  goToCategoryDetail(e) {
    const type = e.currentTarget.dataset.type;
    const name = e.currentTarget.dataset.name;
    
    wx.navigateTo({
      url: `/pages/categoryDetail/categoryDetail?type=${type}&name=${name}`
    });
  }
})
