<template>
  <div>
    <div id="view" v-loading="loading">
            <el-empty v-show="isEmpty" description="没有对应的订单信息"></el-empty>
            <el-table
                height="500"
                v-show="!isEmpty"
                :data="cancel"
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
                label="结束时间">
                </el-table-column>
            </el-table>
        </div>
  </div>
</template>

<script>
export default {
    name:'CancelDing',
    data() {
        return {
            cancel:[],
            loading:true
        }
    },
    computed:{
        isEmpty(){
            if(this.cancel.length == 0){
                return true
            }
            return false
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.dispatch('TheDing');
            this.cancel = this.$store.state.dingHistory.filter(item=>item.condition == '已取消')
            setTimeout(() => {
                this.loading = false;
            }, 800);
        }, 200);
    },
}
</script>

<style>
</style>