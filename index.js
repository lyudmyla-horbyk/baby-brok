let scroolToTopButton = document.getElementById("scroll-to-top");
scroolToTopButton.addEventListener("click", function() {
  scrollToTop();
});
function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
$(document).ready(function() {
  const $slider = $(".slider-inner");
  const $dots = $(".slider .slider__bottom__dot");
  $slider.slick({
    arrows: false,
    dots: 0,
    initialSlide: 1,
    autoplay: true
  });
  $slider.on("afterChange", function(event, slick, currentSlide) {
    $dots.removeClass("active");
    $dots.eq(currentSlide).addClass("active");
  });
  $dots.click(function(e) {
    e.preventDefault();
    $slider.slick("slickGoTo", $(this).index());
    $dots.removeClass("active");
    $(this).addClass("active");
  });
});
$(document).ready(function() {
  const $slider = $(".goods");
  const $buttons = $(
    ".goods-pagination .page-link:not(.left-arrow):not(.right-arrow)"
  );
  const $leftArrow = $(".goods-pagination .left-arrow");
  const $rightArrow = $(".goods-pagination .right-arrow");
  $slider.slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $slider.on("afterChange", function(event, slick, currentSlide) {
    $buttons.removeClass("active");
    console.log("current slide", currentSlide);
    $buttons.eq(Math.round(currentSlide / 4)).addClass("active");
  });
  $buttons.click(function(e) {
    console.log($($buttons).index(this));
    console.log($($buttons).index(this) * 4 + 1);
    e.preventDefault();
    $slider.slick("slickGoTo", $($buttons).index(this) * 4);
    $buttons.removeClass("active");
    $(this).addClass("active");
  });
  $leftArrow.click(function(e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $rightArrow.click(function(e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});
