<template>
  <filterBar
    v-model:dataFilter="filterCategories"
    :categories="categories"
  ></filterBar>
  <div v-if="products">
    <productCard
      v-for="product in displayProducts"
      :key="product.id"
      :product="product"
      @addCart="addCart"
    ></productCard>
  </div>

  <p v-else>loding..</p>
  <h1>home page</h1>
</template>

<script setup>
import productCard from "@/components/productCard.vue";
import filterBar from "@/components/filterBar.vue";
import { useProduct } from "@/service/productService";
import { onMounted, computed, ref, provide } from "vue";
const { products, getProduct } = useProduct();

const filterCategories = ref("All");
const productCount = ref(0);

provide("productCount", productCount);

function addCart() {
  productCount.value++;
  // puch id
  console.log(productCount.value);
}

const displayProducts = computed(() => {
  if (filterCategories.value === "All") {
    return products.value;
  } else {
    return products.value.filter((p) => p.category === filterCategories.value);
  }
});

// function filterProducts(category) {
//   console.log(category);
//   // products.value = products.value.filter((p) => p.category === category);
//   filterCategories.value = category;
//   console.log("filterProducts");
//   console.log(products.value);
// }

const categories = computed(() => {
  // if (!products.value || products.value.length < 1) return ["All"];
  const categories = products.value?.map((p) => p.category);
  // console.log("computed");
  // console.log(categories);
  return ["All", ...new Set(categories)];
});

onMounted(async () => {
  await getProduct();
  // filterProducts("beauty");
  // console.log(categories.value);
  console.log(displayProducts.value);
});
</script>
