<template>
  <div id="conter">
    <div id="top">
        <!-- <div id="logo"></div> -->
        <div id="wenzi" style="margin-left:15px">
            <h2 style="padding:37px 0px 15px;color:#ffffff;font-weight:600;">我的钱包</h2>
            <span style="color:#ffffff;font-weight:600;margin-right: 20px;">用户名: {{this.$store.state.user.username}}</span>
            <span style="color:#ffffff;font-weight:600;">用户id: {{this.$store.state.user.id}}</span>
        </div>
    </div>
    <div id="view">
        <div id="submoney">
            <p style="color: #666;font-size: 20px;margin-bottom: 20px; position: relative; left: -145px;">充值窗口</p>
            <div id="chong">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button @click="chongzhi" style="width:163px;height:60px;margin-left: 122px;position: relative;bottom: 10px;" type="primary">充值</el-button>
            </div>
        </div>
        <div id="money">
            <p style="color: #666;font-size: 20px;">现金余额</p>
            <div style="margin-top: 45px; margin-left:67px">
                <em style="color:#f57403;font-size: 18px;">{{this.money}}</em><em style="margin-left:3px">元</em>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MyMoney",
    data() {
        return {
            money:this.$store.state.user.balance,
            value:0,
            options:[
                {
                    value:10,
                    label:'10元'
                },
                {
                    value:30,
                    label:'30元'
                },
                {
                    value:50,
                    label:'50元'
                },
                {
                    value:100,
                    label:'100元'
                },
                {
                    value:300,
                    label:'300元'
                },
                {
                    value:500,
                    label:'500元'
                },
                {
                    value:1000,
                    label:'1000元'
                }
            ]
        }
    },
    methods:{
        chongzhi(){
            this.$confirm('确认充值吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        if(this.value === 0){
                            this.$notify.error({
                                title: '错误',
                                message: '请选择输入金额',
                                position: 'bottom-right'
                            });
                        }
                        else{
                            this.$store.dispatch('changerMoney',this.value)
                            const loading = this.$loading({
                                lock: true,
                                text: '请等待.......',
                                background: 'rgba(0, 0, 0, 0.7)'
                            });
                            setTimeout(() => {
                                loading.close();
                                this.$router.go(0);
                            }, 1000);
                        }
                    }).catch(() => {
                    this.$notify({
                        type: 'info',
                        message: '已取消充值',
                        position: 'bottom-right'
                    });          
                });
        }
    },
    mounted() {
        this.$store.dispatch('letLoading',JSON.parse(localStorage.getItem('users')))
    },
}
</script>

<style scoped>
    #top{
        display: flex;
        width: 100%;
        height: 125px;
        background-color: rgb(84, 173, 255);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    #logo{
        width: 150px;
        height: 288px;
        background-color: rgb(84, 173, 255);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    #view{
        display: flex;
        width: 990px;
        height: 131px;
        padding: 15px 5px;
        border-bottom-left-radius: 10px;
        border: 1px solid #e6e6e6;
    }
    #submoney{
        width: 75%;
        height: 100%;
        margin-left: 161px;
        border-right: 1px dashed #e6e6e6;
    }
    #money{
        width: 25%;
        height: 100%;
        padding: 0 5% 0 4%;
    }
    #chong{
        width: 100%;
        height: 100%;
        display: flex;
        margin-left: -46px;
    }
</style>