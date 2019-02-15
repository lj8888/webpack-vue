//这个就是入口文件
//引入vue
import Vue from 'vue';
import './styles/style.scss';
new Vue({
    el:'#app',
    data:{
        msg:'hello',
        abc: '李四'
    }
})