var canvas, exportRoot;

function sectionResize() {
    $("section.page").width($(window).width());
    $("section.page").height($(window).height());
}

$(function () {

    window.exportRoot = exportRoot;

    var click_event = "click";
    var pagerColor = ['#7ac7f8', '#f9f5c5', '#c9e7bc'];

    var sectionAry = ['section2', 'section3', 'section4'];

    var sectionTotal = sectionAry.length;

    for (var j = 0; j < sectionTotal; j++) {
        var total = $("#custom-wrap section#" + sectionAry[j] + " ul.content li").length;
        if (total == 1 || sectionAry[j] == 'index' || sectionAry[j] == 'accessory')
            continue;

        $("#custom-wrap section#" + sectionAry[j]).append('<nav class="pager ' + sectionAry[j] + ' ' + pagerColor[j] + '"></nav>');
        var i = 0;
        for (i = 0; i < total; i++) {
            var status = '';
            if (i == 0)
                status = 'active first';
            $("#custom-wrap section#" + sectionAry[j] + " nav.pager").append('<a href="javascript:;" class="' + status + '" slide="' + i + '"></a>');
        }
        $("#custom-wrap section#" + sectionAry[j]).append('<nav class="arrow ' + sectionAry[j] + '"></nav>');
        var i = 0;
        var total = 2;
        for (i = 0; i < total; i++) {
            var dx = 'next';
            if (i == 0) {
                dx = 'prev';
            }
            $("#custom-wrap section#" + sectionAry[j] + " nav.arrow").append('<a href="javascript:;" class="' + dx + '"></a>');
        }
    }

    //nav arrow
    $("nav.arrow a").on(click_event, function () {
        var current = $(this).parents(".page").find("ul.content li.active");
        var target = null;

        if ($(this).hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $(this).parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });



    //nav pro1
    $("#section4 .content .kv .inner #pro1").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(1)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //nav pro2
    $("#section4 .content .kv .inner #pro2").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(2)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //nav pro3
    $("#section4 .content .kv .inner #pro3").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(3)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //nav pro4
    $("#section4 .content .kv .inner #pro4").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(4)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });



    //index sub1
    $("#section4 .content .state .sub-content span.sub1").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(1)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //index sub2
    $("#section4 .content .state .sub-content span.sub2").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(2)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //index sub3
    $("#section4 .content .state .sub-content span.sub3").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(3)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });
    //index sub4
    $("#section4 .content .state .sub-content span.sub4").on(click_event, function () {
        var current = $("nav.arrow a").parents(".page").find("ul.content li:nth-child(4)");
        var target = null;
        if ($("nav.arrow a").hasClass('next')) {
            target = current.next().length > 0 ? current.next() : current.siblings().first();
        }
        else {
            target = current.prev().length > 0 ? current.prev() : current.siblings().last();
        }
        var clickItem = $("nav.arrow a").parents(".page").find("nav.pager").find("a").eq(target.index());
        clickItem.trigger(click_event);
    });


    //nav pager
    $("nav.pager a").on(click_event, function () {
        var current = $(this).parents(".page").find("ul.content li.active");
        var target = $(this).parents(".page").find("ul.content li").eq($(this).index());
        var current_bg = $(this).parents(".page").find("ul.bg li").eq(current.index());
        var target_bg = $(this).parents(".page").find("ul.bg li").eq($(this).index());

        if (current.index() === target.index())
            return;
        target.addClass("prepare");
        if (target.index() > current.index()) {
            setTimeout(function () {
                target.removeClass("prev").addClass("next");
                target_bg.removeClass("prev").addClass("next");
                setTimeout(function () {
                    target.removeClass("prepare");
                    current.addClass("prev").removeClass("active");
                    target.addClass("active").removeClass("prev").removeClass("next");
                }, 50);
            }, 1);
        }
        else {
            setTimeout(function () {
                target.removeClass("next").addClass("prev");
                target_bg.removeClass("next").addClass("prev");
                setTimeout(function () {
                    target.removeClass("prepare");
                    current.removeClass("active").addClass("next");
                    target.removeClass("prev").removeClass("next").addClass("active");
                }, 50);
            }, 1);
        }

        //TweenMax.set(target_bg, { zIndex: 2000 });
        //TweenMax.set(current_bg, { zIndex: 1000 });
        //TweenMax.to(target_bg, 0.3, { opacity: 1, delay: .4 });
        //TweenMax.to(current_bg, 0.3, { opacity: 0, delay: 1 });
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        target.find("img").trigger("click");
    });

    //waypoint for navigation
    var sectionArray = ['section1', 'section2', 'section3', 'section4', 'section5'];
    

    for (var i = 0; i < sectionArray.length; i++) {
        $('section#' + sectionArray[i]).waypoint(function(direction){

            var target_section = $(this).attr('id');

            switch(direction){
            
                case 'down':
                    $("#kv-head div span").each(function(){
                       if($(this).attr('data-anchor') == target_section)
                       {
                        $(this).addClass('active');
                       } 
                       else{
                        $(this).removeClass('active');
                       }
                    });
                break;

                case 'up':
                    $("#kv-head div span").each(function(){
                        if ($(this).attr('data-anchor') == target_section) {
                        $(this).addClass('active');
                       } 
                       else{
                        $(this).removeClass('active');
                       }
                    });
                break;
            
            }
        });    
    }

    // nav-head for #custom-wrap
    $("#kv-head div span.nav1").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section1").offset().top, ease: Expo.easeInOut } });
    });
    $("#kv-head div span.nav2").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section2").offset().top, ease: Expo.easeInOut } });
    });
    $("#kv-head div span.nav3").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section3").offset().top, ease: Expo.easeInOut } });
    });
    $("#kv-head div span.nav4").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section4").offset().top, ease: Expo.easeInOut } });
    });
    $("#kv-head div span.nav5").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section5").offset().top, ease: Expo.easeInOut } });
    });

    $("nav.shortcut ul li").on('mouseover', function () {
        $("nav.shortcut").css('width', 51);
    });
    $("nav.shortcut ul li").on('mouseout', function () {
        $("nav.shortcut").css('width', 51);
    });


    //site map
    $("#section5 .main-ul .main-li:first-child ul li:first-child").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section1").offset().top, ease: Expo.easeInOut } });
    });
    $("#section5 .main-ul .main-li:first-child ul li:nth-child(2)").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section2").offset().top, ease: Expo.easeInOut } });
    });
    $("#section5 .main-ul .main-li:first-child ul li:nth-child(3)").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section3").offset().top, ease: Expo.easeInOut } });
        blankTimeline_Animation();
    });
    $("#section5 .main-ul .main-li:first-child ul li:nth-child(4)").on('click', function () {
        TweenMax.to(window, 0.7, { scrollTo: { y: $("section#section4").offset().top, ease: Expo.easeInOut } });
    });


    $("#section2 .inner .inner-content h3 span").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($("#section2 .inner .inner-content h3 span.t1").hasClass("active")) {
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char1"), 0.4, { opacity: 1, ease: 'Expo.easeIn' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char2"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char3"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .pic1"), 0.3, { opacity: 1, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic2"), 0.3, { opacity: 0, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic3"), 0.3, { opacity: 0, ease: 'Quad.ease' });
        }
        else if ($("#section2 .inner .inner-content h3 span.t2").hasClass("active")) {
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char2"), 0.4, { opacity: 1, ease: 'Expo.easeIn' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char1"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char3"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .pic2"), 0.3, { opacity: 1, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic1"), 0.3, { opacity: 0, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic3"), 0.3, { opacity: 0, ease: 'Quad.ease' });
        }
        else if ($("#section2 .inner .inner-content h3 span.t3").hasClass("active")) {
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char3"), 0.4, { opacity: 1, ease: 'Expo.easeIn' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char1"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .inner-content section.char2"), 0.4, { opacity: 0, ease: 'Expo.easeOut' });
            TweenMax.to($("#section2 .content .kv .inner .pic3"), 0.3, { opacity: 1, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic1"), 0.3, { opacity: 0, ease: 'Quad.ease' });
            TweenMax.to($("#section2 .content .kv .inner .pic2"), 0.3, { opacity: 0, ease: 'Quad.ease' });
        }
    });


    //Camera Smile Animation
    //function kvheadTimeline_Animation() {

    //    var kvheadTimeline = new TimelineMax();
    //    kvheadTimeline.append(TweenMax.set(kvhead, { top: -160 }));
    //    kvheadTimeline.insert(TweenMax.set(kvhead_h3, { top: -80 }));
    //    kvheadTimeline.insert(TweenMax.set(nav_side, { left: -50 }));
    //    kvheadTimeline.insert(TweenMax.to(kvhead, 1.5, { delay: 1.5, top: 0, ease: 'Bounce.easeOut' }));
    //    kvheadTimeline.insert(TweenMax.to(kvhead_h3, 1, { delay: 3.5, top: 20, ease: 'Expo.easeOut' }));
    //    kvheadTimeline.insert(TweenMax.to(kvhead, 1.5, { delay: 5, top: -130, ease: 'Expo.easeOut' }));
    //    kvheadTimeline.insert(TweenMax.to(kvhead_h1, 1.5, { delay: 5, fontSize: 18, height: 20, lineHeight: 20, top: 135, ease: 'Expo.easeOut' }));
    //    kvheadTimeline.insert(TweenMax.to(kvhead_ul, 1.5, { delay: 5, bottom: -140, ease: 'Expo.easeOut' }));
    //    kvheadTimeline.insert(TweenMax.to(nav_side, 1, { delay: 6.5, left: 0, ease: 'Expo.easeOut' }));
    //    $("nav a").click(function () {
    //        if ($(this).parents(".page").find("ul.content li section").hasClass('state3')) {
    //            state3Timeline.restart();
    //        }
    //    });
    //}
    //kvheadTimeline_Animation();


   

    //Bg Parallax Effect
    //$('section#performance ul.bg li.kv').parallax("50%", 0.4);
    //$('section#design ul.bg li.kv').parallax("70%", 0.09);
    //$('section#app ul.bg li.kv').parallax("50%", 0.1);


    //colorbox
    if ($(window).width() > 1920 * 0.8) {
        $(".videos a").colorbox({ iframe: true, innerWidth: 1920 * 0.8, innerHeight: 1080 * 0.8 });
    } else {
        $(".videos a").colorbox({ iframe: true, innerWidth: $(window).width() * 0.8, innerHeight: $(window).height() * 0.8 });
    }
    $(".videos a").each(function () {
        $(this).attr('href', $(this).attr('data-href'));
    });


    if ($("html").hasClass('ie8')) {
    }
    else {
        $(window).resize(sectionResize).trigger('resize');
    }

    //resize window.width
    $(window).resize(function () {
        $("#custom-wrap").width($(window).width());
        $("#special-sectionOverview nav.arrow").width($(window).width());
        if ($(window).width() > 960) {
            $("#custom-wrap nav.pager").css('left', ($(window).width() - 960) / 2 + 126);
            //$("#custom-wrap .inner").css('left', 0);
            //$("#custom-wrap nav.arrow a.prev").css('left', 70);
            //$("#custom-wrap nav.arrow a.next").css('right', 20);
            $("#custom-wrap nav.shortcut").show();
        }
        else {
            //$("#custom-wrap .inner").css('left', -126 / 2);
            $("#custom-wrap nav.pager").css('left', 126 / 2);
            //$("#custom-wrap nav.arrow a.prev").css('left', 70);
            //$("#custom-wrap nav.arrow a.next").css('right', 20);
            $("#custom-wrap nav.shortcut").hide();
        }

        $("#custom-wrap nav.arrow").show();
        $("#custom-wrap").css('left', -$("#special-sectionOverview").offset().left);
    });

    $(window).trigger('resize');

});