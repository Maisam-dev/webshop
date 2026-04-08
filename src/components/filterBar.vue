<template>
  <div>
    <button
      v-for="(category, i) in categories"
      :key="i"
      @click="emit('update:dataFilter', category)"
    >
      {{ category }}
    </button>
    <div>
      <cartSympol></cartSympol>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import cartSympol from "./cartSympol.vue";

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:dataFilter"]);
</script>
