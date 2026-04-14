<template>
  <div>
    <button
      v-for="(category, i) in categories"
      :key="i"
      @click="selectCategory = category"
    >
      {{ category }}
    </button>
    <div></div>
  </div>
</template>

<script setup>
// import { defineProps, defineEmits } from "vue";

import { UseProductsStore } from "@/stores/useProductsStore";

import { storeToRefs } from "pinia";

const productStore = UseProductsStore();
const { categories, selectCategory } = storeToRefs(productStore);

// defineProps({
//   categories: {
//     type: Array,
//     default: () => [],
//   },
// });

// const emit = defineEmits(["update:dataFilter"]);
</script>
