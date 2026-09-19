import axios from "axios";
// import { ref } from "vue";
const url = "https://dummyjson.com/products";

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
