/** 目的：
 * 1. 封装showToast
 * 2. 封装showLoading
 * 3. 
 */ 
const $show = {}

$show.showMessage = function (TITLE){
  uni.showToast({
    title:TITLE
  })
}

uni.$show = $show;