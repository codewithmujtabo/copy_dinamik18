// HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// TIME
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");

function updateClock() {
  const now = new Date();
  const targetDate = new Date("2024-01-01T00:00:00"); // New Year's Day 2024

  const timeDiff = targetDate - now;

  if (timeDiff > 0) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    dayEl.innerText = days < 10 ? "0" + days : days;
    hourEl.innerText = hours < 10 ? "0" + hours : hours;
    minuteEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  } else {
    dayEl.innerText = "00";
    hourEl.innerText = "00";
    minuteEl.innerText = "00";
  }

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

// Carousel
let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const totalItems = document.querySelectorAll("#carousel-item").length;
  currentIndex = (index + totalItems) % totalItems;
  const translateValue = -currentIndex * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

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

// Checkbox
const confirmationCheckbox = document.getElementById("confirmationCheckbox");
const submitButton = document.getElementById("submitButton");

// Update the initial state
submitButton.disabled = !confirmationCheckbox.checked;

confirmationCheckbox.addEventListener("change", function () {
  submitButton.disabled = !confirmationCheckbox.checked;
  if (confirmationCheckbox.checked) {
    submitButton.classList.remove("bg-blue-900", "text-gray-300");
    submitButton.classList.add("bg-blue-600", "text-white");
  } else {
    submitButton.classList.remove("bg-blue-600", "text-white");
    submitButton.classList.add("bg-blue-900", "text-gray-300");
  }
});

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
