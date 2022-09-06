
function cross() {
  document.getElementById("hamburger").classList.toggle("cross");
}

//Jquery
//Sticky Header
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll < 185) {
    $("#my-navbar").removeClass("sticky-nav");
  } else {
    $("#my-navbar").addClass("sticky-nav");
  }
});


// // scrolling effect

// let $scroll = $('.scroll');
// let $win = $(window);
// $win.on('scroll', function () {
//   let top = $win.scrollTop() / 2;
//   $scroll.css('transform', 'rotate(' + top + 'deg)');
//   console.log('scrolling is on')
// });




