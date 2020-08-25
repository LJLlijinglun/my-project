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
}
</script>

<style scoped>

</style>
