Page({
  data: {
    // 新增：我的作品模拟假数据
    myWorksList: [
      {
        id: 101,
        category: '🐱 猫猫',
        nickname: '宠物爱好者',
        imageUrls: ['https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg'],
        desc: '我家橘猫今天又睡了一天，雷打不动~'
      },
      {
        id: 102,
        category: '🐶 狗狗',
        nickname: '宠物爱好者',
        imageUrls: ['https://cdn.pixabay.com/photo/2023/08/18/15/36/dog-8198719_1280.jpg'],
        desc: '带着修勾去海边浪啦，开心到飞起！'
      }
    ]
  },
  

  // 新增：跳转动态详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  onLoad() {
  },

  // 图片预览交互
  onPreviewImage(e) {
    const urls = e.currentTarget.dataset.urls || [];
    if (urls.length === 0) return;
    wx.previewImage({
      current: urls[0],
      urls: urls
    });
  },

  // 功能入口点击事件
  onFeatureTap(e) {
    const name = e.currentTarget.dataset.name;
    console.log('点击了功能入口:', name);

    // 新增：我的发布跳转逻辑骨架
    if (name === '我的发布') {
      wx.navigateTo({
        url: '/pages/detail/detail?id=888' // 传入模拟id参数
      });
    } else {
      // 其余卡片（我的收藏、设置）依旧保留空点击事件提示
      wx.showToast({
        title: '功能开发中',
        icon: 'none'
      });
    }
  }
})
