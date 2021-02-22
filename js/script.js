$(function () {
    $('.accro-btn').on('click', function () {
        $('.accrodian').slideToggle(200)
        $(this).toggleClass('on');
    });
    $('.header-wrap .hamburger').on('click', function () {
        $(this).addClass('act');
        $('nav').addClass('act');

        navOn();
    })
    $('nav .hamburger').on('click', function () {
        $('.header-wrap .hamburger').removeClass('act');
        $('nav').removeClass('act');

        navOn();
    })
    $('.black_bg').on('click', function () {
        $('.header-wrap .hamburger').removeClass('act');
        $('nav').removeClass('act');
        navOn();
    })
    function navOn() {
        if ($('.header-wrap .hamburger').hasClass('act')) {
            $('.black_bg').css({ 'visibility': 'visible' })
            $('body').css({ 'overflow': 'hidden' })
        } else {
            $('.black_bg').css({ 'visibility': 'hidden' })
            $('body').css({ 'overflow': 'auto' })
        }
    }
    // 가격 + 블루컬러
    $('.pay-box > span:contains(+)').css({ 'color': '#3262FF' })
    // challenge add 2 디폴트
    $('.selected').on('click', function () {
        stopPropagation();
    });
    // challenge add 3 체크
    $('.challenge-result-text span').on('click', function () {
        if ($('#cb1').is(':checked') == true) {
            $('#cb1').prop('checked', false);
        } else {
            $('#cb1').prop('checked', true);
        }
    });
    // counter-up
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');


        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 1000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
    });


    // 사이드 리모트 show / hide
    // var scy = 0;
    // $(window).scroll(function () {
    //     var sc = $(this).scrollTop();
    //     console.log(sc)
    //     if (sc < 210) {
    //         $('.side-remote').hide(500);
    //     }
    //     else { $('.side-remote').show(500) }
    // })


    var _this = this;
    var _scrollTop = 0;
    var _exScrollTop = null;
    var _isAni = void 0; // undefined 강제 지정
    function init() {
        layout();
        setting();
        addEvent();
    }
    function layout() {
        _this.$win = $(window);
        _this.$scroll = $('html, body');
    }

    function setting() {
        _isAni = false;
    }
    function addEvent() {
        _this.$win.on('scroll', onScrollWin).trigger('scroll');
    }

    function onScrollWin(e) {
        _scrollTop = _this.$win.scrollTop(); // 스크롤 Y 좌표.
        console.log(_scrollTop);
        scrollMenuVisible();
        _exScrollTop = _scrollTop;
    }

    function scrollMenuVisible() {
        if (_exScrollTop === null) return;
        if (_scrollTop < 0) return;

        if (_scrollTop < _exScrollTop) {
            console.log('위로');
            if ($('.side-remote').hasClass('hide')) $('.side-remote').removeClass('hide');

        } else {
            console.log('아래로');
            if (!$('.side-remote').hasClass('hide')) $('.side-remote').addClass('hide');
        }
        if (_scrollTop <= 0) {
            $('.side-remote').addClass('hide')
        }
    }
    init();


    $('a.side-remote').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    })




    // 챌린지 아이템 체크 ------------------
    var $checkItem = $('.select').length + 3;
    $('.checkCount').html($checkItem); //로딩시 초기 셋팅(3개 선택)
    $('.challenge-item').on('click', function () {
        var chek_len = $('.select').length + 3;
        if ($(this).hasClass('select')) { //내가 slect 클래스가 있을때
            $(this).removeClass('select');
            chek_len = $('.select').length + 3; //현재 select 갯수 + 3
            $('.checkCount').html(chek_len);
        } else if (!$(this).hasClass('select')) {
            if (chek_len < 5) {
                $(this).addClass('select');
                chek_len = $('.select').length + 3; //현재 select 갯수 + 3
                $('.checkCount').html(chek_len);
            }
        }
    });
});



