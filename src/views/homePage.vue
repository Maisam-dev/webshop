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

// const { products, getProduct } = useProduct();
const productStore = UseProductsStore();
const { displayProducts } = storeToRefs(productStore);

// const filterCategories = ref("All");
// const productCount = ref(0);

// provide("productCount", productCount);

// function addCart() {
//   productCount.value++;
//   // puch id
//   console.log(productCount.value);
// }

// const displayProducts = computed(() => {
//   if (filterCategories.value === "All") {
//     return products.value;
//   } else {
//     return products.value.filter((p) => p.category === filterCategories.value);
//   }
// });

// function filterProducts(category) {
//   console.log(category);
//   // products.value = products.value.filter((p) => p.category === category);
//   filterCategories.value = category;
//   console.log("filterProducts");
//   console.log(products.value);
// }

// const categories = computed(() => {
//   // if (!products.value || products.value.length < 1) return ["All"];
//   const categories = products.value?.map((p) => p.category);
//   // console.log("computed");
//   // console.log(categories);
//   return ["All", ...new Set(categories)];
// });

onMounted(async () => {
  await productStore.getProducts();
  // filterProducts("beauty");
  // console.log(categories.value);
  console.log(displayProducts.value);
});
</script>
<style scoped>
/* .homeContent {
  margin-top: 107px;
} */
.card-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
}
</style>
