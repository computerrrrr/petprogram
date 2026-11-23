Page({
  data: {
    categoryName: '',
    feedList: []
  },

  onLoad(options) {
    // 接收URL传参的分类标识和名称
    const type = options.type || 'cat';
    const name = options.name || '猫猫';
    
    this.setData({
      categoryName: name
    });

    // 动态设置当前页面导航栏标题
    wx.setNavigationBarTitle({
      title: name
    });

    // 生成该分类下的静态模拟数据
    this.generateMockData(type, name);
  },

  // 生成模拟数据骨架
  generateMockData(type, name) {
    const mockData = [
      {
        id: 10,
        category: name,
        nickname: `${name}爱好者`,
        imageUrls: ['https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg'],
        desc: `这是一只非常可爱的${name}，每天都在快乐地成长！`
      },
      {
        id: 20,
        category: name,
        nickname: `资深${name}铲屎官`,
        imageUrls: ['https://cdn.pixabay.com/photo/2023/08/18/15/36/dog-8198719_1280.jpg'],
        desc: `分享一些养${name}的日常小贴士，希望对大家有帮助~`
      }
    ];

    this.setData({
      feedList: mockData
    });
  },

  // 新增：跳转动态详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  // 新增：图片预览交互骨架
  onPreviewImage(e) {
    const urls = e.currentTarget.dataset.urls || [];
    if (urls.length === 0) return;
    wx.previewImage({
      current: urls[0],
      urls: urls
    });
  }
})

