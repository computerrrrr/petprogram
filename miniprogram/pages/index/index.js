Page({
  data: {
    motto: '欢迎使用我和我的宠物小程序',

    // 新增：搜索关键词
    searchKeyword: '',

    // 新增：宠物动态假数据
    feedList: [
      {
        id: 1,
        category: '🐱 猫猫',
        nickname: '橘猫大人',
        imageUrls: ['https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg'],
        desc: '今天又重了半斤，沙发都快装不下我了，求轻喷~'
      },
      {
        id: 2,
        category: '🐶 狗狗',
        nickname: '修勾日记',
        imageUrls: ['https://cdn.pixabay.com/photo/2023/08/18/15/36/dog-8198719_1280.jpg'],
        desc: '出门遛弯啦！阳光正好，微风不燥，汪汪~'
      },
      {
        id: 3,
        category: '🐦 鸟类',
        nickname: '鹦鹉学舌',
        imageUrls: ['https://cdn.pixabay.com/photo/2016/11/18/13/58/parrot-1834634_1280.jpg'],
        desc: '今天学会了说“你好”，是不是超厉害！'
      }
    ]
  },
  onLoad() {},

  // 新增：搜索框输入交互骨架
  onSearchInput(e) {
    const keyword = e.detail.value;
    this.setData({
      searchKeyword: keyword
    });
    // 仅做本地输入值收集，控制台打印输入关键词
    console.log('当前搜索关键词:', keyword);
  },

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
    console.log(e.currentTarget.dataset.id)
    if (urls.length === 0) return;
    wx.previewImage({
      current: urls[0], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    });
  }
})
