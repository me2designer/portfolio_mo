$(function(){/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* wrapper is ready */
    var $wrap = $('#wrap');

    // Loding
    $.when($('#lodingWrap').remove()).then(function(){
        if ($wrap.css('opacity') == '0' || $wrap.css('visibility') == 'hidden') {
            $wrap.css({
                'opacity': 1,
                'visibility': 'visible'
            });
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* HEADER - is-active */
    var $header = $('#header');
    var status;

    $(window).on('scroll', function () {
        var windowT = $(this).scrollTop();
        if (windowT >= 50){
            if (!status) $header.addClass('header-active');
            status = true;
        } else {
            if (status) $header.removeClass('header-active');
            status = false;
        }
    });


    var $gnb = $('#gnb');
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $header.outerHeight();
    var visualH = $('#visual').outerHeight();

    $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if ($gnb.css("display") == "block" || st <= visualH / 2) {
            return;
        }
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $header.removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $header.removeClass('header-up').addClass('header-down');
            }
        }

        lastScrollTop = st;
    }



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* HEADER - 현재 section 위치표시 및 바로가기 */
    var $header = $('#header');

    //현재위치표시
    var $section = $('#container > section');
    var $btn = $header.find('.gnb .btn_gnb');
    var $bar = $header.find('.gnb .bar');

    //data-target 추출
    var arrId = []
    $btn.each(function(idx,info) {
        arrId.push($(info).attr('data-target'))
    });

    $section.each(function() {
        var $this = $(this);
        var id = '#'+$this.attr('id');

        if (arrId.indexOf(id) == -1) return; //data-target 없는 경우 section scrollAction 적용방지

        scrollAction({
            target: $this,
            top: 20,
            scrollDownAction : function(){
                // 스크롤 DOWN 액션
                var $target = $btn.siblings('[data-target="'+id+'"]');


            },
            scrollUpAction : function(){
                // 스크롤 UP 액션
                var $prev = $btn.siblings('[data-target="'+id+'"]').prev();
                var prevId = $prev.attr('data-target');
                var $target = $btn.siblings('[data-target="'+prevId+'"]');


            }
        });
    });

    //.moveTo()
    // var headerH = $header.outerHeight();
    $btn.on('click', function(){
        var target = $(this).attr('data-target')||$(this).attr('data-anchor');
        var top = $(this).index() == 0 ? 0 : 40;

        moveTo({
            top : top,
            target : target,
        });
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 맨 위로 이동하기 */
    var $wrap = $('#aisdeBtnTop');

    $wrap.addClass('is-hidden')

    // 위치고정
    sticky({
        target: $wrap,
        position: 'bottom',
        callback : function(){}
    });

    // 최 상담에서 hidden
    scrollAction({
        target: $('section').eq(1),
        top: 0,
        scrollDownAction : function(){
            // 스크롤 DOWN 액션
            $wrap.removeClass('is-hidden');
        },
        scrollUpAction : function(){
            // 스크롤 UP 액션
            $wrap.addClass('is-hidden');
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    let $wrap = $('.isTouch');

    if (!$wrap.length) return;

    $wrap.each(function(i, each) {
        $this = $(each);
        $this.removeClass('isTouch')

        $this.bind('touchstart', function(e) {
            $this.addClass('is-touch');
        });

        $this.bind('touchend', function(e) {
            $this.removeClass('is-touch');
        });

    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...