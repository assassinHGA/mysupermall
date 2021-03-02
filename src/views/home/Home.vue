<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>    <!--指定插槽替换-->

    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'


  export default {
    name: "Home",
    components: {
      NavBar
    },

    
  }
</script>

<style scoped>
    .home-nav {
      background-color: var(--color-tint);      /*使用css文件中定义好的参数*/
      color: #fff;
    }
</style>
