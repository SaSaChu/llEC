
 
$(function() {

  $(".pro01_img, .pro02_img, .pro02_img_five, .pro03_img").imgLiquid ();


  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('.m-menu-t').click (function () {
      $(this).toggleClass ('s');
    });
  });
  
  $('.icon-menu').click(function() {
    // $('.main').addClass('nav_hover');
    $('#r_menu_boxs').addClass('nav_open');
    // $('#menu_back ').addClass('b_open');
    // scrollLock();
  });

  $('.icon-x').click(function() {
    // $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    // $('#menu_back').removeClass('b_open');
    // scrollUnlock();
  });

});
