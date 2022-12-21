<!-- 用户的个人中心 -->
<template>
  <div id="mycount">
    <div id="cd">
        <div class="animate__animated animate__rubberBand" id="touxiang"></div>
        <el-row>
            <el-col :span="24">
                <el-menu class="el-menu-vertical-demo" @select="handleOpen" replace :router="true" :default-active="activeIndex" :unique-opened="true">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>个人中心</span>
                        </template>
                        <el-menu-item-group>
                        <template></template>
                        <el-menu-item index="/mycount/myinform">个人信息</el-menu-item>
                        <el-menu-item><router-link :to="{
                            path:'/mycount/myfix',
                            query:{
                                username: user.username,
                                email: user.email,
                                gender: user.gender,
                                password: user.password
                            }
                        }">修改个人信息</router-link></el-menu-item>
                        <el-menu-item @click="reload">注销</el-menu-item>
                        <el-menu-item v-show="isAdmin" index="/mycount/addroom">添加房间</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-s-shop"></i>
                        <span>我的钱包</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="/mycount/myhistory/allding">历史订单</el-menu-item>
                        <el-menu-item index="/mycount/mymoney">我的余额</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    <div id="conter"><router-view></router-view></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'MyCount',
    data() {
        return {
            activeIndex:this.$route.path
        }
    },
    methods: {
        handleOpen(key, keyPath){
            this.defaults = keyPath[1]
        },
        reload(){
            this.$confirm('注销账号?这会导致你重新登陆!!', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$store.commit('letReload');
                        this.$router.push({path:'/'})
                    }).catch(()=>{
                        this.$notify({
                            type: 'info',
                            message: '已取消',
                            position: 'bottom-right'
                        });
                    })
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$wow.init()
        })
        this.$store.dispatch('letLoading',JSON.parse(localStorage.getItem('users')))
    },
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
    #mycount{
        width: 1300px;
        height: 660px;
        padding-top: 40px;
        top:20px;
        margin-top: 20px;
        background-color: rgb(255, 255, 255);
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
    }
    #cd{
        width: 155px;
        border-right: 1px solid rgb(230, 230, 230);
    }
    .el-submenu .el-menu-item {
        height: 50px;
        line-height: 50px;
        padding: 0 0px;
        min-width: 131px;
    }
    #touxiang{
        position: relative;
        width: 109px;
        height: 109px;
        border-radius: 50%;
        background: url(../../../public/imgs/tx1.png) no-repeat;
        background-size: 100% 100%;
        border: 1px solid rgb(230, 230, 230);
        left: 0;
        right: 0;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    #conter{
        width: 1000px;
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>