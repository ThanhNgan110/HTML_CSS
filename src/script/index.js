$(document).ready(function () {
  const $btnLeft = $("#btn-left");
  const $btnRight = $("#btn-right");
  const $slides = $(".carousel-item");

  let $currentSlide = 0;

  const showSlides = (index) => {
    $slides.each(function (i) {
      $(this).css("display", i === index ? "block" : "none");
    });
  };

  const nextSlide = () => {
    $currentSlide = ($currentSlide + 1) % $slides.length;
    showSlides($currentSlide);
  };

  const prevSlide = () => {
    if ($currentSlide === 0) $currentSlide = $slides.length;
    $currentSlide = ($currentSlide - 1) % $slides.length;
    showSlides($currentSlide);
  };

  $btnRight.on("click", nextSlide);
  $btnLeft.on("click", prevSlide);
});
