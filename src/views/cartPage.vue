<template>
  <div class="cart">
    <div class="card" v-for="product in displayProducts" :key="product.id">
      <img :src="product.thumbnail" />
      <div class="info">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
      </div>
      <div class="count">
        <button @click="cartStore.increment(product.id)">+</button>
        <p class="count">{{ product.count }}</p>
        <button @click="cartStore.decrement(product.id)">-</button>
      </div>

      <button @click="cartStore.delete(product.id)">Remove</button>
    </div>
    <span v-if="displayProducts?.length === 0">
      No products in the shopping cart</span
    >
    <div class="checkout">
      <p>total price ist {{ totalPrice }}</p>
      <button @click="toast.error('No checkout available at the moment')">
        check out ({{ totalCount }} item/s)
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
// import { onMounted } from "vue";

// Toastification
import { useToast } from "vue-toastification";
const toast = useToast();

const cartStore = useCartStore();
const { displayProducts, totalCount, totalPrice } = storeToRefs(cartStore);
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--card);
  div.info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 2;
  }
  img {
    width: 25%;
    max-width: 150px;
  }
}
button {
  background-color: var(--button);
  border: none;
  border-radius: 15px;
  padding: 7px;
}
div.count {
  border: 3px solid var(--border);
  border-radius: 15px;

  p {
    color: rgb(180, 10, 10);
  }
}
.checkout {
  background-color: var(--bar);
  align-self: center;
  width: 50%;
  border-radius: 15px;
  position: sticky;
  top: 70px;
}
</style>
