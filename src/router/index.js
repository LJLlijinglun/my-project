import Vue from 'vue'
import vueRouter from 'vue-router'
import index from '../views/index'
import  Login from '../views/Login'
import UserFile from '../views/user/UserFile'
import  UserList from '../views/user/UserList'
// import  NotFound from '../views/NotFound'

//安装路由
Vue.use(vueRouter)

//配置导出路由
export default new vueRouter({
  //路由方式history 默认方式hash
  mode:'history',
  routes: [

    {
      //首页
      //路由的路径
      path: '/index/:name',//接收name参数
      name: 'index',
      //跳转的组件
      component: index,
      props:true,


      //嵌套路由
      children:[
        //个人信息页 接收参数id 设置props:true为了能够接收传递参数
        {path: '/user/userFile/:id', name:'userFile', component: UserFile,props:true},
        //用户列表页
        {path: '/user/userList', name:'userList', component: UserList},
      ]
    },
    {
      //登录页
      path: '/login',
      name: 'login',

      //跳转的组件
      component: Login,
    },
    //重定向
    {
      path: '/goHome',
      redirect:'/index'
      },

    //实现404报错
    // {
    //   path:'*',
    //   component: NotFound,
    // }


  ]
})
