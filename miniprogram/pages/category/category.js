Page({
  data: {
    // 新增：当前选中的分类标识
    selectedCategory: ''
  },
  onLoad() {},

  // 抽离公共方法：更新选中状态并打印
  updateSelectedStatus(type, name) {
    if (type === this.data.selectedCategory) return;
    
    this.setData({
      selectedCategory: type
    });
    console.log('当前选中分类:', name);
  },

  // 点击卡片本身：仅更新选中状态
  onSelectCategory(e) {
    const type = e.currentTarget.dataset.type;
    const name = e.currentTarget.dataset.name;
    this.updateSelectedStatus(type, name);
  },

  // 点击“去看看”按钮：先更新选中状态，再执行跳转
  goToCategoryDetail(e) {
    const type = e.currentTarget.dataset.type;
    const name = e.currentTarget.dataset.name;
    
    // 1. 先同步更新选中状态，修复高亮 Bug
    this.updateSelectedStatus(type, name);
    
    // 2. 执行原有跳转逻辑
    wx.navigateTo({
      url: `/pages/categoryDetail/categoryDetail?type=${type}&name=${name}`
    });
  }
})
