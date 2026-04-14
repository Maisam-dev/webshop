// import { UseProductsStore } from "@/stores/useProductsStore";
// import { useCartStore } from "@/stores/useCartStore";
// import { storeToRefs } from "pinia";
// import { computed } from "vue";

// export const getDisplayCartProducts = computed(() => {
//   const productsStore = UseProductsStore();
//   const cartStore = useCartStore();

//   const { products: allProducts } = storeToRefs(productsStore);
//   const { products: cartProducts } = storeToRefs(cartStore);
//   console.log("cartProducts");
//   console.log(cartProducts.value);
//   console.log("allProducts");
//   console.log(allProducts.value);
//   return cartProducts.value
//     .map((cp) => {
//       return {
//         ...allProducts.value.find((ap) => cp.id === ap.id),
//         count: cp.count,
//       };
//     })
//     .filter(Boolean); //remove value undifniert or null
// });

export function getDisplayCartProducts(allProducts, cartProducts) {
  console.log(cartProducts);
  return cartProducts
    .map((cp) => {
      return {
        ...allProducts.find((ap) => cp.id === ap.id),
        count: cp.count,
      };
    })
    .filter(Boolean); //remove value undifniert or null
}
