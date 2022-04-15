<template>
  <view>
    Home
    <view>
      测试emit
      {{test}}
    </view>
  </view>
</template>

<script>  
  export default {
    data() {
      return {
        test:''
      }
    },
    methods:{
      receive(e){
        this.test = e.num + e.name
      }
    },
    mounted() {
      uni.$on("testEmit",this.receive)
    }
  }
</script>

<style lang="scss">

</style>
