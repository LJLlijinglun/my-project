import Vue from 'vue'
import App from './App'
//导入路由文件
import router from './router' //自动扫描路由的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//自己写的样式
// import './style/theme.css';
// import './style/characters.css';

Vue.use(ElementUI);



Vue.config.productionTip = false;
new Vue({
  el: '#app',
  //配置路由
  router,
  renter:h=>h(App),//ElementUi
  components: { App },
  template: '<App/>'
})
