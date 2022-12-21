<template>
  <div id="conter">
    <div id="canting" class="wow animate__animated animate__fadeInBottomRight animate__slow"></div>
    <div id="about">
        <div class="wow animate__animated animate__fadeInTopLeft" style="margin-bottom: 50px;">
            <p style="font-size: 5rem;font-weight: 300;">Meals</p>
            <p style="color: #898987;font-size: .875rem;line-height: 120%;">饮食</p>
        </div>
        <div class="wow animate__animated animate__fadeInBottomLeft animate__slow">
            <p>the best hotel经贸“一条龙餐饮”是the best企业集团的一家下属私营企业。</p>
            <p>餐厅于6666年2月30日开业,餐厅位于火星公路十七公里处，营业面积约1500平方米，投资额为600万元。</p>
            <p>酒店按赛博坦式风格设计装修，环境优美，格调高雅。</p>
            <p>本餐厅拥有包房23间，大厅2个。</p>
            <p>其中,豪华包房2间，大包房11间，小包房10间，可接纳顾客600余人。</p>
            <p>厨房加工间单独分开，有效的保证所有菜品的卫生质量。</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyFoods',
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    #conter{
        width: 100%;
        height: 651.5px;
        margin-top: 289px;
        display: flex;
    }
    #about{
        width: 665px;
        padding-left: 86px;
        height: 100%;
    }
    #about p{
        margin-bottom: 10px;
        color: #636361;
        font-size: 1rem;
    }
    #canting{
        width: 600px;
        height: 412.5px;
        margin-left: 126px;
        background: url('../../../public/imgs/canting.jpg');
        background-size: 100% 100%;
    }
</style>