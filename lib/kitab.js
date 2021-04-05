$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      nav:true
    });
  });


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:2,
      loop:true,
      autoplay:true,
      nav:true
    });
  });

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
