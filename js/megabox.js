$(document).ready(function(){
    //메뉴 네비게이션
    $('#gnb>ul>li>a').mouseenter(function(){
        //$('div.gnb-depth2 ul').stop().slideDown();
        $(this).siblings().children("ul").stop().slideDown("fast");
        $(this).css("border-bottom", "3px solid white");
    });
    $('#gnb div.gnb-depth2 ul').mouseenter(function(){
        $(this).stop().slideDown();
        $(this).parent().siblings().css("border-bottom", "3px solid white");
    });
    $('#gnb>ul>li>a').mouseleave(function(){
        //$('div.gnb-depth2 ul').stop().slideUp();
        $(this).siblings().children("ul").stop().slideUp("fast");
        $(this).css("border-bottom", "none");
    });
    $('#gnb div.gnb-depth2 ul').mouseleave(function(){
        $(this).stop().slideUp();
        $(this).parent().siblings().css("border-bottom", "none");
    });

    //햄버거버튼 누르면 사이트맵 보이게 하기
    $('div.link-area button.menu').click(function(){
        if( $('div.link-area button.menu').text() == 'menu' ) {
            $('#sitemap').stop().slideDown("fast");
            $('#sitemap').siblings('.dis-none').stop().slideUp("fast");
            $('div.link-area button.menu').text('close');
            $('div.link-area button.menu').css({"border-radius":"50%", "background-color":"#444", "color":"#fff", "background-position":"center"});
            if( $('div.link-area button.search').text() == 'close' ) {
                $('div.link-area button.search').text('search');
                $('div.link-area button.search').css({"background":"none", "color":"#888"});
            }
            if( $('div.link-area button.mypage').text() == 'close' ) {
                $('div.link-area button.mypage').text('person');
                $('div.link-area button.mypage').css({"background":"none", "color":"#888"});
            }
        }
        else if ( $('div.link-area button.menu').text() == 'close' ) {
            $('#sitemap').stop().slideUp("fast");
            $('#sitemap').siblings('.dis-none').stop().slideUp("fast");
            $('div.link-area button.menu').text('menu');
            $('div.link-area button.search').text('search');
            $('div.link-area button').css({"background":"none", "color":"#888"});
        }
        else {
            $('#header_search').stop().slideUp("fast");
            $('#header_search').siblings('.dis-none').stop().slideUp("fast");
            $('div.link-area button.menu').text('menu');
            $('div.link-area button.search').text('search');
            $('div.link-area button').css({"background":"none", "color":"#888"});            
        }
    });
    //검색아이콘 누르면 header_search 보이게 하기
    $('div.link-area button.search').click(function(){
        if( $('div.link-area button.search').text() == 'search' ) {
            $('#header_search').stop().slideDown("fast");
            $('div.link-area button.search').text('close');
            $('div.link-area button.search').css({"border-radius":"50%", "background-color":"#444", "color":"#fff", "background-position":"center"});
            $('#header_search').siblings('.dis-none').stop().slideUp("fast");
            if( $('div.link-area button.menu').text() == 'close' ) {
                $('div.link-area button.menu').text('menu');
                $('div.link-area button.menu').css({"background":"none", "color":"#888"});
            }
            if( $('div.link-area button.mypage').text() == 'close' ) {
                $('div.link-area button.mypage').text('person');
                $('div.link-area button.mypage').css({"background":"none", "color":"#888"});
            }
        }
        else if( $('div.link-area button.search').text() == 'close' ) {
            $('div.link-area button.search').text('search');
            $('div.link-area button.search').css({"background":"none", "color":"#888"});
            $('#header_search').siblings('.dis-none').stop().slideUp("fast");
            $('#header_search').stop().slideUp("fast");
        }
        else {  //else는 적용이 안되는 중 ..
            $('#sitemap').stop().slideUp("fast");
            $('#sitemap').siblings('.dis-none').stop().slideUp("fast");
            $('div.link-area button.menu').text('menu');
            $('div.link-area button.search').text('search');
            $('div.link-area button').css({"background":"none", "color":"#888"});            
        }
        $("#header_search .btn").click(function(){
            $(this).parent().siblings().removeClass('on');
            $(this).parent().addClass('on');
            $('#header_search ul>li:last-child').click(function(){
                $('#header_search .list>ol:first-child').hide();
                $('#header_search .list>ol:last-child').show();
                $("#header_search .img img").attr("src", "https://img.megabox.co.kr/SharedImg/2022/05/23/oZfETtpEvKGpdY2JQo2Z6wFL0S4cpKy5_316.jpg");
                //현재 img의 src를 오른쪽 주소로 변경
            });
            $('#header_search ul>li:first-child').click(function(){
                $('#header_search .list>ol:last-child').hide();
                $('#header_search .list>ol:first-child').show();
                $("#header_search .img img").attr("src", "https://img.megabox.co.kr/SharedImg/2022/12/16/9vUySe7DNMro6tdYRPEbjzF2ebr48MwE_316.jpg");
            });
            /*첫번째 ol의 li mouseenter됐을 때 이미지 바뀌게 하기*/
            $('div.list > ol:first-child > li:nth-child(1)').mouseenter(function(){
                $('#header_search .img img').attr('src', 'https://img.megabox.co.kr/SharedImg/2022/12/16/9vUySe7DNMro6tdYRPEbjzF2ebr48MwE_316.jpg');
            });
            $('div.list > ol:first-child > li:nth-child(2)').mouseenter(function(){
                $('#header_search .img img').attr('src', 'https://img.megabox.co.kr/SharedImg/2022/10/27/ORrjuLOGuWgyZzrWIKug9X61ykfxBNov_316.jpg');
            });
            $('.rank-cont > .list > ol:first-child li:nth-child(3)').mouseenter(function(){
                $('#header_search .img img').attr('src', 'https://img.megabox.co.kr/SharedImg/2022/11/04/vRDxzQ7BT5UZJSCxjBXTtxdbKA7eYktj_316.jpg');
            });
            $('.rank-cont > .list > ol:first-child li:nth-child(4)').mouseenter(function(){
                $('#header_search .img img').attr('src', 'https://img.megabox.co.kr/SharedImg/2022/11/24/xFO8r2xbXzxoMD9iXbuKC1n5Bo79InhQ_316.jpg');
            });
            $('.rank-cont > .list > ol:first-child li:nth-child(5)').mouseenter(function(){
                $('#header_search .img img').attr('src', 'https://img.megabox.co.kr/SharedImg/2022/12/14/I4kjq9vKKc1dwn2OLIPE9RBTpV9LyWhp_316.jpg');
            });
        });
    });  //검색 아이콘 눌렀을 때 끝
    /////사람 아이콘 눌렀을 때 로그인 화면 보이게 하기
    $('div.link-area button.mypage').click(function(){
        if( $('div.link-area button.mypage').text() == 'person' ) {
            $('#header_mypage').stop().slideDown("fast");
            $('#header_mypage').siblings('.dis-none').stop().slideUp("fast");
            $('div.link-area button.mypage').text('close');
            $('div.link-area button.mypage').css({"border-radius":"50%", "background-color":"#444", "color":"#fff", "background-position":"center"});            
            if( $('div.link-area button.menu').text() == 'close' ) {
                $('div.link-area button.menu').text('menu');
                $('div.link-area button.menu').css({"background":"none", "color":"#888"});
            }
            if( $('div.link-area button.search').text() == 'close' ) {
                $('div.link-area button.search').text('search');
                $('div.link-area button.search').css({"background":"none", "color":"#888"});
            }
        }
        else if( $('div.link-area button.mypage').text() == 'close' ) {
            $('div.link-area button.mypage').text('person');
            $('div.link-area button.mypage').css({"background":"none", "color":"#888"});
            $('#header_mypage').siblings('.dis-none').stop().slideUp("fast");
            $('#header_mypage').stop().slideUp("fast");
        }
        else {  //else는 적용이 안되는 중 ..
            $('#sitemap').stop().slideUp();
            $('#sitemap').siblings('.dis-none').stop().slideUp();
            $('div.link-area button.menu').text('menu');
            $('div.link-area button.search').text('search');
            $('div.link-area button').css({"background":"none", "color":"#888"});            
        }

    });

    //박스오피스 포스터 이미지 mouseenter되면 요약부분 보이게 하기
    $('a.movie-list-info').mouseenter(function(){
        $(this).children('div.wrap').fadeIn("fast");
    });
    //박스오피스 포스터 이미지 mouseleave되면 요약부분 안 보이게 하기
    $('a.movie-list-info').mouseleave(function(){
        $(this).children('div.wrap').fadeOut("fast");
    });

    //마우스 올라갔다 내려갔다 애니메이션
    setInterval(updown, 1000);
    function updown() {
        $('#main_section01 .moving-mouse img').animate({top:"10px"}, 500);
        $('#main_section01 .moving-mouse img').animate({top:0}, 500);
        $('#main_section01 .moving-mouse img').animate({top:"10px"}, 500);
    }

    //혜택부분 슬라이더 애니메이션
    setInterval(sliderLup, 2000);
    function sliderLup() {
        $("div.slider-imgL").stop().animate({top:"-100px"}, "slow", function(){
            $(this).append($(this).children().first());
            $(this).css("top", 0);
        });/*이렇게 하면 작동은 잘 되긴 하는데 이미지가 animate되는 걸로 바꿔볼 예정 ==> 위에처럼 이미지가 올라오지 않음
        //$("div.slider-imgL a").stop().animate({top:0}, "slow");
        $("div.slider-imgL a").stop().animate({top:"100px"}, "slow", function(){
            $(this).append($(this).siblings().first());
            $(this).css("top", 0);
        });*/
        $("div.slider-imgR").stop().animate({left:"430px"}, "slow", function(){
            $(this).append($(this).children().first());
            $(this).css("left", "330px");
        });
    }

}); /////////END