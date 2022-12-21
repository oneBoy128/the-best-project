<template>
  <div id="conter2">
    <div id="selectdate">
        <!--选择日期-->
        <el-date-picker
        v-model="mydate" 
        :picker-options="pickerOptions"
        @change="showDate"
        format="yyyy-MM-dd"  
        value-format="yyyy-MM-dd" 
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
    </div>
    <!--存放房间的盒子-->
    <div id="roomConter" v-loading="loading">
        <div id="whenoffline" style="background-color: #fff;" v-if="offline">
            <div id="offlineimage" style="background:url('imgs/cheerup.jpg'); background-size: 100% 100%;">
            </div>
            <div>
                <h1 style="color: #909399;">寄!</h1>
                <h3 style="color: #909399;">网络似乎不能用了捏</h3>
            </div>
        </div>
        <el-empty style="background-color: #fff;" v-else-if="roomList.length == 0"></el-empty>
        <!--存放所有可租用房间信息的盒子-->
        <div v-else id="roomview">
            <!--vue开始遍历-->
            <div class="rooms" v-for="(room,index) in roomList" :key="room.id">
                <!--单独房间的视觉盒子-->
                <div class="roomsViewConter">
                    <!--单独房间视觉盒子的左边盒子-->
                    <div class="roomsViewLeft">
                        <div class="left_img"></div>
                        <div class="roomname">{{roomnames[index]}}</div>
                        <div class="roomfacoty">
                            <span class="roomunderline">{{room.description}}</span>
                            <span class="roomgery">|</span>
                            <span class="roomunderline">{{located[index]}}</span>
                            <span class="roomgery">|</span>
                            <span class="roomunderline">有窗</span>
                            <span class="roomgery">|</span>
                            <span class="roomunderline">禁烟</span>
                        </div>
                    </div>
                    <!--房间右侧盒子-->
                    <div class="roomsViewRight">
                        <div class="ViewRightBox">
                            <div class="sale-pepole">
                                <i class="el-icon-user-solid"></i>
                                <i class="el-icon-user-solid"></i>
                            </div>
                            <div class="breakfirst">
                                2份早餐
                            </div>
                            <div class="youhui">
                                下单后随时可退
                            </div>
                            <!--充当填充-->
                            <div style="width:180px;height:92px">
                                <p style="color:#909399">剩余房间数:{{roomNum[`${room.price}`]}}间</p>
                            </div>
                            <div class="letsgo">
                                <div style="margin-top:30px">
                                    <div class="gomoney">{{spandate}} 天 ￥{{room.price * spandate}}</div>
                                    <div>
                                        <el-tag class="biaoqian" type="danger">今晚大甩卖</el-tag>
                                        <el-tag class="biaoqian" type="warning">五星酒店房间</el-tag>
                                    </div>
                                </div>
                                <el-button type="warning" class='goding' @click="letsDing(room.id)">下单预定</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"MyRooms",
    data() {
        return {
            mydate:[],//存放开始日期和截止日期的数组
            spandate:0,
            loading:false,
            offline:false,
            roomList:[],//存放房间的数组
            roomNum:{},//存放不同类型的房间的数量
            roomPhoto:[//存放房间图片的数组,后面根据id选择对应的数组位置
                '/imgs/cityRoom.png',
                '/imgs/hotel_room.png',
                '/imgs/hotel_room2.jpg'
            ],
            roomnames:[//存放房间名字的数组
                '悠闲大床房',
                '太子居室',
                '狗头之家'
            ],
            located:[//占地面积
                '150-200m²','300-400m²','200-250m²'
            ],
            oneDay:86400000,
            pickerOptions: {
               disabledDate: time => {
                   return (
                       time < new Date()-this.oneDay
                   )
               }
           }
        }
    },
    methods: {
        //选择完日期后显示对应的可租房间
        showDate(){
            this.spandate = ((new Date(this.mydate[1])-new Date(this.mydate[0]))/(1000*3600*24))
            this.roomList = [];
            this.loading = true
            setTimeout(() => {
                axios({
                    method:'post',
                    url:'http://localhost:8081/hotel/rooms',
                    timeout:3000,
                    data:JSON.stringify({
                        "startTime":this.mydate[0],
                        "endTime":this.mydate[1],
                        "days":this.spandate
                    }),
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }).then(resp=>{
                    this.unique(resp.data.data);
                    setTimeout(() => {
                        this.offline = false
                    }, 500);
                }).catch(err=>{
                    console.log(err)
                    this.offline = true
                    this.loading = false
                })
            }, 100);
        },
        unique(data){
            let result = {};//去重的对象
            this.roomNum = {};
            for(let i=0;i<data.length;i++){
                result[data[i].price]=data[i];
                if(this.roomNum[data[i].price]){
                    this.roomNum[data[i].price]++
                }else{
                    this.roomNum[data[i].price] = 1;
                }
            }
            for(let item in result){
                this.roomList.push(result[item]);
            }
            this.roomList.sort(function(a,b){
                if(a.id === b.id){
                    return b.price - a.price
                }else{
                    return a.price - b.price
                }
            })
            setTimeout(() => {
                this.changeBackground()
                setTimeout(() => {
                    this.loading = false
                }, 800);
            }, 800);
        },
        //根据房间id更换对应的背景图片
        changeBackground(){
            let left_imgs = document.querySelectorAll('.left_img');
            left_imgs.forEach((item,index)=>{
                item.style.background = "url("+this.roomPhoto[index]+")"
                item.style.backgroundSize = '100% 100%'
            })
        },
        letsDing(value){
            this.$confirm('你确定要预定吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.letsAxios(value);
                    }).catch(() => {
                    this.$notify({
                        type: 'info',
                        message: '已取消预定',
                        position: 'bottom-right'
                    });          
            });
            console.log(value)
        },
        letsAxios(value){
            axios({
                    method:'put',
                    url:'http://localhost:8081/hotel/rooms/'+value,
                    timeout:3000,
                    data:JSON.stringify({
                        "startTime":this.mydate[0],
                        "endTime":this.mydate[1],
                        "days":this.spandate
                    }),
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }).then(resp=>{
                    if(resp.data.flag){
                        this.$alert('支付成功1秒后跳跳转至订单信息', '页面跳转');
                        setTimeout(()=>{
                            this.$router.replace('/mycount/myhistory/allding')
                        },2000)
                    }else{
                        this.$alert('支付失败余额不足', '提示');
                    }
                }).catch(err=>{
                    console.log(err)
                    this.offline = true
                })
        },
    },
    mounted(){
    }
}
</script>

<style scoped>
    #conter2{
        width: 1239px;
        margin-top: 20px;
        padding: 10px 0;
    }
    #selectdate{
        background-color: #fff;
        width: 100%;
        padding: 10px 0;
    }
    #roomConter{
        margin-top: 11px;
        width: 100%;
    }
    #roomview{
        width: 100%;
    }
    #whenoffline{
        width: 100%;
        height: 274px;
        text-align: center;
    }
    #offlineimage{
        width: 166px;
        height: 120px;
        position: relative;
        /* background: url('../../../public/imgs/cheerup.jpg');
        background-size: 100% 100%; */
        left: 0;
        right: 0;
        margin: 0 auto;
        padding-top: 35px;
    }
    #offlineimage img{
        width: 100%;
        height: 100%;
    }
    .rooms{
        width: 1191px;
        height: 209px;
        padding: 24px 24px 0;
        background-color: #fff;
        margin-top: 5px;
    }
    .roomsViewConter{
        display: flex;
        width: 100%;
        height: 185px;
        padding-bottom: 24px;
    }
    .roomsViewLeft{
        border-right: 1px solid #dadfe6;
        height: 100%;
        max-width: 204px;
        width: 204px;
        box-sizing: border-box;
        padding-right: 24px;
    }
    .roomsViewRight{
        width: 786px;
        flex: 1;
        height: 185px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .left_img{
        width: 150px;
        height: 111px;
    }
    .roomname{
        width: 180px;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #0f294d;
        padding: 6px 0;
        padding-top: 10px;
    }
    .roomfacoty{
        color: #0f294d;
        font-size: 14px;
        padding-bottom: 7.5px;
        margin-top: -3.5px;
    }
    .roomunderline{
        display: inline-block;
        padding-bottom: 1px;
    }
    .roomgery{
        padding: 0 5px;
        color: #d1d5db;
    }
    .ViewRightBox{
        width: 100%;
        display: flex;
        height: 92px;
        padding-left: 24px;
    }
    .sale-pepole{
        width: 77px;
        font-size: 16px;
        padding-right: 24px;
        color: #93969a;
    }
    .breakfirst{
        width: 119px;
        height: 21px;
        color: #06aebd;
    }
    .youhui{
        width: 130px;
        height: 92px;
        padding-right: 30px;
        color: #06aebd;
    }
    /*开始预定盒子的样式！！！ */
    .letsgo{
        display: flex;
    }
    .gomoney{
        font-weight: 700;
        height: 30px;
        font-size: 24px;
        color: #287dfa;
        text-align: right; 
        margin-right: 5px;
        margin-bottom: 20px;
    }
    /*标签群的css*/
    .biaoqian{
        height: 30px;
    }
    .goding{
        width: 160px;
        height: 80px;
        margin-top: 30px;
        margin-left: 15px;
    }
</style>