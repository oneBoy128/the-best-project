import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import MyCount from '../pages/user/MyCount.vue'
import MyHistory from '../pages/user/MyHistory.vue'
import MyInfrom from '../pages/user/MyInform.vue'
import MyFix from '../pages/user/MyFix.vue'
import AboutUs from '../pages/we/AboutUs.vue'
import Register from '../components/Register.vue'
import YeMian from '../pages/zhuye/YeMian.vue'
import MyDing from '../pages/DingPages/MyDing.vue'
import MyMoney from '../pages/user/MyMoney.vue'
import AllDing from '../pages/user/AllDing.vue'
import CancelDing from '../pages/user/CancelDing.vue'
import SuccessDing from '../pages/user/SuccessDing.vue'
import IndoorPage from '../pages/zhuye/IndoorPage.vue'
import OutdoorPage from '../pages/zhuye/OutdoorPage.vue'
import AddRoom from '../pages/user/AddRoom.vue'


const router = new VueRouter({
    routes:[
        {
            path:'/',
            meta:{isAuth:true},
            component:Home,
            redirect:'/yemian',
            children:[
                {   
                    //这是param参数的接受要求，首先要申明name然后在path上用：进行占位操作
                    path:'mycount',
                    name:'Login',
                    meta:{isAuth:true,requiresAuth: true},
                    component: MyCount,
                    //可在params参数的传递中直接配置props进行参数的简化，后继可以直接props接受使用
                    props:true,
                    children:[
                        {
                            path:'myhistory',
                            meta:{isAuthenticated:true},
                            component: MyHistory,
                            children:[
                                {
                                    path:'allding',
                                    component:AllDing
                                },
                                {
                                    path:'cancel',
                                    component:CancelDing
                                },
                                {
                                    path:'successding',
                                    component:SuccessDing
                                }
                            ]
                        },
                        {
                            path: 'myinform',
                            meta:{isAuth:true,isAuthenticated:true},
                            component: MyInfrom
                        },
                        {
                            path:'myfix',
                            meta:{isAuthenticated:true},
                            component:MyFix
                        },
                        {
                            path:'mymoney',
                            component:MyMoney
                        },
                        {
                            path:'addroom',
                            component:AddRoom
                        }
                    ]
                },
                {
                    path:'aboutUs',
                    meta:{isAuth:true},
                    component: AboutUs
                },
                {
                    path:'yemian',
                    component:YeMian,
                    meta:{isAuth:true}
                },
                {
                    path:'yuding',
                    component:MyDing,
                    meta:{isAuth:true,isAuthenticated:true}
                },
                {
                    path:'indoor',
                    component:IndoorPage,
                    meta:{isAuth:true}
                },
                {
                    path:'outdoor',
                    component:OutdoorPage,
                    meta:{isAuth:true}
                }
            ]
        },
        {
            path:'/register',
            name:'register',
            component:Register
        }
    ],
})

router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    if(to.meta.isAuthenticated){
        const isOnline = localStorage.getItem("isOnline")
        if(isOnline){
            document.documentElement.scrollTop = 0;
            next()
        }else{
            if(confirm('该功能需要登陆，你要登陆吗？')) router.push({path:'/register'})
        }
    }else{
        if(to.meta.isAuth){
            document.documentElement.scrollTop = 0;
        }
        next()
    }
});


export default router