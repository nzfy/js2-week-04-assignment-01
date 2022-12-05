
const getProductImageWithPngExtension = [
  "https://image.migros.ch/product-zoom/47c42ac7c3f96779711c07b4e887fa314f7d3118/extra-konfituere-aprikosen.jpg",
    "https://image.migros.ch/product-zoom/b1efd55d4b123bdfdb9e5dd644aed4a472a52e21/favorit-konfituere-waldbeeren.jpg",
    "https://image.migros.ch/product-zoom/7155c76b6f1134f6a57795ded7c1fb8c80953cf7/extra-konfituere-hagenbutten.png",
    "https://image.migros.ch/product-zoom/fb3e595303aa4bb287c274b6b0bc7e7c020f80e7/extra-konfituere-himbeeren.png",
    "https://image.migros.ch/product-zoom/2d4a9cc209dcb269be4b805fbf139207c78dc8a4/favorit-konfituere-schwarze-kirschen.jpg",
    "https://image.migros.ch/product-zoom/cfb4e6683236afcefe918e3e5c273dfb2718ea64/extra-marmelade-bitterorangen.png",
  ];
  const result = getProductImageWithPngExtension.filter((url) => /\.(png)$/.test(url));
  console.log(result);