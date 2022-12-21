<template>
  <div id="conter">
    <div id="myform">
        <el-card class="box-card">
            <el-form :model="form" ref="form" label-width="120px" label-position="left" :rules="rules">
                <el-form-item label="房间名" prop="name">
                    <el-select  @change="fullForm" v-model="form.name" placeholder="请选择房间名">
                        <el-option label="悠闲大床房" value="悠闲大床房"></el-option>
                        <el-option label="太子居室" value="太子居室"></el-option>
                        <el-option label="狗头之家" value="狗头之家"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="房间号" prop="number">
                    <el-input v-model="form.number"></el-input>
                </el-form-item>
                <el-form-item label="价格" >
                    <el-input :disabled="true" v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="房间描述">
                    <el-input :disabled="true" v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加房间</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
    <div style="position:relative;width: 500px;height: 548px;">
        <div id="magicalcard" class="myimg animate__animated animate__fadeOutRight animate__fast" v-show="playmagic && lastName != ''">
        </div>
        <div id="showcard" class="myimg animate__animated animate__fadeIn" v-show="changeCard && lastName != ''">
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'AddRoom',
    data() {
        return {
            form:{
                name:'',
                number:undefined,
                price:undefined,
                description:undefined
            },
            lastName:'',
            changeCard:true,
            playmagic:false,
            roomPhoto:[
                '/imgs/cityRoom.png',
                '/imgs/hotel_room.png',
                '/imgs/hotel_room2.jpg'
            ],
            rules: {
                number: [
                    { required: true, message: '请输入新房间号', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请选择房间名称', trigger: 'change'}
                ],
           }
        }
    },
    methods:{
        onSubmit(){
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    axios({
                        method:'put',
                        url:'http://localhost:8081/hotel/rooms',
                        data:JSON.stringify({number:this.form.number,price:this.form.price,description:this.form.description}),
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                        }).then(resp=>{
                            if(resp.data.flag){
                                this.$alert('添加房间成功!!!!', '提示信息', {
                                    confirmButtonText: '确定',
                                });
                            }else{
                                this.$alert('添加失败房间号不能重复!', '提示信息', {
                                    confirmButtonText: '确定',
                                });
                            }
                        }).catch(err=>{
                        console.log('失败：',err)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        fullForm(){
            let cards = document.querySelectorAll('.myimg')
            if(this.form.name == '悠闲大床房'){
                this.form.price = 100
                this.form.description = '1张5米双人床',
                this.lastName = '悠闲大床房',
                cards[1].style.background = "url("+this.roomPhoto[0]+")"
                cards[1].style.backgroundSize = "cover"
                setTimeout(() => {
                    cards[0].style.background = "url("+this.roomPhoto[0]+")"
                    cards[0].style.backgroundSize = "cover"
                }, 1000);
            }else if(this.form.name == '太子居室'){
                this.form.price = 1000
                this.form.description = '2张500米单人床'
                this.lastName = '太子居室'
                cards[1].style.background = "url("+this.roomPhoto[1]+") no-repeat"
                cards[1].style.backgroundSize = "cover"
                setTimeout(() => {
                    cards[0].style.background = "url("+this.roomPhoto[1]+") no-repeat"
                    cards[0].style.backgroundSize = "cover"
                }, 1000);
            }else{
                this.form.price = 500
                this.form.description = '1张200米双人床'
                this.lastName = '狗头之家'
                cards[1].style.background = "url("+this.roomPhoto[2]+") no-repeat"
                cards[1].style.backgroundSize = "cover"
                setTimeout(() => {
                    cards[0].style.background = "url("+this.roomPhoto[2]+") no-repeat"
                    cards[0].style.backgroundSize = "cover"
                }, 1000);
            }
            this.letchangeCard()
        },
        letchangeCard(){
            if(this.lastName != ''){
                this.playmagic = !this.playmagic
                setTimeout(() => {
                    this.playmagic = !this.playmagic
                }, 500);
            }
            this.changeCard = !this.changeCard
            setTimeout(() => {
                this.changeCard = !this.changeCard
            }, 200);
        }
    },
}
</script>

<style scoped>
    #conter{
        width: 1000px;
        display: flex;
        position: relative;
        justify-content: space-between;
        left: 0;
        right: 0;
        margin: 0 auto;
        margin-top: 97px;
    }
    #myform{
        width: 344px;
        height: 239px;
    }
    .myimg{
        position:relative;
        width: 500px;
        height: 341px;
        bottom: 95px;
    }
    #showcard{
        position: absolute;
        width: 500px;
        height: 548px;
        background-color: red;
    }
    #magicalcard{
        position: absolute;
        width: 500px;
        height: 548px;
        z-index: 99;
    }
</style>