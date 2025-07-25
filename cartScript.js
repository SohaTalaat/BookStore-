window.onload = function () {
    var cartItem = JSON.parse(localStorage.getItem("cart")); // extract data 
    var cartPage = document.querySelector(".cart-page");
    var cartSummary = document.querySelector(".cart-summary");


    if (cartItem.length === 0) {
        cartPage.innerHTML = "<h2> Your cart is empty </h2>";
        cartSummary.innerHTML = "";
        return;
    }

    var subtotal=0;

    for (let i = 0; i < cartItem.length; i++) {
        var item = cartItem[i];
        var title = item.title;
        var cover = item.cover;
    var price = Math.floor(Math.random() * 40) + 10; 

        cartPage.innerHTML += `
      <div class="cart-item">
    <img src="${cover}" alt="${title}" />
      <div class="cart-info">
      <h2>${title}</h2>
      <p>Price: $${price}</p>
      <p>Quantity: 1</p>
    </div>
    <div class="quantity-selector">
      <button class="qty-btn">-</button>
      <span class="qty-number">1</span>
      <button class="qty-btn">+</button>
    </div>
    <button class="remove-btn">Remove</button>
  </div>
`;
    subtotal += price;


    }

     cartSummary.innerHTML = `
    <p>Subtotal: $${subtotal}</p>
    <p>Total: $${subtotal}</p>
    <button class="checkout-btn">Checkout</button>
  `;


};

