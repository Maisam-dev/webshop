<template>
  <div>
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
    <button :disabled="!product.stock > 0" @click="cartStore.add(product.id)">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { UseProductsStore } from "@/stores/useProductsStore";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const productStore = UseProductsStore();
const { productPage } = storeToRefs(productStore);
const router = useRouter();

function gotoProduct() {
  productPage.value = props.product;

  router.push({ name: "productPage" });
  console.log(productPage.value);
}

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

// const emit = defineEmits(["addCart"]);
</script>
