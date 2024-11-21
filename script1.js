//Note 4: Simulate checkout function (only displaying a warning here)
function checkout() {  
    alert('You have successfully checkout!');  
}  

//Note 5: Notify quantity
let cart = [];  
  
function CartItem(productName, price, quantity) {  
    this.productName = productName;  
    this.price = price;  
    this.quantity = quantity;  
}  
  
function addToCart(price, productName, quantityId) {    
    let quantity = parseInt(document.getElementById(quantityId).value, 10);  
    if (isNaN(quantity) || quantity <= 0) {  
        alert('Please enter a valid quantity.');  
        return;  
    }  
  
    let existingItem = cart.find(item => item.productName === productName);  
    if (existingItem) {  
        existingItem.quantity += quantity;  
    } else {  
        let item = new CartItem(productName, price, quantity);  
        cart.push(item);  
    }  
  
    displayCart();  
    updateCartTotal();  
}  
  
function displayCart() {  
    let cartItemsList = document.getElementById('cart-items');  
    cartItemsList.innerHTML = ''; 
  
    cart.forEach(item => {  
        let listItem = document.createElement('div');  
        listItem.textContent = `${item.quantity} x ${item.productName} - 
${item.price * item.quantity}`;  
        cartItemsList.appendChild(listItem);  
    });  
}  
  
function updateCartTotal() {  
    let total = 0;  
    cart.forEach(item => {  
        total += item.price * item.quantity;  
    });  
    document.getElementById('cart-total').textContent = total.toFixed(2);  
}  
  
displayCart();  
updateCartTotal();  

function clearCart() {  
    document.getElementById("quantity1").value = 0;
    document.getElementById("quantity2").value = 0;
    document.getElementById("quantity3").value = 0;
  cart = [];  
  alert('The shopping cart has been cleared!'); 
  displayCart(); 
  updateCartTotal(); 
}  

function checkoutCart() {  
  if (cart.length === 0) {  
      alert('The shopping cart is empty and cannot be settled.');  
      return;  
  }  
    
  alert('Settlement successful! The shopping cart has been emptied.');  
  clearCart(); 
}  
