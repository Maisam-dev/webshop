<template>
  <div>
    <div v-for="product in displayProducts" :key="product.id">
      <img :src="product.thumbnail" />
      <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
      </div>
      <p>{{ product.count }}</p>
      <button @click="cartStore.delete(product.id)">Remove</button>
    </div>
    <p>total Count ist {{ totalCount }}</p>
    <p>total price ist {{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
// import { onMounted } from "vue";

const cartStore = useCartStore();
const { displayProducts, totalCount, totalPrice } = storeToRefs(cartStore);
// onMounted(() => {
//   cartStore.setDisplayCartProducts();
// });
</script>
