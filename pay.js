document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const upi = document.getElementById("upi").value;

    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate total cost
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += item.price;
    });

    // Simulate payment processing
    setTimeout(() => {
        // Display receipt
        document.getElementById("receiptName").textContent = name;
        document.getElementById("receiptEmail").textContent = email;
        document.getElementById("receiptPhone").textContent = phone;
        document.getElementById("receiptAddress").textContent = address;
        document.getElementById("receiptUpi").textContent = upi;

        // Display products
        const receiptProducts = document.getElementById("receiptProducts");
        receiptProducts.innerHTML = ""; // Clear previous content
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            receiptProducts.appendChild(li);
        });

        // Display total cost
        document.getElementById("receiptTotal").textContent = totalCost;

        // Show receipt
        document.getElementById("receipt").style.display = "block";
        document.getElementById("paymentForm").style.display = "none";
    }, 2000); // Simulate a 2-second payment processing delay
});

function printReceipt() {
    window.print(); // Print the receipt
}