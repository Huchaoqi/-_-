import wepy from 'wepy';

export default class extends wepy.mixin {
  data = {
    //  所有分类的列表
    cateList: [],
    //  当前激活分类索引
    activeKey: 0,
     //  当前屏幕的高度
    wh:0
  }

  onLoad() {
    
    this.getWindowHeight();
    this.getCateList();
  }

  methods = {
    onChange(e) {
         console.log(e.detail)
    }
  }
  //  获取分类列表数据
  async getCateList() {
    const { data: res } = await wepy.get('categories');

    if (res.meta.status !== 200) {
      return wepy.baseToast();
    }
    // console.log(res)
    this.cateList = res.message;
    this.$apply();
    // console.log(this.cateList)
  }
   //  动态获取当前屏幕的高度
  async getWindowHeight() {
     const res =  await  wepy.getSystemInfo()
      console.log(res)
      if(res.errMsg === 'getSystemInfo:ok') {
        this.wh = res.windowHeight
        this.$apply()
      }
  }
}
