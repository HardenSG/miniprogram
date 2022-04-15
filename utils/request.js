// import { $http } from '@escook/request-miniprogram'

var $http = {}
/*
  *需求1. 发起各种请求：建议为传入方式
  *需求2. 参数自定义：建议为传入方式
  *需求3. 返回为promise对象，使用aysnc + await接收，并解构赋值
  *需求4. 
*/

$http.Request = function(URL,DATA,HEADER,METHOD){
  
  uni.showLoading({
    title:"加载中..."
  })
  // 返回promise对象格式
  return new Promise((resolve,reject)=>{
    uni.request({
      url:URL,
      data:DATA,
      header:HEADER,
      method:METHOD,
      success:(res)=>{
        resolve(res)
      },
      complete() {
        uni.hideLoading();
        uni.showToast({
          title:'看来出错了！'
        })
      }
    })
  })
}

// 挂载$http
uni.$http = $http;







































