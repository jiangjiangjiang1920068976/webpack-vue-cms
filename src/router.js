
//1、导入vue-router包
import VueRouter from 'vue-router'

//导入account组件
import account from './main/account.vue'
//导入goodList组件
import goodList from './main/goodList.vue'
//导入account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//3、创建路由对象
var routerObj = new VueRouter({
    routes:[
        {path:'/account',
        component:account,
        children:[
            {path:'login',component:login},
            {path:'register',component:register}
            ]
        },
        {path:'/goodList',component:goodList}
    ]
})
//使用ES6将路由对象暴露出去
export default routerObj