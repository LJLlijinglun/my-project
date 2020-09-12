<template>
<!--  所有的参数都不能直接写在根节点下-->
  <div>
    <h1>个人信息页</h1>
<!--    1、接受参数方法一：通过router取参数-->
<!--    {{$route.params.id}}-->
    {{id}}
  </div>

</template>

<script>
export default {
  name: "UserFile",
  // 2、接收参数方法二
  props:['id'],
  data(){
    return{

    }
  },
  // 进入路由之前执行的钩子
  beforeRouteEnter:(to,from,next)=>{
    console.log("进入路由之前")//加载数据
    next(vm => {
      vm.getData();//进入路由之前执行getData
    });
  },
  // 进入路由之后执行的钩子
  beforeRouteLeave:(to,from,next)=>{
    console.log("进入路由之后")
    next();

  },
  methods:{
    getData:function (){
      this.axios({
        method:'get',
        url:'http://localhost:8082/static/mock/data.json'
      }).then(function (response){
        console.log(response);
      })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
