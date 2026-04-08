import axios from "axios";
import { ref } from "vue";
const url = "https://dummyjson.com/products";

export function useProduct() {
  const products = ref(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(url);

      products.value = response.data.products;
      console.log(products.value, response.status);
    } catch (e) {
      console.log("Error with get Api", e.message);
    }
  };
  return { products, getProduct };
}
