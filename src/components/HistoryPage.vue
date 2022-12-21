<template>
  <div id="conter">
    <div id="about">
        <div class="wow animate__animated animate__fadeInTopLeft" style="margin-bottom: 50px;">
            <p style="color:#898987;font-size:1rem;margin-bottom: 14px;">关于酒店</p>
            <p style="color:#282823;font-size:2rem">the best hotel</p>
            <p style="color:#282823;font-size:2rem">一家十分优秀的酒店</p>
        </div>
        <div class="wow animate__animated animate__fadeInBottomLeft animate__slow">
            <p>the best hotel是一家商务、会议型豪华酒店，是金克拉市首家五星级酒店。</p>
            <p>酒店座落在火星球外星镇工业园内，北枕火山，南靠岩浆，毗邻黑洞中心，交通极其便利。</p>
            <p>酒店按赛博坦式风格设计装修，环境优美，格调高雅。</p>
            <p>客房舒适、豪华，餐饮风味独特，各类康乐休闲设施一应俱全，设施先进的商务中心随时为您提供周到、快捷的服务。</p>
            <p>而气势恢宏、功能齐全的国际会展中心更将使您的商务活动取得意想不到的成功!</p>
            <p>当暮色降临时，外星工业园内华光闪烁，幢幢赛博坦式建筑风姿绰约，柔和的光晕洋溢在铜栏杆、古廊柱、大理石上，仿佛一首幽远的歌从上世纪初一直吟唱到今，让您沉醉在一派浓郁的赛博坦风情之中</p>
        </div>
    </div>
    <div id="roomp" class="wow animate__animated animate__fadeInBottomRight animate__slow"></div>
  </div>
</template>

<script>
export default {
    name:'HistoryPage',
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
    #conter{
        width: 100%;
        height: 412.5px;
        margin-top: 150px;
        display: flex;
    }
    #about{
        width: 665px;
        padding-left: 86px;
        height: 100%;
    }
    #about p{
        margin-bottom: 10px;
        color: #636361;
        font-size: 1rem;
    }
    #roomp{
        width: 600px;
        height: 412.5px;
        margin-left: 126px;
        background: url(../../public/imgs/the_bathroom.jpg) no-repeat;
        background-size: 100% 100%;
    }
</style>