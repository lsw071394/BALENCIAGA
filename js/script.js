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
        } else {
            $('.black_bg').css({ 'visibility': 'hidden' })
        }

    }
})