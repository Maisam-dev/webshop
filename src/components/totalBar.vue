<template>
  <div>
    <div>
      <p>Total Count: {{ totalCount }}</p>
      <p>sum Price: {{ totalPrice }}</p>
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
