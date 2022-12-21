<template>
  <div>
    <div id="view" v-loading="loading">
            <el-empty v-show="isEmpty" description="没有对应的订单信息"></el-empty>
            <el-table
                height="500"
                :default-sort = "{prop: 'startTime'}"
                v-show="!isEmpty"
                :data="sucding"
                stripe
                style="width: 100%">
                <el-table-column
                prop="id"
                label="订单id"
                width="180">
                </el-table-column>
                <el-table-column
                prop="number"
                label="门牌号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="condition"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="startTime"
                label="起始时间"
                sortable
                >
                </el-table-column>
                <el-table-column
                prop="endTime"
                label="结束时间"
                >
                </el-table-column>
                <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-link  type="primary" @click="tocancle(scope.row.id)">取消预定</el-link>
                </template>
                </el-table-column>
                
            </el-table>
        </div>
  </div>
</template>

<script>
export default {
    name:'SuccessDing',
    data() {
        return {
            sucding:[],
            loading:true
        }
    },
    methods:{
        tocancle(value){
            this.$confirm('确认退房?!!', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                }).then(() => {
                        this.$store.dispatch('cancleDing',value);
                        this.$router.go(0)
                }).catch(()=>{
                        this.$notify({
                        type: 'info',
                        message: '已取消',
                        position: 'bottom-right'
                    });
                })
        }
    },
    computed:{
        isEmpty(){
            if(this.sucding.length == 0){
                return true
            }
            return false
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('TheDing');
            setTimeout(() => {
                this.sucding = this.$store.state.dingHistory.filter(item=>item.condition == '预定成功')
                this.loading = false;
            }, 800);
        }, 200);
    },
}
</script>

<style>

</style>