document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const closeBtn = document.getElementById("close-btn");
    const loginContainer = document.getElementById("login-container");
    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (username === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }
        
        // Example validation (Replace with actual authentication logic)
        if (username === "admin" && password === "password") {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard or homepage
        } else {
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.style.display = "block";
        }
    });
    
    closeBtn.addEventListener("click", () => {
        loginContainer.style.display = "none";
    });
});