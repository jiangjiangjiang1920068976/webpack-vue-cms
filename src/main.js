//入口文件
import Vue from 'vue';
//导入vue组件
import app from './app.vue';
//按需导入mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import 'mint-ui/lib/style.css'
//导入mui组件
import './lib/css/mui.css'
var vm = new Vue({
    el:"#app",
    render:e=>e(app),
})