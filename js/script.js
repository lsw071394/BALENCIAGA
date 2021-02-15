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
        } else {
            $('.black_bg').css({ 'visibility': 'hidden' })
            $('.white-wrap span').css({ 'background-color': '#262626' })
            $('.white-wrap .notice').removeClass('on');
        }
    }

    var chart = new Highcharts.chart('container1', {

        chart: {
            type: 'variablepie',
            // width: 200,
            height: 220,
            marginTop: 20
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
            }
        },

        series: [{
            innerSize: '30%',
            zMin: 0,
            // shadow: {
            //     color: 'blue'
            // },
            data: [{
                className: 'ds',
                name: 'hello',
                dataLabels: {
                    enabled: false,
                    borderRadius: (5, 0, 2, 5),
                    backgroundColor: '#fff',
                    padding: 8,
                    x: -80,
                    y: 20
                },
                y: 30,
                z: 20,
                color: '#32C5FF',
            }, {
                name: '',
                y: 22,
                z: 10,
                color: '#02C04F'
            }, {
                name: '',
                y: 19,
                z: 10,
                color: '#FFBC47'
            }, {
                name: '',
                y: 10,
                z: 10,
                color: '#FF7315'
            }, {
                name: '',
                y: 7,
                z: 10,
                color: '#DDDDDD'
            },]
        }],
    });



    Highcharts.chart('container', {
        chart: {
            type: 'line',
            height: 220,

        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },

        xAxis: {
            categories: ['0' + 9 + '월', 10 + '월', 11 + '월', 12 + '월',
            ],
            labels: {
                style: {
                    fontSize: 16,
                    color: '#262626',
                    fontFamily: 'NanumSquare, sans-serif'
                }
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor: '#F5F5F5'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false,
                },
                enableMouseTracking: false,
                lineWidth: 1,
            }
        },
        series: [{
            name: '',
            data: [10, 14, 13, 23.5],
            marker: {
                symbol: 'circle',
                radius: 5
            },
            color: '#FA6400'
        }, {
            name: '',
            data: [20, 25, 18, 20],
            marker: { symbol: 'circle', radius: 5 },
            color: '#32C5FF'
        }],
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }

    });
    $('.highcharts-yaxis-labels text').remove();
    $('.highcharts-legend').remove();
    $('.highcharts-xaxis').remove();
    $('.highcharts-yaxis-grid .highcharts-grid-line').eq(0).remove();

})