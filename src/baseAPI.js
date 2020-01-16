// console.log('baseAPI 启动了')

//   弹框提示一个无图标的的提示消息
import wepy from 'wepy'
const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1/'

wepy.baseToast = function ( str = '获取数据失败!'){
    wepy.showToast({
        title: str,
        icon: 'none',
        duration: 1500
    })
}
 //  发起get请求的API 函数
wepy.get = function(url, data ={}){
    return  wepy.request({
        url:baseURL + url,
        method:'GET',
        data
    })
}
 //  发起POST请求的API 函数           
wepy.post = function(url, data ={}){
    return  wepy.request({
        url:baseURL + url,
        method:'POST',
        data
    })
}