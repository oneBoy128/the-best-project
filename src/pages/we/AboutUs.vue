<!-- 个人简介娱乐娱乐 -->
<template>
  <div id="yu_le">
    <div id="wjx">
      <div id="txwjx" class="touxiang animate__animated animate__slideInLeft animate__fast"></div>
      <div class="jianjie animate__animated animate__rotateInDownLeft animate__slower">
        <h1 class="animate__animated animate__bounceInUp">小组成员:<span style="margin-left: 69px;">吴俊欣</span></h1>
        <h1 class="animate__animated animate__bounceInUp animate__slow">学号:<span style="margin-left: 69px;">2020214684</span></h1>
        <h1 class="animate__animated animate__bounceInUp animate__slower">主要任务:<br><span>数据库设计、用户模块、登录注册模块、查询房间模块、预定房间模块</span></h1>
      </div>
    </div>
    <div id="wby">
      <div class="jianjie wow animate__animated animate__rotateInDownRight">
        <h1 class="wow animate__animated animate__bounceInDown">小组成员:<span style="margin-left: 69px;">汪博艺</span></h1>
        <h1 class="wow animate__animated animate__bounceInDown animate__slow">学号:<span style="margin-left: 69px;">2020214677</span></h1>
        <h1 class="wow animate__animated animate__bounceInDown animate__slower">主要任务:<br><span>页面布局设计、用户模块、充值模块、支付模块、主页模块、订单信息模块</span></h1>
      </div>
      <div id="txwby" class="touxiang wow animate__animated animate__fadeInTopLeft"></div>
    </div>
  </div>
</template>

<script>

export default {
  name:'AboutUs',
  data() {
    return {
      
    }
  },
  mounted() {
    this.$wow.init();
  },
}
</script>

<style scoped> 
  #yu_le{
    margin-top: 30px;
    width: 100%;
    padding-bottom: 30px;
  }
  #wjx{
    width: 100%;
    height: 580px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    display: flex;
  }
  #wby{
    width: 100%;
    height: 565px;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    display: flex;
  }
  .touxiang{
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-top: 80px;
  }
  #txwjx{
    background: url(../../../public/imgs/lione.gif) no-repeat;
    background-size: 100% 100%;
    margin-left: 50px;
  }
  #txwby{
    position: relative;
    background: url(../../../public/imgs/doge4.png) no-repeat;
    background-size: 100% 100%;
    left: 24px;
  }
  #wjx .jianjie{
    margin-left: 104px;
  }
  h1{
    position: relative;
    margin-top: 80px;
    margin-bottom: 120px;
  }
  #wby .jianjie{
    position: relative;
    margin-left: 30px;
  }
</style>