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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--bar);
  border: 1px solid rgb(9, 48, 49);
  border-radius: 15px;
  margin: 1% 1%;
  width: 98%;
  nav {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    min-width: 50%;
  }
}
nav > *:hover {
  background-color: var(--button-background);
  color: white;
  border: 1px solid blue;
  border-radius: 15px;
  padding: 5px;
  transform: scale(1.1);
  transform: translateY(-3);
}
</style>
