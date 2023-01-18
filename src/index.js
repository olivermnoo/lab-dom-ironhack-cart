function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  let totalValue = 0;
  let allProducts = document.getElementsByClassName("product");
  allProducts = [...allProducts];

  allProducts.forEach((element) => {
    totalValue += updateSubtotal(element);
  });

  document.querySelector("h2 span").innerHTML = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;

  let newTarget = target.parentNode.parentNode;

  newTarget.parentNode.removeChild(newTarget);
}

function createProduct(event) {
  let newTableRow = document.createElement("tr");

  newTableRow.innerHTML = `
      <td class="name">
            <span>${document.getElementById("newProductName").value}</span>
      </td>
      <td class="price">$<span>${
        document.getElementById("newProductPrice").value
      }</span></td>
      <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;

  newTableRow.className = "product";

  document.getElementById("productsTable").append(newTableRow);

  document.getElementById("newProductName").value = "";
  document.getElementById("newProductPrice").value = "";

  let allRemoveBtns = document.getElementsByClassName("btn btn-remove");
  allRemoveBtns = [...allRemoveBtns];
  allRemoveBtns.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);

  let allRemoveBtns = document.getElementsByClassName("btn btn-remove");
  allRemoveBtns = [...allRemoveBtns];
  allRemoveBtns.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });
});
