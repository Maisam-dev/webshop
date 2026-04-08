<template>
  <div>
    <p class="count">{{ productCount }}</p>
    <img src="../assets/shopping_cart.png" />
  </div>
</template>

<script setup>
import { inject } from "vue";

const productCount = inject(["productCount"]);
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
}
div {
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 50px;
}
.count {
  height: 25px;
  margin-top: 0px;
  color: red;
}
</style>
