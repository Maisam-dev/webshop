<template>
  <div class="card">
    <div @click="gotoProduct">
      <img :src="product.thumbnail" />
      <p>{{ product.category }}</p>
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <p>
        {{
          product.availabilityStatus == "In Stock"
            ? "Available"
            : "Not Available"
        }}
      </p>
    </div>
    <button :disabled="!product.stock > 0" @click="addProduct(product.id)">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { UseProductsStore } from "@/stores/useProductsStore";
import { storeToRefs } from "pinia";
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const productStore = UseProductsStore();
const { productPage } = storeToRefs(productStore);
const router = useRouter();
const emit = defineEmits(["addCart"]);

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

function gotoProduct() {
  productPage.value = props.product;

  router.push({ name: "productPage" });
  console.log(productPage.value);
}

function addProduct(id) {
  cartStore.add(id);
  emit("addCart");
}
</script>

<style scoped lang="scss">
.card {
  background-color: var(--card);
  border: 3px solid var(--bar);
  border-radius: 20px;
  box-shadow: 15px 20px 5px darkgray;
  padding: 50px 0px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  button {
    background-color: var(--button);
    padding: 5px;
    border-radius: 15px;
  }
}
img {
  border-radius: 50%;
  border: 1px solid c5c2c2;
  background-color: var(--img-background);
  max-width: 50%;
}
.card:hover {
  // transform: translate(-10px, -5px);
  transform: scale(1.1);
}
</style>
