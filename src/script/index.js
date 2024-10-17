const listImages = document.querySelector(".carousel-inner"); // Parent container of all slides
const imgs = document.querySelectorAll(".carousel-item"); // Select all carousel items
const length = imgs.length; // Number of slides
let current = 0;

// Right and left buttons
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

let interval;

// Function to change the slide
const handleChangeSlide = () => {
  if (current === length - 1) {
    current = 0; // Reset to first slide
  } else {
    current++; // Go to next slide
  }
  let width = imgs[0].offsetWidth; // Get the width of one slide
  listImages.style.transform = `translateX(${-width * current}px)`; // Move the slides container
};

// Function to start the auto-slide
const startAutoSlide = () => {
  interval = setInterval(handleChangeSlide, 4000); // Start changing slides every 4 seconds
};

// Function to stop the auto-slide
const stopAutoSlide = () => {
  clearInterval(interval); // Clear the interval to stop auto-slide
};

// Right button click handler
btnRight.addEventListener("click", () => {
  stopAutoSlide(); // Stop the auto-slide when clicking manually
  handleChangeSlide(); // Go to the next slide
  startAutoSlide(); // Restart the auto-slide after manual change
});

// Left button click handler
btnLeft.addEventListener("click", () => {
  stopAutoSlide(); // Stop the auto-slide when clicking manually
  if (current === 0) {
    current = length - 1; // Go to last slide
  } else {
    current--; // Go to previous slide
  }
  let width = imgs[0].offsetWidth;
  listImages.style.transform = `translateX(${-width * current}px)`; // Move slides container
  startAutoSlide(); // Restart the auto-slide after manual change
});
