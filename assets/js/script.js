$(function ($) {
    "use strict";

    //menu fixed js

    var menuOfset = $('#customNav').offset().top;

    $(window).on('scroll', function () {

        var scrilTop = $(window).scrollTop();

        if (scrilTop > menuOfset) {
            $('#customNav').addClass('menuFixed');
        } else {
            $('#customNav').removeClass('menuFixed');
        }

        //back to top button js

        if (scrilTop > 300) {
            $('.bc2top').fadeIn(1000);
        } else {
            $('.bc2top').fadeOut(1000);
        }

        // //color change js

        // if (scrilTop > 200) {
        //     $('.color-change-icon').fadeIn(500);
        // } else {
        //     $('.color-change-icon').fadeOut(500);
        // }

    });

    // bc2top button
    $('.bc2top').click(function (){

        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    // ripples js plugin

    $('#banner-part').ripples({
        dropRadius: 20,
        resolution: 512,
        perturbance: 0.04,
    });
    $('.color-change-icon').click(function(){
               $('.color-change').stop().toggle(500);
           });


     //color change js

    $('.color-one').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#E02217');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(224, 34, 23, .8)');
    });

    $('.color-two').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#FF5722');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(255, 87, 23, .8)');
    });

    $('.color-three').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#673AB7');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(158, 58, 183, .8)');
    });
    
    $('.color-four').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#8BC34A');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(139, 195, 74, .8)');
    });

    $('.color-five').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#1ABC9C');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(26, 188, 156, .8)');
    });

    $('.color-six').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#03A9F4');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(3, 169, 244, .8)');
    });

    $('.color-seven').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#FBAA33');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(251, 170, 51, .8)');
    });

    $('.color-eight').click(function () {
        $(':root').get(0).style.setProperty('--primary-color', '#795548');
        $(':root').get(0).style.setProperty('--background-color', 'rgba(251, 170, 51, .8)');
    });


});
