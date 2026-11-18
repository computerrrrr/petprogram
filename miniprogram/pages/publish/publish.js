// // pages/publish/publish.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })
Page({
  data: {
    // 分类数据源
    categories: [
      { key: 'cat', emoji: '🐱', name: '猫猫' },
      { key: 'dog', emoji: '🐶', name: '狗狗' },
      { key: 'bird', emoji: '🐦', name: '鸟类' },
      { key: 'exotic', emoji: '🦎', name: '异宠' }
    ],
    // 当前选中的分类
    selectedCategory: 'cat',
  },
  onLoad() {},
  // 新增：切换选中分类交互骨架
  onSelectCategory(e) {
    const key = e.currentTarget.dataset.key;
    if (key === this.data.selectedCategory) return; // 点击已选中的无需重复赋值
    this.setData({
      selectedCategory: key
    });
  }
})
