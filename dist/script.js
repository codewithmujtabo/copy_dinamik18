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
