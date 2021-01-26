$(function() {

  // 縮圖
  $(".pro01_img, .pro02_img, .pro02_img_five, .pro03_img, .pro_img, .banner .item").imgLiquid ();

  
  $('.banner').each (function () {

    $(this).find ('.left').click (function() {
      // clone是複製前面這組class的意思
      var a = $(this).find ('.box .item').first ().clone(true);
      $(this).find ('.box .item').first ().remove ();
       // a.appendTo('#box');
       $(this).find ('.box').append(a);
       // append是“加入到＿＿前面”
    }.bind ($(this)));

    $(this).find ('.right').click (function() {
      var a = $(this).find ('.box .item').last ().clone(true);
      $(this).find ('.box .item').last ().remove ();
      // a.prependTo('#box');
      $(this).find ('.box').prepend(a);
      // prepend是“加入到＿＿後面”
    }.bind ($(this))).click ();


    if ($(this).data ('time')) {
      setInterval (function () {
        $(this).find ('.left').click ();
      }.bind ($(this)), parseInt ($(this).data ('time'), 10) * 1000);
    }

    setTimeout (function () {
      $(this).addClass ('tran');
    }.bind ($(this)), 300);

  });


  // checkboxs 選擇
  $('input[type="checkbox"][tag]').click(function() {
    $('input[type="checkbox"][parent~=' + $(this).attr('tag') + ']').prop('checked', $(this).is(':checked'))
  })

  // account點選切換tab(左邊)
  $('.link_menu_left').click(function() {
    $('.link_menu_left').removeClass ('lml_s');
    $(this).addClass ('lml_s');

    $('.accountbox').removeClass('accountbox_show');
    $('.accountbox').eq($(this).index()).addClass('accountbox_show');
   });

  $('.link_menu_left').eq (0).click();


  // account訂單資訊
  $('.link_order_info').click(function() {
    $('.link_order_info').removeClass ('loi_s');
    $(this).addClass ('loi_s');

    $('.order_info').removeClass('order_info_show');
    $('.order_info').eq($(this).index()).addClass('order_info_show');
   });

  $('.link_order_info').eq (0).click();


  // account紅利點數
  $('.point_order_info').click(function() {
    $('.point_order_info').removeClass ('poi_s');
    $(this).addClass ('poi_s');

    $('.order_point').removeClass('order_point_show');
    $('.order_point').eq($(this).index()).addClass('order_point_show');
   });

  $('.point_order_info').eq (0).click();


  // account優惠卷
  $('.cupon_order_info').click(function() {
    $('.cupon_order_info').removeClass ('coi_s');
    $(this).addClass ('coi_s');

    $('.order_cupon').removeClass('order_cupon_show');
    $('.order_cupon').eq($(this).index()).addClass('order_cupon_show');
   });

  $('.cupon_order_info').eq (0).click();



  // 手機menu
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




  // 購物車加減數量
  var num_jia = document.getElementById("num-jia");
    var num_jian = document.getElementById("num-jian");
    var input_num = document.getElementById("input-num");

    num_jia.onclick = function() {

      input_num.value = parseInt(input_num.value) + 1;
    }

    num_jian.onclick = function() {

      if(input_num.value <= 0) {
        input_num.value = 0;
      } else {

        input_num.value = parseInt(input_num.value) - 1;
      }

    }
    
    /* 如果在和后台做数据交互时，出现点击加减按钮的值无法传到后台的情况，可以用下面这种方式
    $("body").on("click", ".num-jian", function(m) {
      var obj = $(this).closest("ul").find(".input-num");
      if(obj.val() <= 0) {
           obj.val(0);
      } else {
           obj.val(parseInt(obj.val()) - 1);
      }
      obj.change();
     });
    
    $("body").on("click", ".num-jia", function(m) {
      var obj = $(this).closest("ul").find(".input-num");
      obj.val(parseInt(obj.val()) + 1);
      obj.change();
    });*/



  
  // product detail 換圖
  $('.epr_pic').click (function () {
    $('.epl_pic').find ('img').attr ('src', $(this).find ('img').attr ('src'));
    $('.epl_pic').imgLiquid ({
      fill: false
    });
  });


  
});
















