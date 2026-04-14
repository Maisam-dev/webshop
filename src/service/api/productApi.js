import axios from "axios";
// import { ref } from "vue";
const url = "https://dummyjson.com/products";

// export function useProduct() {
//   const products = ref(null);

//   const getProduct = async () => {
//     try {
//       const response = await axios.get(url);

//       products.value = response.data.products;
//       console.log(products.value, response.status);
//     } catch (e) {
//       console.log("Error with get Api", e.message);
//     }
//   };
//   return { products, getProduct };
// }

export async function getProducts() {
  try {
    const response = await axios.get(url);

    if (!Array.isArray(response?.data?.products))
      throw new Error("Invalid Products form");

    return response.data.products;
  } catch (e) {
    if (e.response) throw new Error(`server Error ${e.response.status}`);
    if (e.request) throw new Error("request Error");
    else console.log("Api fetch Error", e.message);

    throw e;
  }
}
