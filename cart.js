// Retrieve cart items from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart items
const cartItems = document.getElementById("cartItems");
const totalCostElement = document.getElementById("totalCost");

function displayCartItems() {
    cartItems.innerHTML = ""; // Clear previous content
    let totalCost = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Display product name and price
        cartItem.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(cartItem);
        totalCost += item.price;
    });

    // Display total cost
    totalCostElement.textContent = totalCost;
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Proceed to payment
function proceedToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some products before proceeding to payment.");
    } else {
        window.location.href = "pay.html"; // Redirect to payment page
    }
}

// Display cart items when the page loads
displayCartItems();