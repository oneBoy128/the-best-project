<!-- 用户的历史订单 -->
<template>
    <div style="margin-top:20px">
        <div id="conters" style="height:39px;">
            <div @click="changeView"><router-link id="active"  class="links" to="/mycount/myhistory/allding">全部订单</router-link></div>
            <div @click="changeView"><router-link class="links" to="/mycount/myhistory/successding">成功的订单</router-link></div>
            <div @click="changeView"><router-link class="links" to="/mycount/myhistory/cancel">已取消的订单</router-link></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name:'MyHistory',
    data() {
        return {
            
        }
    },
    methods: {
        changeView(value){
            let buts = document.querySelectorAll('.links')
            buts.forEach(item=>item.id = '')
            value.target.id = 'active'
        },
    },
}
</script>

<style scoped>
    .links{
        transition: 1s;
        margin-right: 178px;
        line-height: 37px;
        font-size: 18px;
        color: #666;
        text-align: center;
    }
    #active{
        transition: 1s;
        line-height: 37px;
        background-color: #ffffff;
        font-size: 18px;
        color: #409EFF;
        text-align: center;
    }
    #conters{
        display: flex;
    }
</style>