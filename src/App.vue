<template>
  <div id="app">

    <navigation/>
    <router-view/>
    <foot/>
  </div>
</template>
<script>

import navigation from "../src/components/Nav.vue"
import foot from "../src/components/Foot.vue"

export default {
  components:{
    navigation,
    foot,
  }
}
</script>
<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Ubuntu,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
background-color: #f6f8fa
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
body, html{
  margin:0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
