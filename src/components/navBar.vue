<template>
  <div class="content">
    <nav>
      <router-link :to="{ name: 'homePage' }">Home</router-link>
      <router-link :to="{ name: 'cartPage' }">Cart</router-link>
      <router-link :to="{ name: 'abautPage' }">abaut</router-link>
    </nav>
    <CartSymbol></CartSymbol>
  </div>
</template>
<script setup>
import CartSymbol from "./cartSymbol.vue";
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(100, 174, 177);
  border: 1px solid rgb(9, 48, 49);
  border-radius: 20px;
  margin-top: 10px;
  width: 98%;
  nav {
    display: flex;
    gap: 20px;
    width: 400px;
  }
}
</style>
