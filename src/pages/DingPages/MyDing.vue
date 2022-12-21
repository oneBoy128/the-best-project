<template>
  <div id="conter">
    <HotelInform/>
  </div>
</template>

<script>
import HotelInform from './HotelInform.vue';
export default {
    name:'MyDing',
    data() {
        return {
            
        }
    },
    components:{
        HotelInform
    },
    mounted() {
        this.$store.dispatch('letLoading',JSON.parse(localStorage.getItem('users')))
    },
}
</script>

<style scoped>
    #conter{
        width: 1198.6px;
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 20px;
    }
</style>