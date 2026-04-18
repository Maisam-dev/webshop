<template>
  <div>
    <button
      v-for="(category, i) in categories"
      :key="i"
      @click="selectCategory = category"
    >
      {{ category }}
    </button>
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
<style scoped>
div {
  position: sticky;
  top: 62px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  border: 5px solid var(--border);
  border-radius: 15px;
  padding: 5px;
  color: var(--text-color);
}

button {
  background-color: var(--button);
  padding: 5px;
  border-radius: 15px;
  color: white;
}
</style>
