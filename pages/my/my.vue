<template>
  <view>
    <navigator url="../detail/detail">
      My
    </navigator>
    <button type="default" @click="test">
      点击测试emit
    </button>
  </view>
</template>

<script>
  import request from '../../utils/request.js'
  import showMessage from '../../utils/showMessage.js'
  export default {
    data() {  
      return {
        
      };
    },
    onInit() {
      
    },
    mounted(){
      const a = uni.$http.Request('http:127.0.0.1/api/first',{data:1},{token:'111asaxsa'},'POST');
      async function c(){
        const b = await a;
        return b;
      } 
      uni.$show.showMessage("你好啊！");
      const d = getApp();
      console.log(getCurrentPages())
    },
    onPageScroll(){
      console.log("PageScroll")
    },
    onShareAppMessage() {
      console.log("ShareAppMessage")
    },
    onAddToFavorites() {
      console.log("AddToFavorit")
    },
    onShareTimeline() {
      console.log('ShareTimeLine')
    },
    methods:{
      test(){
        uni.$emit("testEmit",{
          num:1,
          name:'SG'
        })
      }
    }
  }
</script> 

<style lang="scss">

</style>
