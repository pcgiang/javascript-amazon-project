// const products = [
//   {
//     id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//       stars: 4.5,
//       count: 87
//     },
//     priceCents: 1090,
//     keywords: [
//       "socks",
//       "sports",
//       "apparel"
//     ]
//   },
//   {
//     id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     image: "images/products/intermediate-composite-basketball.jpg",
//     name: "Intermediate Size Basketball",
//     rating: {
//       stars: 4,
//       count: 127
//     },
//     priceCents: 2095,
//     keywords: [
//       "sports",
//       "basketballs"
//     ]
//   },
//   {
//     id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//     image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//       stars: 4.5,
//       count: 56
//     },
//     priceCents: 799,
//     keywords: [
//       "tshirts",
//       "apparel",
//       "mens"
//     ],
//     type: "clothing",
//     sizeChartLink: "images/clothing-size-chart.png"
//   },
// ]

products.forEach((product) => {
  const html = `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id="${product.id}">
      Add to Cart
    </button>
    </div>
  `;

  document.querySelector('.js-products-grid').innerHTML += html;
})


const addToCart = (btn) => {
  btn.addEventListener('click', () => {
    const { productId } = btn.dataset;
    const filteredCart = cart.filter(item => item.productId === productId);
    const quantity = Number(document.querySelector(`.js-selector-${productId}`).value);

    if (filteredCart.length > 0) {
      filteredCart[0].quantity += quantity;
    } else {
      cart.push({ productId, quantity })
    }
    console.log(cart);

    let totalQuantity = 0;
    cart.forEach(item => totalQuantity += item.quantity);
    console.log(totalQuantity);
    document.querySelector('.js-cart-quantity')
    .innerHTML = totalQuantity;

    document.querySelector(`.js-added-to-cart-${productId}`).classList.add('added-to-cart-visible');
    clearTimeout();
    setTimeout(() => {
      document.querySelector(`.js-added-to-cart-${productId}`).classList.remove('added-to-cart-visible');
    }, 10000);
  })
}


document.querySelectorAll('.js-add-to-cart')
  .forEach(btn => addToCart(btn));
