<template>
  <div @click="router.push({ name: 'cartPage' })">
    <p class="count">{{ totalCount }}</p>
    <img src="../assets/shopping_cart.png" />
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const { totalCount } = storeToRefs(cartStore);

const router = useRouter();

// import { inject } from "vue";

// const productCount = inject(["productCount"]);
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
