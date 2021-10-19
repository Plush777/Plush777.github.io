$(document).ready(function() {
	$('.fullpage').fullpage({
        sectionsColor: ['#292a2d', '#ddd', '#292a2d', '#ddd'],
        anchors: ['section1', 'section2', 'section3', 'section4'],
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        loopTop:true,
        loopBottom:true,
        onLeave: function (section, index) {
            if (index == 1){
                $('#fp-nav ul li a span,.fp-slidesNav ul li a span').css({background:"#fff"});
                $('.secTitle').removeClass('s02_active s03_active s04_active');
                $('.subTitle').removeClass('fadeEffect');
            } else if(index == 2){
                $('#fp-nav ul li a span,.fp-slidesNav ul li a span').css({background:"#333"});
                $('.subTitle').removeClass('fadeEffect');
                $('.readMe').removeClass('active');
                $('.mobileReadMe').removeClass('active');
                $('.secTitle').addClass('s02_active');
                setTimeout(function(){
                    $('.secTitle.s02 .moveBorder').fadeOut();
                },4500);
            } else if(index == 3){
                $('#fp-nav ul li a span,.fp-slidesNav ul li a span').css({background:"#fff"});
                $('.subTitle').removeClass('fadeEffect');
                $('.secTitle').removeClass('s02_active');
                $('.secTitle').addClass('s03_active');
                setTimeout(function(){
                    $('.secTitle.s03 .moveBorder').fadeOut();
                },4500);
            } else if(index == 4){
                $('#fp-nav ul li a span,.fp-slidesNav ul li a span').css({background:"#333"});
                $('.subTitle').addClass('fadeEffect');
                $('.readMe').removeClass('active');
                $('.mobileReadMe').removeClass('active');
                $('.secTitle').removeClass('s02_active s03_active');
                $('.secTitle').addClass('s04_active');
                setTimeout(function(){
                    $('.contactPage').addClass('animation_On')
                    $('.secTitle.s04 .moveBorder').fadeOut();
                },4500);
            }
        }
	});

    /* swiper */
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: false,
        speed:500,
        delay:1000,
        slidesPerView: 'auto',
        
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    /* readMe 토글 */
    $('.btnReadMeToggle').on({
        "click":function(){
            $(this).closest('.readMe').toggleClass('active');
        }
    });

    /* 모바일 readMe 토글 */
    $('.btnMobileReadMe').on({
        "click":function(){
            $(this).closest('.mobileReadMe').toggleClass('active');
        }
    });

    if(window.matchMedia("(max-width: 1870px)").matches == true) {
        $('#container .section .listWrap.projectPage').removeClass('hover');
        $('#container .section .listWrap.contactPage').removeClass('hover');
    }
});