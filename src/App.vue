<template>
  <div class="content">
    <nav-bar class="nav-bar"></nav-bar>
    <router-view />
    <total-bar class="foot"></total-bar>
  </div>
</template>

<script setup>
import totalBar from "./components/totalBar.vue";
import navBar from "./components/navBar.vue";
</script>

<style>
/* .content {
  position: relative;
} */

.foot {
  position: fixed;
  bottom: 0;
}

.nav-bar {
  position: fixed;
  top: 0;
  z-index: 1000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0f1f18;
}
html {
  scroll-behavior: smooth;
}
</style>
