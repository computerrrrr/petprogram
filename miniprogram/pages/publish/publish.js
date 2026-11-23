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

    // 新增：图片预览列表
    imageList: [],

    // 新增：文本输入内容
    content: ''
  },
  onLoad() {},
  // 新增：切换选中分类交互骨架
  onSelectCategory(e) {
    const key = e.currentTarget.dataset.key;
    if (key === this.data.selectedCategory) return; // 点击已选中的无需重复赋值
    this.setData({
      selectedCategory: key
    });
  },

   // 新增：选择图片交互骨架
  onChooseImage() {
    const currentCount = this.data.imageList.length;
    const maxCount = 9; // 最多支持9张图
    const remainingCount = maxCount - currentCount;

    if (remainingCount <= 0) {
      wx.showToast({ title: '最多上传9张图片', icon: 'none' });
      return;
    }

    wx.chooseMedia({
      count: remainingCount,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 提取临时文件路径
        const tempFilePaths = res.tempFiles.map(file => file.tempFilePath);
        this.setData({
          imageList: [...this.data.imageList, ...tempFilePaths]
        });
      },
      fail: (err) => {
        // 用户取消选择时不做处理
        if (err.errMsg.indexOf('cancel') === -1) {
          wx.showToast({ title: '选择图片失败', icon: 'none' });
        }
      }
    });
  },

  // 新增：删除预览图片交互骨架
  onDeleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const imageList = this.data.imageList;
    imageList.splice(index, 1);
    this.setData({ imageList });
  },

  // 新增：文本输入双向数据绑定
  onContentInput(e) {
    this.setData({
      content: e.detail.value
    });
  },

  // 新增：提交按钮点击事件骨架
  onSubmit() {
    const { selectedCategory, imageList, content } = this.data;
    
     // 1. 表单校验骨架
    if (!selectedCategory) {
      wx.showToast({ title: '请选择宠物分类', icon: 'none' });
      return; // 阻止后续逻辑
    }
    
    // 去除首尾空格后校验正文是否为空
    if (!content.trim()) {
      wx.showToast({ title: '请填写正文描述', icon: 'none' });
      return; // 阻止后续逻辑
    }

    // 2. 校验通过，继续执行原有打印表单逻辑
    console.log('=== 发布表单数据收集 ===');
    console.log('选中分类:', selectedCategory);
    console.log('图片列表:', imageList);
    console.log('输入文本:', content);
    
    // 3. 显示成功提示
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 1500
    });

    // 4. 延时跳转回首页
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }, 1500);
  }
})
