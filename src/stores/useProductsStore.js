import { defineStore } from "pinia";
import { getProducts } from "@/service/api/productApi";
export const UseProductsStore = defineStore("products", {
  state: () => ({
    products: null,
    selectCategory: "All",
    error: null,
    productPage: null,
    message: "",
  }),
  getters: {
    displayProducts() {
      if (this.selectCategory === "All") return this.products;
      else
        return this.products?.filter((p) => p.category === this.selectCategory);
    },

    categories() {
      const category = this.products?.map((p) => p.category);
      return [...new Set(category), "All"];
    },
  },

  actions: {
    async getProducts() {
      try {
        if (!this.products) this.products = await getProducts();
      } catch (e) {
        this.error = e.message;
      }
    },
    setFilter(category, state) {
      const index = state.selectCategory.findIndex(category);
      if (index > -1) {
        state.selectCategory.splice(index, 1);
      } else {
        state.selectCategory = [...state.selectCategory, category];
      }
    },
  },
});
