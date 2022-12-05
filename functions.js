//getProductsOfNormalQuality : This function returns products with normal quality.
const getProductsOfNormalQuality = (productList) => {
  const result = productList.filter((product) => product.quality === "Normal");
  return result
};
//getProductImageWithPngExtension : This function returns products whose image extension ends in png
  const getProductImageWithPngExtension = (productList) => {
    const result = productList.filter(
      (product) => product.productImage.at(-2) === "n"
    );
      return result
  };

//getCalorieOfTheMostExpensiveProduct : This function returns the calorie of the most expensive product
const getCalorieOfTheMostExpensiveProduct = (productList) => {
  //lets find the biggest number
  const biggestPrice = Math.max(...productList.map((pArray) => pArray.price));

  return productList.find((pArray) => pArray.price === biggestPrice)
    .totalCalories;
};

//sortByExpirationDate : This function sorts the products according to their expiration date from smallest to largest
const sortByExpirationDate = (productList) => {
  const result = productList.sort(
    (a, b) => new Date(a.expireDate) - new Date(b.expireDate)
  );
  return result
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
