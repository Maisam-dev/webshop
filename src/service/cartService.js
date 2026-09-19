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
