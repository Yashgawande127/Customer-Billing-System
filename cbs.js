// Function to handle "View Products" button click
function viewProducts() {
    window.location.href = "pro.html"; // Redirect to products section
}

// Update cart count (example)
const cartCount = document.getElementById("cartCount");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;