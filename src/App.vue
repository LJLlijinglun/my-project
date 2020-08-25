<template>
  <div id="app">
<!--    点击首页，router-link就会去找main.js文件，main就会去找router文件，router就会找到要跳转的相应组件-->
<!--    <h1>Vue-Router</h1>-->
<!--    <router-link to="/main">首页</router-link>-->
<!--    <router-link to="/content">内容页</router-link>-->
<!--    <router-link to="/ljl">李静伦主页</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
