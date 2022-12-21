import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    user: localStorage.getItem('users')===null?{}:JSON.parse(localStorage.getItem('users')),
    isOnline: localStorage.getItem('isOnline'),
    dingHistory:[]
};
const actions = {
    //注册异步请求(吴俊欣实现)
    register(context,value){
        axios({
            method:'post',
            url:'http://localhost:8081/hotel/users',
            data:JSON.stringify({username:value.username,password:value.password}),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(resp=>{
            console.log(resp);
            if(resp.data.flag){
                localStorage.setItem('isOnline',true)
                state.isOnline = true
                context.commit('changeUser',value)
            }
          }).catch(err=>{
            console.log('失败：',err)
          })
    },
    //登录异步请求(吴俊欣实现)
    letLoading(context,value){
        axios({
            method:'post',
            url:'http://localhost:8081/hotel/users/login',
            data:JSON.stringify({username:value.username,password:value.password}),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(resp=>{
            if(resp.data.flag){
                localStorage.setItem('isOnline',true)
                state.isOnline = true
                context.commit('changeUser',resp.data.data)
            }
          }).catch(err=>{
            console.log('失败：',err)
          })
    },
    //修改信息异步请求(吴俊欣实现)
    changeUser(context,value){
        axios({
            method:'put',
            url:'http://localhost:8081/hotel/users/center',
            data:JSON.stringify({password:value.password,gender:value.gender,email:value.email}),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(resp=>{
            if(resp.data.flag){
                localStorage.setItem('isOnline',true)
                state.isOnline = true
                context.commit('changeUser',value)
            }
          }).catch(err=>{
            console.log('失败：',err)
          })
    },
    //充值路由操作(汪博艺实现)
    changerMoney(context,value){
        axios({
            method:'post',
            url:'http://localhost:8081/hotel/users/'+value,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          }).then(resp=>{
            console.log(resp)
            state.user.balance += value;
            localStorage.setItem('users',JSON.stringify(state.user))
          }).catch(err=>{
            console.log('失败：',err)
          })
    },
    //历史订单操作(汪博艺实现)
    TheDing(context){
      axios({
        method:'get',
        url:'http://localhost:8081/hotel/users/center',
        headers:{
          'Content-Type':'application/json;charset=UTF-8'
        }
      }).then(resp=>{
        context.state.dingHistory = resp.data.data.obj;
      })
    },
    //取消订单操作(汪博艺实现)
    cancleDing(context,value){
      console.log(value)
      axios({
        method:'put',
        url:'http://localhost:8081/hotel/users/center/'+value,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(resp=>{
        console.log(resp)
      }).catch(err=>{
        console.log('失败：',err)
      })
    },
    //添加房间(汪博艺实现)
    addRooms(context,value){
        axios({
          method:'put',
          url:'http://localhost:8081/hotel/rooms',
          data:JSON.stringify({number:value.number,price:value.price,description:value.description}),
          headers: {
              'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(resp=>{
          console.log(resp)
        }).catch(err=>{
          console.log('失败：',err)
        })
    }
};
const mutations = {
    changeUser(state,value){
        let obj = {
            id:value.id,
            username:value.username,
            gender:value.gender,
            email:value.email,
            password:value.password,
            balance:value.balance
        }
        state.user = obj
        localStorage.setItem('users',JSON.stringify(obj))
    },
    letReload(state){
        localStorage.removeItem('isOnline')
        localStorage.removeItem('users')
        state.isOnline = null
    }
};

export default new Vuex.Store({
    actions,
    mutations,
    state,
})