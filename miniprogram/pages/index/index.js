Page({
  data: {
    motto: '欢迎使用我和我的宠物小程序',

    // 新增：宠物动态假数据
    feedList: [
      {
        id: 1,
        category: '🐱 猫猫',
        nickname: '橘猫大人',
        image: '', // 空字符串代表占位图
        desc: '今天又重了半斤，沙发都快装不下我了，求轻喷~'
      },
      {
        id: 2,
        category: '🐶 狗狗',
        nickname: '修勾日记',
        image: '',
        desc: '出门遛弯啦！阳光正好，微风不燥，汪汪~'
      },
      {
        id: 3,
        category: '🐦 鸟类',
        nickname: '鹦鹉学舌',
        image: '',
        desc: '今天学会了说“你好”，是不是超厉害！'
      }
    ]
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
  },

  // 新增：跳转动态详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
})
