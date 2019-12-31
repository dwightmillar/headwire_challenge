$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$("input[type='radio']").on('change', function() {
  $("input[type='radio']").each(function( button ) {
    if ($(this).is(':checked')) {
      $(this).parent().css("background-color", "white");
      $(this).siblings().children().removeClass('fa-chevron-down');
      $(this).siblings().children().addClass('fa-times-circle')
    } else {
      $(this).parent().css("background-color", "#f9f8f8");
      if ($(this).siblings().children()[0].classList.value === 'fa fa-chevron-down') {
        return;
      } else {
        $(this).siblings().children().removeClass('fa-times-circle');
        $(this).siblings().children().addClass('fa-chevron-down')
      }
    }
  });
})
