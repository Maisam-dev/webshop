<template>
  <div v-if="productPage">
    <img :src="productPage.images" alt="" />
    <div>
      <section>
        <h2>{{ productPage.title }}</h2>
        <p>{{ productPage.description }}</p>
        <p style="color: red">{{ productPage.discountPercentage }}+" %"</p>
        <p>
          {{ productPage.stock > 10 ? "✅ Available" : "⚠️small quantity" }}
        </p>
        <p>Shipping Information: {{ productPage.shippingInformation }}</p>
        <p>Warranty Information:{{ productPage.warrantyInformation }}</p>
      </section>
    </div>
  </div>
  <h1 v-else>product not found</h1>
</template>
<script setup>
import { UseProductsStore } from "@/stores/useProductsStore";
import { storeToRefs } from "pinia";

const productStore = UseProductsStore();
const { productPage } = storeToRefs(productStore);
</script>
