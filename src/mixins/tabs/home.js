   import wepy from 'wepy'

   export default  class extends wepy.mixin {
    data = {
        swiperList: [],
        cateItems: [],
        floorData:[]
    
      };
      onLoad() {
        // console.log(1);
        this.getSwiperData();
        this.getCateItems();
        this.getFloorData();
      }
       
       methods = {
          //  单击图片进入商品页面
         goGoodsList(url) {
         wepy.navigateTo({
           url
         })
         }
       }
      //  获取轮播图数据
      async getSwiperData() {
        // const { data: res } = await wepy.request({
        //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
        //   data: {},
        //   method: 'GET'
        // });
        // console.log(res);
        const { data: res } = await wepy.get('home/swiperdata');
    
        if (res.meta.status !== 200) {
          //  return console.log('获取轮播图失败')
          return wepy.baseToast();
        }
        this.swiperList = res.message;
        // console.log(this.swiperList);
        this.$apply();
      }
      // 获取首页分类相关的数据项
      async getCateItems() {
        // const { data: res } = await wepy.request({
        //    url:'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
        //    data:{},
        //    method:'GET'
        // });
        const { data: res } = await wepy.get('home/catitems');
    
        if (res.meta.status !== 200) {
          return wepy.baseToast();
        }
    
        this.cateItems = res.message;
        this.$apply();
      }
      //  获取楼层数据
       async getFloorData() {
        const  { data :res }  = await wepy.get('home/floordata');
    
        if ( res.meta.status !== 200 ){
          return wepy.baseToast()
        }
        this.floorData = res.message;
        this.$apply()
        console.log(this.floorData)
      }
     
  }
