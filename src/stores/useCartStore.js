import { getDisplayCartProducts } from "@/service/cartService";
import { UseProductsStore } from "./useProductsStore";
import { defineStore, storeToRefs } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [], // Id and count
    // displayProducts: [],
  }),

  getters: {
    totalPrice() {
      return this.displayProducts.reduce((total, p) => {
        return total + p.price * p.count;
      }, 0.0);
    },

    totalCount(state) {
      return state.products.reduce((total, p) => {
        return total + p.count;
      }, 0);
    },
    displayProducts(state) {
      const productsStore = UseProductsStore();
      const { products: allProducts } = storeToRefs(productsStore);
      return getDisplayCartProducts(allProducts.value, state.products);
    },
  },

  actions: {
    delete(id) {
      this.products = this.products.filter((p) => p.id !== id);
    },

    add(id) {
      const item = this.products.find((p) => p.id === id);

      if (item) {
        item.count++;
        // if not reactived use
        // this.products = [...this.products]
      } else {
        this.products = [...this.products, { id: id, count: 1 }];
      }
    },

    // if not reactived use
    // this.products = [...this.products] after item ++ and item --
    increment(id) {
      const item = this.products.find((p) => p.id === id);
      item.count++;
    },

    decrement(id) {
      const item = this.products.find((p) => p.id === id);
      item.count--;
    },
    // setDisplayCartProducts() {
    //   this.displayProducts = getDisplayCartProducts.value;
    // },
  },
});
