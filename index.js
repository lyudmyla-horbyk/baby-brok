const INITIAL_SLIDE = 3;

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
  const $catalogSlider = $(".slider-catalog");

  var count = $(".slider-catalog").children().length;
  console.log(count);
  var dotsWrapper = document.querySelector(".slider__bottom__dots-wrapper");
  for (let i = 1; i <= count; i++) {
    var dot = document.createElement("a");
    dot.setAttribute("class", "slider__bottom__dot");
    dot.setAttribute("href", "#");
    if (i === INITIAL_SLIDE) {
      dot.classList.add("active");
    }
    dotsWrapper.appendChild(dot);
  }
  $catalogSlider.slick({
    arrows: false,
    dots: 0,
    initialSlide: INITIAL_SLIDE,
    autoplay: true
  });
  const $dots = $(".slider .slider__bottom__dot");
  $catalogSlider.on("afterChange", function(event, slick, currentSlide) {
    $dots.removeClass("active");
    $dots.eq(currentSlide).addClass("active");
  });
  $dots.click(function(e) {
    e.preventDefault();
    $catalogSlider.slick("slickGoTo", $(this).index());
    $dots.removeClass("active");
    $(this).addClass("active");
  });
  const $bestsellersGoodsSlider = $(".goods");
  const $buttons = $(
    ".goods-pagination .page-link:not(.left-arrow):not(.right-arrow)"
  );
  const $leftArrow = $(".goods-pagination .left-arrow");
  const $rightArrow = $(".goods-pagination .right-arrow");
  $bestsellersGoodsSlider.slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $bestsellersGoodsSlider.on("afterChange", function(
    event,
    slick,
    currentSlide
  ) {
    $buttons.removeClass("active");
    console.log("current slide", currentSlide);
    $buttons.eq(Math.round(currentSlide / 4)).addClass("active");
  });
  $buttons.click(function(e) {
    console.log($($buttons).index(this));
    console.log($($buttons).index(this) * 4 + 1);
    e.preventDefault();
    $bestsellersGoodsSlider.slick("slickGoTo", $($buttons).index(this) * 4);
    $buttons.removeClass("active");
    $(this).addClass("active");
  });
  $leftArrow.click(function(e) {
    e.preventDefault();
    $bestsellersGoodsSlider.slick("slickPrev");
  });
  $rightArrow.click(function(e) {
    e.preventDefault();
    $bestsellersGoodsSlider.slick("slickNext");
  });
});
