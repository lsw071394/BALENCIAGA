$(function () {


    $('.accro-btn').on('click', function () {
        $('.accrodian').slideToggle(200)
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



    $('.pay-box > span:contains(+)').css({ 'color': '#3262FF' })

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

    $('.selected').on('click', function () {
        stopPropagation();
    });


    $('.challenge-result-text span').on('click', function () {
        if ($('#cb1').is(':checked') == true) {
            $('#cb1').prop('checked', false);
        } else {
            $('#cb1').prop('checked', true);
        }
    })




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



    // 사이드 리모트 show/hide
    var sc = window.scrollY;
    $(window).scroll(function () {
        var sc = $(document).scrollTop();
        if (sc < 210) {
            $('.side-remote').hide(500);
        } else { $('.side-remote').show(500) }
    })

    $('a.side-remote').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    })

    // 챌린지 아이템 체크 ------------------

    var $checkItem = $('.select').length + 3;
    $('.checkCount').html($checkItem);

    $('.challenge-item').on('click', function () {
        var $checkItem = $('.select').length + 3;
        if ($checkItem < 5) {
            $(this).toggleClass('select');
        } else if ($checkItem <= 5) {
            $(this).removeClass('select');
        }

        $('.checkCount').html($checkItem);
        return false;
    });








});



