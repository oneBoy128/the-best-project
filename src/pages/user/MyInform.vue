<!-- 用户的个人信息模块 -->
<template>
    <div id="card">
        <el-card class="box-card">
            <div id="card_lan">
                <div><i class="el-icon-user-solid"> </i>姓名：{{user.username}}</div>
                <div><i class="el-icon-key"> </i> 性别：{{user.gender}}</div>
                <div><i class="el-icon-lock"> </i> 密码: {{user.password}}</div>
                <div><i class="el-icon-message"> </i> 注册邮箱：{{user.email}}</div>
                <div v-show="isAdmin"><i class="el-icon-s-custom"></i> 身份 : <span style="color:#E6A23C">管理员</span></div>
            </div>
        </el-card>
    <div id="card_touxiang">
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        name:'MyInform',
        computed:{
            ...mapState(['user']),
            isAdmin(){
                if(this.user.username == 'admin') return true;
                return false
            }
        }
    }
</script>

<style scoped>
    .box-card div{
        margin-bottom: 29px;
        margin-top: 55px;
    }
    .box-card{
        width: 900px;
        position: relative;
        top: 49px;
        left: 47px;
        animation: bounceInUp;
        animation-duration: 1.5s;
    }
    #card_lan i{
        color: #93969a;
        padding-right: 20px;
    }
    #card_touxiang{
        width: 254px;
        height: 245px;
        background: url(../../../public/imgs/tx1.png) no-repeat;
        background-size: 100% 100%;
        box-shadow: 5px 5px 10px 1px rgb(135, 132, 132);
        position: relative;
        top: -349px;
        right: -761px;
        animation: bounceIn;
        animation-duration: 1s;
    }

</style>