$(document).ready(function(){
  $('[data-tooltip="ON"]').tooltip();
  $(".navbar-toggler").on("click", function(e) {
    $(this).toggleClass("open");
  })
})