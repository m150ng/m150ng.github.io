function bluring(){ 
	if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG"||event.srcElement.tagName=="button") 
	document.body.focus(); 
} 
document.onfocusin=bluring; 

// JavaScript Document

/* 레이아웃 공통 */

var bar;
var mVis;
var autoplay;
var aboutSlide;
$(function(){
    
     $('.work-vew .top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	});
    
	// Scrollbar
	$('.work-pop .inbx').mCustomScrollbar({
		moveDragger:true,
		theme: 'dark-thick',
        mouseWheelPixels: 150,
        scrollInertia : 150
	});
    
	//back-top
	$('#back-top').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) { 
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	$('#back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	});

	scrollAnimation();        
    	
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; } else { // old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
		} // 추출한 파일명 삽입 
		$(this).siblings('.upload-name').val(filename); 
	});
    
    //셀렉트박스
	$('.select').niceSelect();
    
    if($("body").hasClass("index")){
            
        bar = new ProgressBar.Line(progress, {
          strokeWidth: 1,
          easing: 'linear',
          duration: 7000,
          color: '#ffffff',
          trailColor: 'rgba(0, 0, 0, 0.2)',
          trailWidth: 1,
          svgStyle: {width: '100%', height: '100%'}
        });

        autoplay = 7000;
        mVis = new Swiper('.indexWrap', {
            speed: 800,
            spaceBetween: 0,
            autoplay: {
                delay:autoplay,
                disableOnInteraction: false,
            },
        });  

        $('.index-cotr .prev').click(function(){
            mVis.slidePrev();
            bar.set(0);
        })
        $('.index-cotr .next').click(function(){
            mVis.slideNext(); 
            bar.set(0);
        })

        if (mVis.realIndex==0) {
            intro();
            aniEff();         
            secOut();   
            imgAmt1();
            bar.animate(1.0);
            $('.section .copy').addClass('start');
        }

        mVis.on('slideChangeTransitionStart', function () {
            bar.set(0);
            $('.section .copy').removeClass('start');
            $('.index-pag .n em i').removeClass('active'); 
        });	
        mVis.on('slideChangeTransitionEnd', function () {
            if (mVis.realIndex==0) {
                intro();
                aniEff();         
                secOut();   
                imgAmt1();
            } else	if (mVis.realIndex==1){
                pf1();  
                aniEff();           
                secOut(); 
                imgAmt2();
            } else	if (mVis.realIndex==2){
                pf2();  
                aniEff();             
                secOut(); 
                imgAmt3(); 
            } else	if (mVis.realIndex==3){
                pf3();  
                aniEff();            
                secOut();   
                imgAmt4();
            }
            bar.animate(1.0);
            $('.section .copy').addClass('start');
        });	
        
        imgAmt1();
        imgAmt2();
        imgAmt3();
        imgAmt4();
        
    } else if($("body").hasClass("about")){
        
        aboutSc();
        
    } else if($("body").hasClass("work")){   
            
        var iso;
        //timer = setTimeout(function () { 
        $('.work').imagesLoaded(function(){
            if(iso != null){
                iso.isotope('destroy');
            }
            iso = $('.work-list .inbx').isotope({
                percentPosition: true,
                itemSelector: '.item'
            });
        });
        //}, 300);

        $(".work-list .inbx .item").mouseenter(function(){
            $(this).find(".cover").css("transform", "matrix(1.03, 0, 0, 1.03, 0, 0)");
        });
        $(".work-list .inbx .item").mouseleave(function(){
            $(this).find(".cover").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
        });
    }
        
    header();
    adjustScript();
    
});

function adjustScript() {
    
	if($(window).width() > 1023){ //pc
		$(".gnb-nav .menu-item").each(function(idx){
			$(this).bind({
				"mouseenter focusin":function(){
					$(".gnb-nav .menu-item").removeClass('focused');
					$(this).addClass('focused').siblings().addClass('focused-out');
				}
			});
		});
		$(".gnb-nav .menu-item").mouseleave(function(){
			$(this).addClass('focused-out');
			$(".gnb-nav .menu-item").removeClass('focused');
		});
	} 
    if($("body").hasClass("about")){
        if($(window).width() < 1023){ //mobile
            aboutSlide = new Swiper('.about003 .slide-bx', {
                speed: 400,
                slidesPerView:'auto',
                breakpoints: {
                    1023: {
                        spaceBetween: 14,
                    }
                }
            });

        // } else { //pc  
        //     aboutSlide.destroy(true, true);
        //     $('.about003 .slide-bx').removeAttr('style');
        //     $('.about003 .slide-bx').removeAttr('style'); 
        }
    }
    
}

function aboutSc() {    
    var aboutOffset = $( '.about001' ).offset();
    $( window ).scroll( function() {
        if ( $( document ).scrollTop() > aboutOffset.top ) {
            $("header").addClass('cBlack');
        }
        else {
            $("header").removeClass('cBlack');
        }
    });
}

function header() {
    var t = $("header").height(),
        e = 0;
    $(".top .kv").length;
    $(window).on("scroll", function() {
        var o = $(this).scrollTop();
        e < o ? 100 <= $(window).scrollTop() && $("header").addClass('down') : $("header").removeClass('down'), e = o
    })
}

var $i01 = $('.indexWrap .about .bg');
    
function secOut(){
    $('.indexWrap .copy span').removeClass('animated').removeClass('object-visible').removeClass('fadeInUp');
    $('.indexWrap .copy .more').removeClass('animated').removeClass('object-visible').removeClass('fadeInUp');    
}

function intro() {	
    $(".m-word").addClass('active');
    $(".bg").removeClass('active');
    $(".about .bg").addClass('active');
    $(".index-pag .n em .n2").text('1');
    $("h2.title").text("Digital Creative Company"); 
    $('.index-pag .n em i').addClass('active');  
}
function pf1() {	
    $(".m-word").removeClass('active');
    $(".bg").removeClass('active');
    $(".pf1 .bg").addClass('active');
    $(".index-pag .n em .n2").text('2');
    $("h2.title").text('Work');
    $('.index-pag .n em i').addClass('active');
}
function pf2() {	
    $(".m-word").removeClass('active');
    $(".bg").removeClass('active');
    $(".pf2 .bg").addClass('active');
    $(".index-pag .n em .n2").text('3');
    $("h2.title").text('Work');
    $('.index-pag .n em i').addClass('active'); 
}
function pf3() {
    $(".m-word").removeClass('active');
    $(".bg").removeClass('active');
    $(".pf3 .bg").addClass('active');
    $(".index-pag .n em .n2").text('4');
    $("h2.title").text('Work');
    $('.index-pag .n em i').addClass('active');
}


function imgAmt1(){
	/*var wrapper = document.querySelector('.indexWrap .about'),
	layer11 = document.querySelector('.section .bg'),
	layer12 = document.querySelector('.section .copy'),
	mc1 = document.querySelector('.section .mw1'),
	mc2 = document.querySelector('.section .mw2'),
	mc3 = document.querySelector('.section .mw3'),
	mc4 = document.querySelector('.section .mw4'),
	mc5 = document.querySelector('.section .mw5'),
	mc6 = document.querySelector('.section .mw6');

	wrapper.addEventListener('mousemove',function(e){
		var pageX = e.clientX,
		pageY = e.clientY;
		layer12.style.webkitTransform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		layer12.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc1.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc2.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc3.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc4.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc5.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		mc6.style.transform = 'translateX(' + pageX/300 + '%) translateY(' + pageY/300 + '%)';
		layer11.style = 'background-position:'+ pageX/-20 +'px '+ pageY/-50 +'px';
	});   */ 
        
    var wrapper = document.querySelector('.indexWrap .about');
    wrapper.addEventListener('mousemove',function(e){
       var xPos = (event.clientX/$(window).width())-0.5,
           yPos = (event.clientY/$(window).height())-0.5,
           box = $('.section .bg'),
           coord = $('.section .copy');

      /*TweenLite.to(box, 1.6, {
        rotationY: -5 * xPos, 
        rotationX: -5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 1500,
        transformOrigin: 'center'
      });*/
      TweenLite.to(coord, 0.9, {
        rotationY: 8 * xPos, 
        rotationX: 8 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
      });
        
    });
}
function imgAmt2(){
    var wrapper = document.querySelector('.indexWrap .pf1');
    wrapper.addEventListener('mousemove',function(e){
       var xPos = (event.clientX/$(window).width())-0.5,
           yPos = (event.clientY/$(window).height())-0.5,
           box = $('.pf1 .bg'),
           coord = $('.pf1 .copy');
        
      TweenLite.to(coord, 0.9, {
        rotationY: 5 * xPos, 
        rotationX: 5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
      });
    });
}
function imgAmt3(){        
    var wrapper = document.querySelector('.indexWrap .pf2');
    wrapper.addEventListener('mousemove',function(e){
       var xPos = (event.clientX/$(window).width())-0.5,
           yPos = (event.clientY/$(window).height())-0.5,
           box = $('.pf2 .bg'),
           coord = $('.pf2 .copy');
        
      TweenLite.to(coord, 0.9, {
        rotationY: 5 * xPos, 
        rotationX: 5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
      });
    });
}
function imgAmt4(){        
    var wrapper = document.querySelector('.indexWrap .pf3');
    wrapper.addEventListener('mousemove',function(e){
       var xPos = (event.clientX/$(window).width())-0.5,
           yPos = (event.clientY/$(window).height())-0.5,
           box = $('.pf3 .bg'),
           coord = $('.pf3 .copy');
        
      TweenLite.to(coord, 0.9, {
        rotationY: 5 * xPos, 
        rotationX: 5 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
      });
    });
}

var ua = window.navigator.userAgent;
var winW = $(window).width();

$(window).bind('resize', function(){
    adjustScript();
	setTimeout(function(){
		if(winW != $(window).width()){
			winW = $(window).width();
		}
	}, 500);
});

$(document).on("click", "#header .btMn", menuCtr);

function menuCtr(e){
	e.preventDefault();
	
	$(this).toggleClass("open");	

	if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
		$("body").toggleClass("ovf_hdn");
	}else{
		$("html, body").toggleClass("ovf_hdn");
	}	

	if(!$(this).hasClass("open")){
        $("#nav").stop().removeClass('open');
		lm_open = false;

		if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
			$("html").css({"height" : "100%"});
			$("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
		}
	}else{
        $("#nav").stop().addClass('open');
		lm_open = true;

		if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
			$("html").css({"height":$(window).height() + "px"});
			$("body").css({"height":$(window).height() + "px", "overflow" : "hidden", "position" : "relative"});
		}
	}
}

function reg01(){
    if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
		$("body").addClass("ovf_hdn");
        $("html").css({"height" : "100%"});
        $("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
	}else{
		$("html, body").addClass("ovf_hdn");
        $("html").css({"height" : "100%"});
        $("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
	}	
	$("#contactLay01").addClass('open');
    
    $('#contactLay01 .btMn').click(function () {
		$("#contactLay01").removeClass('open');
		$("html, body").removeClass("ovf_hdn");
        $("html").css({"height":"auto"});
        $("body").css({"height":"auto", "overflow" : "visible", "position" : "relative"});
		return false;
	});
}

function reg02(){
    if(ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1){
		$("body").addClass("ovf_hdn");
        $("html").css({"height" : "100%"});
        $("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
	}else{
		$("html, body").addClass("ovf_hdn");
        $("html").css({"height" : "100%"});
        $("body").css({"height" : "100%", "overflow" : "visible", "position" : "static"});
	}	
	$("#contactLay02").addClass('open');
    
    $('#contactLay02 .btMn').click(function () {
		$("#contactLay02").removeClass('open');
		$("html, body").removeClass("ovf_hdn");
        $("html").css({"height":"auto"});
        $("body").css({"height":"auto", "overflow" : "visible", "position" : "relative"});
		return false;
	});
}

// 레이어팝업
function callBpop(classId){
	$(classId).bPopup({
        position: [0, 0], //x, y
        positionStyle: 'fixed',
		onOpen: function() { 
			$('#header').removeClass('cBlack');
		}, 
		onClose: function() { 
			$('#header').addClass('cBlack');
		}
    });
    //return false;
}

$(function(){	
	aniEff();
});

function aniEff(){

    // Animations
    //-----------------------------------------------
    if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
        $("[data-animation-effect]").each(function() {
            var $this = $(this),
            animationEffect = $this.attr("data-animation-effect");
            if(Modernizr.mq('only all and (min-width: 100px)') && Modernizr.csstransitions) {					
            $this.appear(function() {
                var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
                if(delay > 1) $this.css("effect-delay", delay + "ms");
                    setTimeout(function() {
                        $this.addClass('animated object-visible ' + animationEffect);
                    }, delay);
                }, {accX: 0, accY: -130});
                } else {
                    $this.addClass('object-visible');
            }
        });
    };
	

} 

/* parallax scrolling motion */
scrollAnimation();
function scrollAnimation(){
    if (($("[data-animation]").length>0) && !Modernizr.touch) {
        $(window).load(function(){
            var $elements = $( '*[data-animation]' );
            var h = $(window).height();
            $elements.each( function( i, el ) {
                var $el = $( el ),
                    animationClass = $el.data('animation'),
                    $delay = $el.data('delay'),
                    $duration = $el.data('duration');

                if($delay>0){
                    $el.css({
                        '-webkit-animation-delay':$delay+'s',
                        'animation-delay':$delay+'s'
                    })
                }
                if($duration>0){
                    $el.css({
                        '-webkit-animation-duration':$duration+'s',
                        'animation-duration':$duration+'s'
                    })
                }

                var t = $el.offset().top;
                if(t > h){
                    $el.addClass('wait-animation');
                }
                $el.addClass('animated '+animationClass);

                $el.waypoint(function(){
                    $el.removeClass('wait-animation');
                }, { offset: '100%', triggerOnce: true });
            });
        });
    };
}
