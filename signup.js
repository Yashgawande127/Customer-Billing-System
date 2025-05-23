document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Simple localStorage-based user saving
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "User already exists with this email.";
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! Redirecting to login...");
  window.location.href = "login.html";
});
