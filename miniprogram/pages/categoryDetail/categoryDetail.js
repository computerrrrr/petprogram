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
        id: 1,
        category: name,
        nickname: `${name}爱好者`,
        image: '',
        desc: `这是一只非常可爱的${name}，每天都在快乐地成长！`
      },
      {
        id: 2,
        category: name,
        nickname: `资深${name}铲屎官`,
        image: '',
        desc: `分享一些养${name}的日常小贴士，希望对大家有帮助~`
      }
    ];

    this.setData({
      feedList: mockData
    });
  }
})

