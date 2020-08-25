import Vue from 'vue'
import vueRouter from 'vue-router'
import index from '../views/index'
import  Login from '../views/Login'
import UserFile from '../views/user/UserFile'
import  UserList from '../views/user/UserList'

//安装路由
Vue.use(vueRouter)

//配置导出路由
export default new vueRouter({
  routes: [

    {
      //首页
      //路由的路径
      path: '/index',
      name: 'index',
      //跳转的组件
      component: index,

      //嵌套路由
      children:[
        //个人信息页
        {path: '/user/userFile', name:'userFile', component: UserFile},
        //用户列表页
        {path: '/user/userList', name:'userList', component: UserList}
      ]
    },
    {
      //登录页
      path: '/login',
      name: 'login',

      //跳转的组件
      component: Login,
    }

  ]
})
