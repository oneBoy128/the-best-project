<template>
  <div id="couter">
    <div id="text">
      <h1 class="animate__animated animate__fadeInUp">The Best Hotel</h1>
      <h1 class="animate__animated animate__fadeInUp animate__slow animate__delay-1s">In Your</h1>
      <h1 class="animate__animated animate__fadeInUp animate__slower animate__delay-1s">Daily Life</h1>
    </div>
    <div id="hotel"></div>
    <div class="animate__animated animate__fadeInUp animate__slower animate__delay-1s" id="touxiang"></div>
  </div>
</template>

<script>
export default {
    name:'TopPage'
}
</script>

<style scoped>
    #couter{
        width: 99%;
        height: 631px;
        display: flex;
        margin-top: 30px;
    }
    #hotel{
        position: relative;
        top: 64px;
        left: 364px;
        width: 76%;
        height: 90%;
        background: url(../../public/imgs/hotel.png) no-repeat;
        background-size: 100% 100%;
    }
    #text{
      position: absolute;
      left: 100px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      z-index: 99;
      font-size: 45px;
    }
    #touxiang{
      position: absolute;
      z-index: 99;
      width: 224px;
      height: 224px;
      background: url(../../public/imgs/doge5.png) no-repeat;
        background-size: 100% 100%;
      top: 462px;
      left: 103px;
      border-radius: 50%;
    }
</style>