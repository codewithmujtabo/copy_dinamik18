// HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Login Button
document.getElementById("loginButton").addEventListener("click", function () {
  var loginForm = document.getElementById("loginForm");
  var overlay = document.getElementById("overlay");
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");

  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    overlay.style.display = "none";
  } else {
    loginForm.style.display = "block";
    overlay.style.display = "block";
  }
});

function closeLoginForm() {
  var loginForm = document.getElementById("loginForm");
  var overlay = document.getElementById("overlay");
  loginForm.style.display = "none";
  overlay.style.display = "none";
}

// Close the login form when clicking outside the form
document.addEventListener("click", function (event) {
  var loginForm = document.getElementById("loginForm");
  var overlay = document.getElementById("overlay");
  var isClickInsideForm = loginForm.contains(event.target);
  var isLoginButton = event.target.id === "loginButton";

  if (!isClickInsideForm && !isLoginButton) {
    loginForm.style.display = "none";
    overlay.style.display = "none";
  }
});

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform login logic here
  console.log("Email: " + email + ", Password: " + password);
}

function loginWithGoogle() {
  // Perform Google login logic here
  console.log("Logging in with Google");
}

// Checkbox Confirmation
function toggleSubmitButton() {
  var checkbox = document.getElementById("checkbox-confirmation");
  var submitButton = document.getElementById("buttonSubmit");

  if (checkbox.checked) {
    submitButton.disabled = false;
    submitButton.classList.remove(
      "bg-blue-900",
      "text-gray-300",
      "disabled-btn"
    );
    submitButton.classList.add("bg-blue-600", "text-white", "cursor-pointer");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove(
      "bg-blue-600",
      "text-white",
      "cursor-pointer"
    );
    submitButton.classList.add("bg-blue-900", "text-gray-300", "disabled-btn");
  }
}

// FAQ Part
function toggleFAQ(contentId, iconId) {
  const faqContent = document.getElementById(contentId);
  const toggleIcon = document.getElementById(iconId);

  if (faqContent.classList.contains("hidden")) {
    faqContent.classList.remove("hidden");
    toggleIcon.classList.remove("fa-chevron-down");
    toggleIcon.classList.add("fa-chevron-up");
  } else {
    faqContent.classList.add("hidden");
    toggleIcon.classList.remove("fa-chevron-up");
    toggleIcon.classList.add("fa-chevron-down");
  }
}
