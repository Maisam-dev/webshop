<template>
  <div>
    <img :src="product.thumbnail" />
    <p>{{ product.category }}</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.stock > 0 ? "verfügbar" : "nicht vervügbar" }}</p>
    <button :disabled="!product.stock > 0" @click="emit('addCart', product.id)">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["addCart"]);
</script>
