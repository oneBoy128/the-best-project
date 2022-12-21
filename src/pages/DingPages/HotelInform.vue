<!--酒店最上模块信息-->
<template>
  <div id="conter">
    <div id="top_conter">
        <div id="top">
        <el-dialog title="酒店简介" style="overflow: auto;"  top="40px" width="60%" :visible.sync="dialogTableVisible" >
            <div>
                <div style="display:flex;">
                    <img src="../../../public/imgs/hotel.png" style="width:493.8px;height:392px" alt="">
                    <div style="position:relative;left:100px">
                        <img src="../../../public/imgs/the_restroom.jpg" style="width:200.8px;height:156.8px;margin-bottom: 70px;">
                        <img src="../../../public/imgs/nbroom.jpg" style="width:200.8px;height:156.8px">
                    </div>
                </div>
                <p style="margin-top:10px">the best hotel是一家商务、会议型豪华酒店，是金克拉市首家五星级酒店。</p>
                <p style="margin-top:10px">酒店座落在火星球外星镇工业园内，北枕火山，南靠岩浆，毗邻黑洞中心，交通极其便利。</p>
                <p style="margin-top:10px">酒店按赛博坦式风格设计装修，环境优美，格调高雅。</p>
                <p style="margin-top:10px">客房舒适、豪华，餐饮风味独特，各类康乐休闲设施一应俱全，设施先进的商务中心随时为您提供周到、快捷的服务。</p>
                <p style="margin-top:10px">而气势恢宏、功能齐全的国际会展中心更将使您的商务活动取得意想不到的成功!</p>
                <p style="margin-top:10px">当暮色降临时，外星工业园内华光闪烁，幢幢赛博坦式建筑风姿绰约，柔和的光晕洋溢在铜栏杆、古廊柱、大理石上，仿佛一首幽远的歌从上世纪初一直吟唱到今，让您沉醉在一派浓郁的赛博坦风情之中</p>
            </div>
        </el-dialog>
        <div id="jianjie">  
            <p style="font-size:20px;margin-bottom: 6px;">The Best Hotel(火星旅游度假区店)</p>
            <p style="margin-bottom:6px;color:#455873" class="el-icon-location-information">火星，金克拉市，元素太子县，外星镇</p><br>
            <p style="margin-bottom:6px;color:#455873" class="el-icon-office-building" id="shenglve" >装修：the best hotel是一家商务、会议型豪华酒店，是金克拉市首家五星级酒店。酒店座落在火星球外星镇工业园内，北枕火山，南靠岩浆，毗邻黑洞中心，交通极其便利。酒店按赛博坦式风格设计装修，环境优美，格调高雅。客房舒适、豪华，餐饮风味独特，各类康乐休闲设施一应俱全，设施先进的商务中心随时为您提供周到、快捷的服务。而气势恢宏、功能齐全的国际会展中心更将使您的商务活动取得意想不到的成功!当暮色降临时，外星工业园内华光闪烁，幢幢赛博坦式建筑风姿绰约，柔和的光晕洋溢在铜栏杆、古廊柱、大理石上，仿佛一首幽远的歌从上世纪初一直吟唱到今，让您沉醉在一派浓郁的赛博坦风情之中</p>
            <a @click="dialogTableVisible=true" href="javascript:void(0);" style="position:relative;top: -12px; left: -2px;">查看更多</a> 
        </div>
        <div id="yuding">
            <div style="display:flex;padding-top: 13px;" class="animate__animated animate__heartBeat animate__delay-1s animate__repeat-2">
                <p style="font-weight: 700;font-size: 24px;color: #287dfa;text-align: right; margin-right: 5px;">￥100元</p>
                <p style="padding-top: 8px;"><b>起</b></p>
            </div>
            <button id="selectRoom" @click="gotoDing">选择房间</button>
        </div>
    </div>
    <div id="hotelImgs">
        <div style="width: 471.3px;height: 400px;">
            <el-card class="box-card animate__animated animate__fadeInLeft">
                <img src="../../../public/imgs/indoor.png">
            </el-card>
        </div>
        <div style="width:245.3px;height: 400px; margin-left: 80px;">
            <el-card :body-style="{padding:'10px'}" class="box-card small animate__animated animate__fadeInLeft animate__slow">
                <img src="../../../public/imgs/the_restroom.jpg">
            </el-card>
            <el-card :body-style="{padding:'10px'}" class="box-card small animate__animated animate__fadeInLeft animate__slow">
                <img src="../../../public/imgs/qiantai.jpg">
            </el-card>
        </div>
        <div style="width:254.3px;height: 400px; margin-left: 70px;">
            <el-card :body-style="{padding:'10px'}" class="box-card small animate__animated animate__fadeInLeft animate__slower	">
                <img src="../../../public/imgs/qiantai2.png">
            </el-card>
            <el-card :body-style="{padding:'10px'}" class="box-card small animate__animated animate__slideInLeft animate__slower ">
                <img src="../../../public/imgs/swimming_pool.png">
            </el-card>
        </div>
    </div>
    </div>
    <MyRooms/>
  </div>
</template>

<script>
import MyRooms from './MyRooms.vue'
export default {
    name:'HotelInform',
    data() {
        return {
            dialogTableVisible:false
        }
    },
    components:{
        MyRooms
    },
    methods: {
        gotoDing(){
            document.documentElement.scrollTop = 530;
        }
    },
    
}
</script>

<style scoped>
    #conter{
        width: 100%;
        padding: 16px 20px;
    }
    #top_conter{
        width: 100%;
        background-color: #fff;
        padding: 16px 20px;
    }
    #shenglve{
        width: 494px; 
        height: 20px; 
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    #top{
        display: flex;
        justify-content: space-between;
    }
    #jianjie{
        width: 600px;
    }
    #yuding{
        display: flex;
        margin-top: 31px;
        position: relative;
        left: -5px;
    }
    #selectRoom{
        width: 96px;
        height: 40px;
        background: #287dfa;
        border-radius: 2px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        margin-left: 10px;
        cursor: pointer;
    }
    #hotelImgs{
        display: flex;
        padding-top: 10px;
    }
    .box-card img{
        width: 100%;
        height: 100%;
    }
    .box-card.small{
        margin-bottom: 10px;
    }
</style>