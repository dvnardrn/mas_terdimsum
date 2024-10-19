/*
let totaldibayarwonton;
let totaldibayargyoza;
let totaldibayarsiomay;
document.addEventListener('DOMContentLoaded', function()
{
  const jumlahgyoza=document.getElementById("gyoza_input");
  const jumlahsiomay=document.getElementById("siomay_input");
  const jumlahwonton=document.getElementById("wonton_input");
  const totalbayargyoza=document.getElementById("totalbayargyoza");
  const totalbayarsiomay=document.getElementById("totalbayarsiomay");
  const totalbayarwonton=document.getElementById("totalbayarwonton");
  const pricePerGyoza = parseFloat(document.getElementById('hargabayargyoza').textContent);
  const pricePerSiomay = parseFloat(document.getElementById('hargabayarsiomay').textContent);
  const pricePerWonton = parseFloat(document.getElementById('hargabayarwonton').textContent);
  jumlahgyoza.addEventListener('input',function(){
    const quantitygyoza= parseInt(jumlahgyoza.value,10);
     totaldibayargyoza=quantitygyoza*pricePerGyoza;
    totalbayargyoza.textContent= totaldibayargyoza.toFixed(2)
      });
  jumlahsiomay.addEventListener('input',function(){
    const quantitysiomay= parseInt(jumlahsiomay.value,10);
     totaldibayarsiomay=quantitysiomay*pricePerSiomay;
    totalbayarsiomay.textContent= totaldibayarsiomay.toFixed(2)
      });
  jumlahwonton.addEventListener('input',function(){
    const quantitywonton= parseInt(jumlahwonton.value,10);
     totaldibayarwonton=quantitywonton*pricePerWonton;
    totalbayarwonton.textContent=totaldibayarwonton.toFixed(2)
  });
  const totalseluruhnya=document.getElementById("totalbayarseluruhnya");
  const perhitungantotal=totaldibayargyoza+totaldibayarsiomay+totaldibayarwonton;
  console.log (perhitungantotal)
   
});
function removeRow(element){
  const row = element.parentNode.parentNode.parentNode.parentNode;
  row.parentNode.removeChild(row)
}
function deleterow(element){
  console.log ("berhasil")
  const row = element.parentNode.parentNode.parentNode.parentNode.parentNode;
  row.parentNode.removeChild(row)
}*/
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
function updateCartCount() {
  document.getElementById("angka").textContent = cartCount;
}
window.onload = updateCartCount;
// add to cart function for index html
function addToCart(item,price,image) {
  // Check if the item is already in the cart
  let found = cart.find(cartItem => cartItem.item === item);
  if (found) {
    found.quantity += 1; // Increase quantity if the item exist
  } else {
    cart.push ({ item, price, quantity: 1,image}); // Add new item to cart if not found
  }
  
  cartCount++; // Increment cart count when item is added

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count on screen 
  updateCartCount();
}
function loadCart(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = "";
  let grandTotal = 0;
  cart.forEach((item, index) =>{
    const totalPrice = (item.price*item.quantity).toFixed(2);
    grandTotal += parseFloat(totalPrice);
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
          <div class="menuco">
            <img src= "${item.image}"width="100px" height="100px">
            <div class="menunote">
              <p>
                ${item.item}
              </p>
              <small id="hargabayargyoza">
               ${item.price}
              </small>
              <br>
              <a class="Remove" onclick="removeFromCart(${index})">
                remove
              </a>
            </div>
          </div>
        </td>
        <td>
          <input type="number" value="${item.quantity}"min="1" onchange="updateQuantity(${index},this.value)"></input>
        </td>
        <td>
         <span id="total-${index}">${totalPrice}</span>
        </td>
    `; cartItemsDiv.appendChild(row);
  });
  document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
}
function updateQuantity(index, newQuantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  // Update the quantity for the item
  cart[index].quantity = parseInt(newQuantity);
  localStorage.setItem('cart', JSON.stringify(cart));
  // Update the total price for this item
  const updatedTotalPrice = (cart[index].price * cart[index].quantity).toFixed(2);
  document.getElementById(`total-${index}`).textContent = updatedTotalPrice;
  // Update the cart count at the top
  cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  updateGrandTotal();
  // Update the grand total
  updateCartCount();
}
function updateGrandTotal() {
  console.log('working');
  const cart = JSON.parse(localStorage.getItem('cart'));
  let grandTotal = 0;
  cart.forEach(item => {
      grandTotal += item.price * item.quantity;
  });
  document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
}
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  // Remove the item from the cart
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  // Reload the cart to reflect changes
  loadCart();
  // Update the cart count after removing an item
  cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  updateCartCount();
}
if (document.getElementById('cart-items')) {
  window.onload = loadCart;
}