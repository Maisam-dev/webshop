<template>
  <div @click="router.push({ name: 'cartPage' })">
    <img src="../assets/shopping_cart.png" />
    <p class="count">{{ totalCount }}</p>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const { totalCount } = storeToRefs(cartStore);

const router = useRouter();
</script>

<style scoped>
img {
  width: 40px;
  height: 25px;
}
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40px;
  height: 50px;
  position: relative;
}
.count {
  height: 20px;
  width: 20px;

  color: red;

  position: absolute;
  top: 2px;
  left: 35%;
}
</style>
