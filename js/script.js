$(function () {
    // $('.arrco-btn').on('click', function () {

    //     $(this).parent().toggleClass('act')
    // });


    $('.hamburger').on('click', function () {
        $(this).toggleClass('act');
        $('nav').toggleClass('act');
        navOn();
    })
    $('.pay-box > span:contains(+)').css({ 'color': '#3262FF' })

    function navOn() {
        if ($('.hamburger').hasClass('act')) {
            $('.black_bg').css({ 'visibility': 'visible' })
            $('.white-wrap span').css({ 'background-color': '#F7F7F7' })
            $('.white-wrap .notice').addClass('on');
            $('body').css({ 'overflow': 'hidden' })
        } else {
            $('.black_bg').css({ 'visibility': 'hidden' })
            $('.white-wrap span').css({ 'background-color': '#262626' })
            $('.white-wrap .notice').removeClass('on');
            $('body').css({ 'overflow': 'auto' })
        }
    }


    $('.highcharts-yaxis-labels text').remove();
    $('.highcharts-legend').remove();
    $('.highcharts-xaxis').remove();
    $('.highcharts-yaxis-grid .highcharts-grid-line').eq(0).remove();




});



