<template>
  <div class="homeContent">
    <filterBar class="filterBar"></filterBar>
    <h1>home page</h1>

    <div v-if="displayProducts" class="card-content">
      <productCard
        class="card"
        v-for="product in displayProducts"
        :key="product.id"
        :product="product"
        @add-cart="showMessage('product successfully added')"
      ></productCard>
    </div>
    <p v-else>loding..</p>
  </div>
</template>

<script setup>
import productCard from "@/components/productCard.vue";
import filterBar from "@/components/filterBar.vue";
import { onMounted } from "vue";
import { UseProductsStore } from "@/stores/useProductsStore";

import { storeToRefs } from "pinia";

// Toastification
import { useToast } from "vue-toastification";
const toast = useToast();

const productStore = UseProductsStore();
const { displayProducts } = storeToRefs(productStore);

const showMessage = (msg) => {
  toast.success(msg);
};

onMounted(async () => {
  await productStore.getProducts();
  console.log(displayProducts.value);
});
</script>

<style scoped>
.card-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  color: gray;
  opacity: 0;
  transform: translateX(50px);
}

/* .message {
  position: fixed;
  top: 15%;
  right: 1%;
  transition-duration: 2s;
  animation-name: showMessage;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-range: initial;
}

@keyframes showMessage {
  0% {
    visibility: visible;

    transform: translatey(30px);
    background-color: var(--bar);
    color: white;
    box-shadow: 2px 3px gray;
  }
  100% {
    transform: scale(1.1);
    transform: translatex(-50px);
    background-color: transparent;
    color: gray;
    box-shadow: 2px 3px gray;
    visibility: hidden;
  } */
/* } */
</style>
