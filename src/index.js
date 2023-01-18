// ITERATION 1

function updateSubtotal(product) {
  const prices = product.querySelector(".price span").innerHTML; // .price acessa a classe price dentro do produto e depois disso acessaremos o span, para puxar apenas o valor visivel do span usamos o innerHTML
  const quantity = product.querySelector(".quantity input").value; // usar o .propriedade porque o input é uma tag self closed, para puxar apenas o valor
  const subTotal = prices * quantity;
  product.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  const singleProduct = document.getElementsByClassName("products");

  updateSubtotal(singleProduct);
  // end of test
  updateSubtotal();

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
