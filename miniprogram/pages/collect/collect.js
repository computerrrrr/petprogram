Page({
  data: {
    // 静态mock收藏数据
    collectList: [
      {
        id: 201,
        category: '🐱 猫猫',
        nickname: '布偶猫舍',
        desc: '这神仙颜值谁顶得住啊！太仙了~'
      },
      {
        id: 202,
        category: '🐶 狗狗',
        nickname: '柯基控',
        desc: '小短腿跑起来真的太治愈了，电臀扭扭扭~'
      }
    ]
  },

  onLoad() {},

  // 跳转动态详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
})

