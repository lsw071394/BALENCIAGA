$(function () {
    // $('.arrco-btn').on('click', function () {

    //     $(this).parent().toggleClass('act')
    // });

    // var h = $('.al').length;
    // console.log(h);
    // $('.notice-circle').html(h);


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



    $('.challenge-item').on('click', function () {
        console.log('click')
        $(this).toggleClass('select');
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







});



