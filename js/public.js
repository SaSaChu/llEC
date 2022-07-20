$(function() {

  // 縮圖
  $(".pro01_img, .pro02_img, .pro02_img_five, .pro03_img, .pro_img, .banner .item, .banner .item2").imgLiquid ();


  // 光箱
  $('.showModel').click(function() {
    $('#myModel').addClass('showModel')

    $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('show').siblings().removeClass('show')
  })

  $('.btn_close, .t-close').click(function() {
    $('#myModel').removeClass('showModel')
  })


  
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

  $('.new_products').each(function() {
    let $that = $(this)
    let $left = $that.find('.left')
    let $right = $that.find('.right')
    let $product = $that.find('.product')
    let total = $product.length
    $left.click(_ => {
      let i = parseInt($that.attr('data-i'), 10);
      $that.attr('data-i', i == 1 ? total : --i)
    })
    $right.click(_ => {
      let i = parseInt($that.attr('data-i'), 10);
      $that.attr('data-i', i == total ? 1 : ++i)
    })
    let $dots = $(Array.apply(null, Array(total)).map(_ => $('<label />').addClass('dot').click(function() {
      $that.attr('data-i', $dots.index($(this)) + 1)
    }))).map($.fn.toArray).appendTo($that.find('.dots'))

  })

  
  // product detail 換圖
  $('.epr_pic').click (function () {
    $('.epl_pic').find ('img').attr ('src', $(this).find ('img').attr ('src'));
    $('.epl_pic').imgLiquid ({
      fill: false
    });
  });


  
});
















