

'use strict';
$(function(){

    //轮播图大小图切换

    $(window).on('resize',resize).trigger('resize');
    function resize(){
        var items = $('#main_ad > .carousel-inner > .item ');
        var screenWidth = $(window).width();
        var isSmallScreen =  screenWidth < 768;
        items.each(function(i,ele){
            var $item = $(ele);
            var imgSrc = isSmallScreen ?$item.data('image-sm') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if(isSmallScreen){
                $item.html('<img src="'+ imgSrc +'" alt="">')
            }else {
                $item.html('');
            }
        })

        $('[data-toggle="tooltip"]').tooltip();


    }

    //固定导航栏加margin效果
    var scrollHeight = $('#header .navbar').offset().top;
    $(window).on('scroll',function(){
      
       console.log($(window).scrollTop());
      // console.log(scrollHeight );
        if($(window).scrollTop() > scrollHeight){


            $('#main_ad .carousel-inner').css({'margin-top':$('#header .navbar').height()});

        }else {
            $('#main_ad .carousel-inner').css({'margin-top':0});
         }
    })
   
    

    scroll();
    $(window).on('resize',scroll);

    function scroll () {
        var $ulContainer = $('.nav-tabs');
        var $li = $ulContainer.children('li');
        var width = 210;
        $li.each(function (index, ele) {
            width += $(ele).width();
          
        })

        if ($(window).width() < width) {
            $ulContainer.css('width', width);
            $('.ul-wrapper').css('overflow-x', 'scroll');
        }


    }

    // 头条信息切换
    var $a = $('.nav-stacked > li > a');
    var $title = $('.news-title');
    $a.on('mouseenter',function(){
        var title = $(this).data('title');
        $title.text(title);
    })

    // 小火箭返回顶部
    $('#wjs-footer .rocket-line').on('click',function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
         $("html, body").animate({scrollTop : 0},700);

    })
})