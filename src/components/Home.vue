<template>
    <!--起始页面，整个页面的中心-->
  <div>
    <div id="top_nav">
        <h1 style="margin-left:67px; color:rgb(137,137,135)">TheBest酒店</h1>
        <el-menu style="position: sticky; border-bottom: none; background-color:transparent ; margin-right: 40px;" 
        :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  text-color="rgb(12,12,12)" :router="true" :replace="true">
            <el-menu-item class="active el-icon-office-building" index="/">首页</el-menu-item>
            <el-menu-item class="active el-icon-phone-outline" index="/yuding">预定服务</el-menu-item>
            <el-menu-item class="active el-icon-user" index="/mycount/myinform">我的账号</el-menu-item>
            <el-menu-item class="active el-icon-postcard" index="/aboutUs">关于我们</el-menu-item>
        </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'MyHome',
    data() {
        return {
            activeIndex:'/'
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .active:hover{
        animation: jello;
        animation-duration: 0.5s;
    }
    #top_nav{
        display: flex;
        justify-content: space-between;
        text-align: center;
        line-height: 60px;
        position: sticky;
        top: 0px;
        z-index: 9999;
    }
    .el-menu-item.is-active {
      background-color: transparent !important;
    }
</style>
