/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const products = [
  {
    name: "Cherry",
    price: 0.99,
    quantity: 0,
    productId: 100,
    image: "../images/cherry.jpg"
  },
  {
    name: "Strawberry",
    price: 1.55,
    quantity: 0,
    productId: 200,
    image: "../images/strawberry.jpg"
  },
  {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 300,
    image: "../images/orange.jpg"
  },
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  if (product) {
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    };
  };
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
    cartItem.price = Math.round(cartItem.price * 100) / 100;
  };
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      removeProductFromCart(productId);
    };
  };
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    const removedProduct = cart.splice(index, 1)[0];
    const product = products.find(item => item.productId === removedProduct.productId);
    if (product) {
      product.quantity = 0;
    };
  };
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  total = Math.round(total * 100) / 100;
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.forEach(item => {
    const product = products.find(p => p.productId === item.productId);
    if (product) {
      product.quantity = 0;
      item.quantity = 0;
    }
  });

  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;

  let remainingBalance = totalPaid - cartTotal();
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
