<template>
  <view>
    My
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
    mounted(){
      const a = uni.$http.Request('http:127.0.0.1/api/first',{data:1},{token:'111asaxsa'},'POST');
      async function c(){
        const b = await a;
        return b;
      } 
      uni.$show.showMessage("你好啊！");
    }
  }
</script>

<style lang="scss">

</style>
