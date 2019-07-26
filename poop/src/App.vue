<template>
  <div id="app">
    <menun></menun>
    <p>不知</p> 
    <!-- 除组件之外的会在每个子页面显示 -->
    <router-view/>
  </div>
</template>
<script>
// app.vue是项目的主题显示
// 导入menu
import menun from './components/menun'
export default {
  name: 'App',
  // 导入menu 成为主页
  components:{
    menun:menun
  }
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
