<template>
  <div id="total-bar">
    <div id="total-value">
      <p>total count: {{ totalCount }}</p>
      <p>sum price: {{ totalPrice }}</p>
    </div>
    <cartSymbol></cartSymbol>
  </div>
</template>

<script setup>
import cartSymbol from "./cartSymbol.vue";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { totalCount, totalPrice } = storeToRefs(cartStore);
</script>

<style scoped lang="scss">
div#total-bar {
  background-color: var(--bar);
  color: var(--text-color);
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 20%;
  flex-wrap: wrap;
  border-top-right-radius: 15px;
  width: 75%;
}
div#total-value {
  display: inline flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
