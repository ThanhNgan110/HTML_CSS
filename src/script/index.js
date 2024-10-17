const listImages = document.querySelector(".carousel-item");
const imgs = document.querySelectorAll(".img");

const length = imgs.length;
let current = 0;

const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

let interval;

const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    console.log("width", width);

    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  }
};

const startAutoSlide = () => {
  interval = setInterval(handleChangeSlide, 4000); // Start changing slides every 4 seconds
};

const stopAutoSlide = () => {
  clearInterval(interval); // Clear the interval to stop auto-slide
};

// // Start the auto-slide when the page loads
// startAutoSlide();

btnRight.addEventListener("click", () => {
  stopAutoSlide();
  handleChangeSlide();
  startAutoSlide();
});

btnLeft.addEventListener("click", () => {
  stopAutoSlide();
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    console.log("width", width);
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  }
  startAutoSlide();
});
