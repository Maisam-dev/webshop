<template>
  <div>
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
.foot {
  position: fixed;
  bottom: 0;
}

.nav-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--background);
}

/* nav {
  padding: 30px;
} */

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

nav a.router-link-exact-active {
  color: #021d11;
}
html {
  scroll-behavior: smooth;
}
</style>
