Page({
  data: {
    detailData: null
  },

  onLoad(options) {
    const id = options.id ? Number(options.id) : 0;
    
    // 静态模拟全量数据池（仅做骨架演示，实际由接口返回）
    const mockDatabase = [
      { id: 1, category: '🐱 猫猫', nickname: '橘猫大人', image: '', desc: '今天又重了半斤，沙发都快装不下我了，求轻喷~' },
      { id: 2, category: '🐶 狗狗', nickname: '修勾日记', image: '', desc: '出门遛弯啦！阳光正好，微风不燥，汪汪~' },
      { id: 3, category: '🐦 鸟类', nickname: '鹦鹉学舌', image: '', desc: '今天学会了说“你好”，是不是超厉害！' },
      { id: 10, category: '猫猫', nickname: '猫猫爱好者', image: '', desc: '这是一只非常可爱的猫猫，每天都在快乐地成长！' },
      { id: 20, category: '狗狗', nickname: '资深狗狗铲屎官', image: '', desc: '分享一些养狗狗的日常小贴士，希望对大家有帮助~' },
      { id: 101, category: '🐱 猫猫', nickname: '宠物爱好者', image: '', desc: '我家橘猫今天又睡了一天，雷打不动~' },
      { id: 102, category: '🐶 狗狗', nickname: '宠物爱好者', image: '', desc: '带着修勾去海边浪啦，开心到飞起！' }
    ];

    // 根据 id 查找对应数据
    const detailData = mockDatabase.find(item => item.id === id) || mockDatabase[0];

    this.setData({ detailData });
  }
})
