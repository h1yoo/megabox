<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="js/megabox.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="css/megabox.css">
    </head>
    <body>
        <div id="layout">
            <!--<div id="topbanner">
                <img src="https://mlink-cdn.netinsight.co.kr/2022/08/19/6b6c6e55e255670e682e4776e741e381.jpg" alt="상단배너광고">
            </div>-->
            <header>
                <h1>
                    <a>
                        <img src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new2.png" alt="MEGABOX">
                    </a>
                </h1>
                <div id="headerLR">
                    <!--::before-->
                    <div id="headerL">
                        <a href="#">VIP LOUNGE</a>
                        <a href="#">멤버십</a>
                        <a href="#">고객센터</a>
                    </div>
                    <div id="headerR">
                        <!--로그인 전-->
                        <div class="beforeLog">
                            <a href="#login">로그인</a>
                            <a href="#">회원가입</a>
                            <a href="#">빠른예매</a>
                        </div>
                        <!--로그인 후-->
                        <div class="afterLog" style="display: none;">
                            <!--xxxx틀만 잡음xxxx-->
                        </div>
                    </div>
                    <!--::after-->
                </div>
                <div class="link-area">
                    <!--::before-->
                    <button type="button" class="material-symbols-outlined menu">menu</button>
                    <button type="button" class="material-symbols-outlined search">search</button>
                    <a href="https://www.megabox.co.kr/booking/timetable" target="_blank" class="material-symbols-outlined cal">calendar_month</a>
                    <button type="button" class="material-symbols-outlined mypage">person</button>
                    <!--::after-->                    
                </div>
                <nav id="gnb">
                    <ul class="gnb-depth1">
                        <!--::before-->
                        <li class="depth1-1">
                            <a href="#">영화</a>
                            <div class="gnb-depth2 firstdepth2">
                                <ul>
                                    <li><a href="#">전체영화</a></li>
                                    <li><a href="#">큐레이션</a></li>
                                    <li><a href="#">무비포스트</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="depth1-2">
                            <a href="#">예매</a>
                            <div class="gnb-depth2 seconddepth2">
                                <ul>
                                    <li><a href="#">빠른예매</a></li>
                                    <li><a href="#">상영시간표</a></li>
                                    <li><a href="#">더 부티크 프라이빗 예매</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="depth1-3"><a href="#">극장</a>
                            <div class="gnb-depth2">
                                <ul>
                                    <li><a href="#">전체극장</a></li>
                                    <li><a href="#">특별관</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="depth1-4">
                            <a href="#">이벤트</a>
                            <div class="gnb-depth2">
                                <ul>
                                    <li><a href="#">진행중 이벤트</a></li>
                                    <li><a href="#">지난 이벤트</a></li>
                                    <li><a href="#">당첨자발표</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="depth1-5">
                            <a href="#">스토어</a>
                        </li>
                        <li class="depth1-6">
                            <a href="#">혜택</a>
                            <div class="gnb-depth2">
                                <ul>
                                    <li><a href="#">메가박스 멤버십</a></li>
                                    <li><a href="#">제휴/할인</a></li>
                                </ul>
                            </div>
                        </li>
                    <!--::after-->
                    </ul>
                </nav>
                <div id="sitemap" class="dis-none">
                    <div class="wrap">
                        <p>SITEMAP</p>
                        <div class="list position1">
                            <p class="tit-depth">영화</p>
                            <ul class="list-depth">
                                <li><a href="#">전체영화</a></li>
                                <li><a href="#">큐레이션</a></li>
                                <li><a href="#">영화제</a></li>
                                <li><a href="#">무비포스트</a></li>
                            </ul>
                        </div>
                        <div class="list position2">
                            <p class="tit-depth">예매</p>
                            <ul class="list-depth">
                                <li><a href="#">빠른예매</a></li>
                                <li><a href="#">상영시간표</a></li>
                                <li><a href="#">더 부티크 프라이빗 예매</a></li>
                            </ul>
                        </div>
                        <div class="list position3">
                            <p class="tit-depth">극장</p>
                            <ul class="list-depth">
                                <li><a href="#">전체극장</a></li>
                                <li><a href="#">특별관</a></li>
                            </ul>
                        </div>
                        <div class="list position4">
                            <p class="tit-depth">이벤트</p>
                            <ul class="list-depth">
                                <li><a href="#">진행중 이벤트</a></li>
                                <li><a href="#">지난 이벤트</a></li>
                                <li><a href="#">당첨자발표</a></li>
                                <li><a href="#">무비포스트</a></li>
                            </ul>
                        </div>
                        <div class="list position5">
                            <p class="tit-depth">스토어</p>
                            <ul class="list-depth">
                                <li><a href="#">새로운 상품</a></li>
                                <li><a href="#">메가티켓</a></li>
                                <li><a href="#">팝콘/음료/굿즈</a></li>
                                <li><a href="#">포인트몰</a></li>
                            </ul>
                        </div>
                        <div class="list position6">
                            <p class="tit-depth">나의 메가박스</p>
                            <ul class="list-depth">
                                <li><a href="#">나의 메가박스 홈</a></li>
                                <li><a href="#">예매/구매내역</a></li>
                                <li><a href="#">영화관람권</a></li>
                                <li><a href="#">스토어교환권</a></li>
                                <li><a href="#">할인/제휴쿠폰</a></li>
                                <li><a href="#">멤버십포인트</a></li>
                                <li><a href="#">나의 무비스토리</a></li>
                                <li><a href="#">나의 이벤트 응모내역</a></li>
                                <li><a href="#">나의 문의내용</a></li>
                                <li><a href="#">자주쓰는 할인 카드</a></li>
                                <li><a href="#">회원정보</a></li>
                            </ul>
                        </div>
                        <div class="list position7">
                            <p class="tit-depth">혜택</p>
                            <ul class="list-depth">
                                <li><a href="#">멤버십 안내</a></li>
                                <li><a href="#">VIP LOUNGE</a></li>
                                <li><a href="#">제휴/할인</a></li>
                            </ul>
                        </div>
                        <div class="list position8">
                            <p class="tit-depth">고객센터</p>
                            <ul class="list-depth">
                                <li><a href="#">고객센터 홈</a></li>
                                <li><a href="#">자주묻는질문</a></li>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">1:1문의</a></li>
                                <li><a href="#">단체/대관문의</a></li>
                                <li><a href="#">분실물문의</a></li>
                            </ul>
                        </div>
                        <div class="list position9">
                            <p class="tit-depth">회사소개</p>
                            <ul class="list-depth">
                                <li><a href="#">메가박스소개</a></li>
                                <li><a href="#">사회공헌</a></li>
                                <li><a href="#">홍보자료</a></li>
                                <li><a href="#">제휴/부대사업문의</a></li>
                                <li><a href="#">온라인제보센터</a></li>
                                <li><a href="#">IR자료</a></li>
                                <li><a href="#">인재채용</a></li>
                                <li><a href="#">윤리경영</a></li>
                            </ul>
                        </div>
                        <div class="list position10">
                            <p class="tit-depth">이용정책</p>
                            <ul class="list-depth">
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">위치기반서비스 이용약관</a></li>
                                <li><a href="#">개인정보처리방침</a></li>
                                <li><a href="#">스크린수배정에관한기준</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!--#sitemap 끝-->
                <div id="header_search" class="on dis-none">
                    <div class="wrap">
                        <div class="tab-rank tab-layer">
                            <ul>
                                <li class="on">
                                    <button type="button" class="btn">예매율 순</button>
                                </li>
                                <li >
                                    <button type="button" class="btn">메가박스 관객순</button>
                                </li>
                            </ul>
                        </div>
                        <div class="rank-cont">
                            <p class="img">
                                <img src="images/search1_avatar.jpg" alt="아바타: 물의 길" onerror="noImg(this, 'main');">
                            </p>
                            <div class="list">
                                <ol >
                                    <li>
                                        <em>1</em>
                                        <a href="#" target="_blank">아바타: 물의 길</a>
                                    </li>
                                    <li>
                                        <em>2</em>
                                        <a href="#" target="_blank">더 퍼스트 슬램덩크</a>
                                    </li>
                                    <li>
                                        <em>3</em>
                                        <a href="#" target="_blank">영웅</a>
                                    </li>
                                    <li>
                                        <em>4</em>
                                        <a href="#" target="_blank">장화신은고양이: 끝내주는 모험</a>
                                    </li>
                                    <li>
                                        <em>5</em>
                                        <a href="#" target="_blank">스위치</a>
                                    </li>
                                </ol>
                                <ol class="noshow">
                                    <li>
                                        <em>1</em>
                                        <a href="#" target="_blank">범죄도시 2</a>
                                    </li>
                                    <li>
                                        <em>2</em>
                                        <a href="#" target="_blank">아바타: 물의 길</a>
                                    </li>
                                    <li>
                                        <em>3</em>
                                        <a href="#" target="_blank">탑건: 매버릭</a>
                                    </li>
                                    <li>
                                        <em>4</em>
                                        <a href="#" target="_blank">올빼미</a>
                                    </li>
                                    <li>
                                        <em>5</em>
                                        <a href="#" target="_blank">마녀(魔女) Part2. The Other One</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="header-search-area">
                            <input type="text" id="headerMovieName" placeholder="영화를 검색하세요" class="input-text">
                            <button type="button" id="btnHeaderSearch" class="material-symbols-outlined">search</button>
                        </div>
                    </div>
                </div> <!--검색 아이콘 끝-->
                <div id="header_mypage" class="dis-none">
                    <div class="wrap">
                        <div class="login-before">
                            <p class="txt">
                                로그인 하시면 나의 메가박스를 만날 수 있어요.
                                <br>
                                영화를 사랑하는 당신을 위한 꼭 맞는 혜택까지 확인해 보세요!
                            </p>
                            <div class="mb50">
                                <a href="#" id="moveLogin" title="login">로그인</a>
                            </div>
                            <a href="https://www.megabox.co.kr/join" class="link">혹시 아직 회원이 아니신가요?</a>
                        </div>
                        <div class="login-after">
                        </div>
                    </div>
                </div> <!--헤더 마이페이지 아이콘 끝-->
            </header> <!--헤더 끝-->
            <div class="main-container">
                <div id="contens">
                    <div class="main-page">
                        <div id="main_section01" class="main-movie">
                            <div class="cont-area">
                                <button type="button">박스오피스</button>
                                <a href="#" class="moreMov"> 더 많은 영화보기
                                <i class="material-symbols-outlined">add</i></a>
                                <div class="main-movie-list">
                                    <ol class="list">
                                        <!--::before
                                        3개의 list를 loop한다 ??-->
                                        <li name="boxoRankList" class="first">
                                            <a href="#" class="movie-list-info">
                                                <p class="rank">1</p>
                                                <div class="screen-type2">
                                                    <p><img src="images/db.png" alt="dolby"></p>
                                                    <p><img src="images/mx.png" alt="mx"></p>
                                                </div>
                                                <img src="images/box_avatar.jpg" alt="아바타: 물의 길" class="poster">
                                                <div class="wrap">
                                                    <div class="summary">
                                                        <아바타: 물의 길>은 판도라 행성에서<br>
                                                        '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과<br>
                                                        살아남기 위해 떠나야 하는 긴 여정과 전투,<br>
                                                        그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.<br>
                                                        <br>월드와이드 역대 흥행 순위 1위를 기록한 전편 <아바타>에 이어<br>
                                                        제임스 카메론 감독이 13년만에 선보이는 영화로,<br>
                                                        샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬랫이 출연하고<br>
                                                        존 랜도가 프로듀싱을 맡았다.
                                                    </div>
                                                    <div class="score">
                                                        <div class="preview">
                                                            <p class="tit">관람평</p>
                                                            <p class="number">9.4<span class="ir">점</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn">
                                                <button type="button">
                                                    <i class="material-symbols-outlined">favorite</i>
                                                    <span>6.2k</span>
                                                </button>
                                                <div class="case">
                                                    <a href="#">예매</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li name="boxoRankList">
                                            <a href="#" class="movie-list-info">
                                                <div class="screen-type2">
                                                    <p><img src="images/db.png" alt="dolby"></p>
                                                    <p><img src="images/mx.png" alt="mx"></p>
                                                </div>
                                                <p class="rank">2</p>
                                                <img src="images/box_slamdunk.jpg" alt="더 퍼스트 슬램덩크" class="poster">
                                                <div class="wrap">
                                                    <div class="summary">
                                                        전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을 그린 영화
                                                    </div>
                                                    <div class="score">
                                                        <div class="preview">
                                                            <p class="tit">관람평</p>
                                                            <p class="number">9.4<span class="ir">점</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn">
                                                <button type="button">
                                                    <i class="material-symbols-outlined">favorite</i>
                                                    <span>1.3k</span>
                                                </button>
                                                <div class="case">
                                                    <a href="#">예매</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li name="boxoRankList">
                                            <a href="#" class="movie-list-info">
                                                <div class="screen-type2">
                                                    <p><img src="images/db.png" alt="dolby"></p>
                                                    <p><img src="images/mx.png" alt="mx"></p>
                                                </div>
                                                <p class="rank">3</p>
                                                <img src="images/box_hero.jpg" alt="영웅" class="poster">
                                                <div class="wrap">
                                                    <div class="summary">
                                                        어머니 '조마리아'(나문희)와 가족들을 남겨둔 채<br>
                                                        고향을 떠나온 대한제국 의병대장 '안중근'(정성화).<br>
                                                        <br>
                                                        동지들과 함께 네 번째 손가락을 자르는 단지동맹으로<br>
                                                        조국 독립의 결의를 다진 안중근은<br>
                                                        조선 침략의 원흉인 '이토 히로부미'를<br>
                                                        3년 내에 처단하지 못하면 자결하기로 피로 맹세한다.<br>
                                                        <br>
                                                        그 약속을 지키기 위해 블라디보스토크를 찾은 안중근.<br>
                                                        오랜 동지 '우덕순'(조재윤), 명사수 '조도선'(배정남), 독립군 막내 '유동하'(이현우),
                                                        <br>
                                                        독립군을 보살피는 동지 '마진주'(박진주)와 함께 거사를 준비한다.
                                                        <br>
                                                        한편 자신의 정체를 감춘 채 이토 히로부미에게 접근해
                                                        <br>
                                                        적진 한복판에서 목숨을 걸고 정보를 수집하던 독립군의 정보원 '설희'(김고은)는
                                                        <br>
                                                        이토 히로부미가 곧 러시아와의 회담을 위해
                                                        <br>
                                                        하얼빈을 찾는다는 일급 기밀을 다급히 전한다.
                                                        <br>
                                                        <br>
                                                        드디어 1909년 10월 26일,
                                                        <br>
                                                        이날만을 기다리던 안중근은
                                                        <br>
                                                        하얼빈역에 도착한 이토 히로부미를 향해
                                                        <br>
                                                        주저 없이 방아쇠를 당긴다.
                                                        <br>
                                                        현장에서 체포된 그는 전쟁 포로가 아닌 살인의 죄목으로,
                                                        <br>
                                                        조선이 아닌 일본 법정에 서게 되는데...
                                                        <br>
                                                        <br>
                                                        누가 죄인인가, 누가 영웅인가!
                                                    </div>
                                                    <div class="score">
                                                        <div class="preview">
                                                            <p class="tit">관람평</p>
                                                            <p class="number">9.1<span class="ir">점</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn">
                                                <button type="button">
                                                    <i class="material-symbols-outlined">favorite</i>
                                                    <span>1.5k</span>
                                                </button>
                                                <div class="case">
                                                    <a href="#">예매</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li name="boxoRankList">
                                            <a href="#" class="movie-list-info">
                                                <div class="screen-type2">
                                                    <p><img src="images/db.png" alt="dolby"></p>
                                                    <p><img src="images/mx.png" alt="mx"></p>
                                                </div>
                                                <p class="rank">4</p>
                                                <img src="images/box_cat.jpg" alt="장화신은 고양이: 끝내주는 모험" class="poster">
                                                <div class="wrap">
                                                    <div class="summary">
                                                        아홉 개의 목숨 중 단 하나의 목숨만 남은 장화신은 고양이.
                                                        <br>
                                                        마지막 남은 목숨을 지키기 위해 히어로의 삶 대신 반려묘의 삶을 선택한 그에게 찾아온 마지막 기회,
                                                        바로 소원을 들어주는 소원별이 있는 곳을 알려주는 지도!
                                                        <br>
                                                        <br>
                                                        잃어버린 목숨을 되찾고 다시 히어로가 되기를 꿈꾸는 장화신은 고양이는
                                                        <br>
                                                        뜻밖의 동료가 된 앙숙 파트너 '키티 말랑손', 그저 친구들과 함께 라면 모든 게 행복한 강아지 '페로'와 함께
                                                        <br>
                                                        소원별을 찾기 위해 길을 떠난다.
                                                        <br>
                                                        그리고 소원별을 노리는 또 다른 빌런들과 마주치게 되는데...
                                                        <br>
                                                        <br>
                                                        새해를 여는 끝내주는 모험이 시작된다!
                                                        <br>
                                                        <br>
                                                    </div>
                                                    <div class="score">
                                                        <div class="preview">
                                                            <p class="tit">관람평</p>
                                                            <p class="number">9.2<span class="ir">점</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="btn">
                                                <button type="button">
                                                    <i class="material-symbols-outlined">favorite</i>
                                                    <span>1.4k</span>
                                                </button>
                                                <div class="case">
                                                    <a href="#">예매</a>
                                                </div>
                                            </div>
                                        </li>
                                        <!--박스오피스 끝-->
                                    </ol>
                                </div>
                                <div class="search-link">
                                    <div class="cell">
                                        <div class="search">
                                            <input type="text" placeholder="영화명을 입력해 주세요" title="영화 검색">
                                            <button type="button"><i class="material-symbols-outlined">search</i></button>
                                        </div>
                                    </div>
                                    <div class="cell">
                                        <a href="#">
                                            <i class="material-symbols-outlined">calendar_month</i>
                                            상영시간표
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#">
                                            <i class="material-symbols-outlined">movie</i>
                                            박스오피스
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#">
                                            <i class="material-symbols-outlined">confirmation_number</i>
                                            빠른예매
                                        </a>
                                    </div>
                                </div>
                                <div class="moving-mouse">
                                    <img src="images/mouse.png" alt="mouse">
                                </div>
                            </div>
                        </div>  <!--main_section01 끝-->
                        <div id="main_section02">
                            <!--::before-->
                            <div class="wrap">
                                <div class="tit-util">
                                    <!--::before-->
                                    <h2 class="tit">혜택</h2>
                                    <a href="#" class="material-symbols-outlined">add</a>
                                </div>
                                <div class="slider">
                                    <div class="slider-view">
                                        <div class="slider-cell">
                                            <div class="position">
                                                <div class="sliderL">
                                                    <div class="slider-imgL">
                                                        <a href="#"><img src="images/slide1_avatar.jpg" alt="슬라이더1-1"></a>
                                                        <a href="#"><img src="images/slide1_slamdunk.png" alt="슬라이더1-2"></a>
                                                        <a href="#"><img src="images/slide1_tway.png" alt="슬라이더1-3"></a>
                                                    </div>
                                                </div>
                                                <div class="sliderR">
                                                    <div class="slider-imgR">
                                                        <a href="#"><img src="images/slide2_avatar.jpg" alt="슬라이더2-1"></a>
                                                        <a href="#"><img src="images/slide2_slamdunk.png" alt="슬라이더2-2"></a>
                                                        <a href="#"><img src="images/slide2_tway.png" alt="슬라이더2-3"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> <!--슬라이더1 끝
                                        <div class="slider-cell">
                                            <div class="position">
                                                <div class="slider-imgL">
                                                    <a href="#"><img src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/12/13/50kklo18gmegdQEIoMua9xrY7e5j8izd.jpg" alt="슬라이더2-1"></a>
                                                </div>
                                                <div class="slider-imgR">
                                                    <a href="#"><img src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/12/13/811Fsy7bZgpq2GQBr1czAuzdukbZJogM.jpg" alt="슬라이더2-2"></a>
                                                </div>
                                            </div>
                                        </div>-->  <!--슬라이더2 끝
                                        <div class="slider-cell">
                                            <div class="position">
                                                <div class="slider-imgL">
                                                    <a href="#"><img src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/12/12/QFCt66fsjsuKqeQDMfdWV8Y11wrHr5IY.jpg" alt="슬라이더3-1"></a>
                                                </div>
                                                <div class="slider-imgR">
                                                    <a href="#"><img src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/12/12/8qS2FxuFmKreP6TtlSyM1nBJVzJhQNXX.jpg" alt="슬라이더3-2"></a>
                                                </div>
                                            </div>
                                        </div>-->  <!--슬라이더3 끝-->
                                    </div>
                                    <div class="slider-control">
                                        <div class="page">
                                            <span class="on"></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div class="util">
                                            <button type="button" class="material-symbols-outlined">navigate_before</button>
                                            <button type="button" class="material-symbols-outlined">navigate_next</button>
                                            <button type="button" class="material-symbols-outlined">pause</button>
                                        </div>
                                    </div>
                                </div> <!--슬라이더 끝-->
                                <div class="ad">
                                    <div class="banner">
                                        <!--::before-->
                                        <div class="size">
                                            <a href="#"><img src="https://img.megabox.co.kr/SharedImg/event/2022/12/08/p6fxjrVqPVXJmBoB8G2MAfWBR7HYVzsB.jpg" alt="banner_long"></a>
                                        </div>
                                        <div class="size-small">
                                            <a href="#"><img src="https://img.megabox.co.kr/SharedImg/event/2022/05/31/4pLdCNd6S9Vl2JGPW4Q68KSPJ28axiUc.jpg" alt="banner_small"></a>
                                        </div>
                                        <!--::after-->
                                    </div>
                                    <div class="ad-img">
                                        <a href="#"><img src="https://mlink-cdn.netinsight.co.kr/2022/08/19/1f06aa649b4900db095844b0ed81264d.jpg" alt="배너광고R"></a>
                                    </div>
                                </div>
                            </div> <!--배너 끝-->
                            <div class="menu-link">
                                <div class="menu-link-cell">
                                    <div class="cell vip">
                                        <a href="#" class="material-symbols-outlined">diamond</a>
                                        <a href="#">VIP LOUNGE</a>
                                    </div>
                                    <div class="cell membership">
                                        <a href="#" class="material-symbols-outlined">person</a>
                                        <a href="#">멤버십</a>
                                    </div>
                                    <div class="cell card">
                                        <a href="#" class="material-symbols-outlined">credit_card</a>
                                        <a href="#">할인카드안내</a>
                                    </div>
                                    <div class="cell event">
                                        <a href="#" class="material-symbols-outlined">redeem</a>
                                        <a href="#">이벤트</a>
                                    </div>
                                    <div class="cell store">
                                        <a href="#" class="material-symbols-outlined">fastfood</a>
                                        <a href="#">스토어</a>
                                    </div>
                                </div>
                            </div> <!--배너 밑 메뉴 끝-->
                            <div class="grand-open">
                                
                                <div class="open-cont"> <!--그랜드오픈 중간쯤에 있는 이미지-->
                                    <p class="tit">
                                        <span>MEGABOX</span>
                                        <strong>
                                            GRAND
                                            <br>
                                            OPENING
                                        </strong>
                                    </p>
                                    <div class="open-swiper">
                                        <div class="swiper-wrapper">
                                            <div class="cell swiper-slide">
                                                <a href="#" class="new">
                                                    <span class="label">신규오픈</span>
                                                    <p class="area">더 부티크 목동 현대백화점</p>
                                                    <p class="date">22.12.16</p>
                                                    <img src="" alt="">
                                                </a>
                                            </div>
                                            <div class="cell swiper-slide">
                                                <a href="#" class="new">
                                                    <span class="label">신규오픈</span>
                                                    <p class="area">포항</p>
                                                    <p class="date">22.12.10</p>
                                                    <img src="" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>  <!--그랜드오픈 중간쯤에 있는 이미지 끝-->
                            </div> <!--그랜드오픈 끝-->
                        </div> <!--main_section02 끝-->
                        <div id="main_section04">
                            <h2 class="tit">메가박스 안내</h2>
                            <div class="info-notice">
                                <div class="wrap">
                                    <p class="tit">메가박스</p>
                                    <p class="link">
                                        <a href="https://www.megabox.co.kr/support/notice/detail?artiNo=10733&bbsNo=9" title="공지사항 상세보기">
                                            <strong>[공지]</strong>
                                            [LGU+ 멤버십] 시스템 점검 안내(1/1)
                                        </a>
                                    </p>
                                    <p class="date">2022.12.14</p>
                                    <p class="more">
                                        <a href="https://www.megabox.co.kr/support/notice" title="전체공지 더보기">
                                            더보기
                                            <i class="material-symbols-outlined">chevron_right</i>
                                        </a>
                                    </p>
                                </div>
                            </div> <!--하단 공지사항 끝-->
                            <div class="info-link">
                                <div class="table">
                                    <div class="cell">
                                        <a href="#" title="고객센터 페이지로 이동">
                                            <i class="icon"><img src="images/customer.png"></i>
                                            <span>고객센터</span>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#" title="자주 묻는 질문 페이지로 이동">
                                            <i class="icon"><img src="images/qna.png"></i>
                                            <span>자주 묻는 질문</span>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#" title="1:1 문의 페이지로 이동">
                                            <i class="icon"><img src="images/1qna.png"></i>
                                            <span>1:1 문의</span>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#" title="단체/대관문의 페이지로 이동">
                                            <i class="icon"><img src="images/group.png"></i>
                                            <span>단체/대관문의</span>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#" title="분실물 문의/접수 페이지로 이동">
                                            <i class="icon"><img src="images/lost.png"></i>
                                            <span>분실물 문의/접수</span>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a href="#" title="더 부티크 프라이빗 대관예매 페이지로 이동">
                                            <i class="icon"><img src="images/private.png"></i>
                                            <span>
                                                더 부티크 프라이빗
                                                <br>
                                                대관예매
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> <!--공지사항 밑에 아이콘 끝-->
                        </div> <!--main_section04 끝-->
                        <div class="main-bottom-ad">
                            <a href="#">
                                <img src="https://mlink-cdn.netinsight.co.kr/2022/08/19/90912c63a9e1a5461288bfb9f232109b.jpg" alt="하단 배너 광고">
                            </a>
                        </div> <!--메인 하단 광고부분 끝-->
                    </div> <!--main-page 끝-->
                </div> <!--#contens 끝-->
            </div>  <!--main-container 끝-->
            <footer>
                <div class="footer-top">
                    <div class="inner-wrap">
                        <ul class="fnb">
                            <li><a href="#">회사소개</a></li>
                            <li><a href="#">인재채용</a></li>
                            <li><a href="#">사회공헌</a></li>
                            <li><a href="#">제휴/광고/부대사업문의</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">위치기반서비스 이용약관</a></li>
                            <li class="privacy"><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">윤리경영</a></li>
                        </ul>
                        <a href="https://www.megabox.co.kr/theater/list" target="_blank" title="극장찾기">
                            <i class="material-symbols-outlined">search</i>
                            <span>극장찾기</span>
                        </a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="inner-wrap">
                        <div class="ci"><img src="images/logo.png" alt="로고"></div>
                        <div class="footer-info">
                            <div>
                                <address>서울특별시 마포구 월드컵로 240, 지상2층(성산동, 월드컵주경기장)</address>
                                <p>ARS 1544-0070</p>
                            </div>
                            <p>대표자명 홍정인</p>
                            <p>· 개인정보보호책임자 공성진</p>
                            <p>· 사업자등록번호 211-86-59478</p>
                            <p>· 통신판매업신고번호 제 2020-서울마포-4545 호</p>
                            <p class="copyright">COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
                        </div>
                        <div class="footer-sns">
                            <a href="https://www.youtube.com/onmegabox" target="_blank" title="MEGABOX 유튜브 페이지로 이동">
                                <i class="icon"><img src="images/youtube.png" alt="유튜브"></i>
                            </a>
                            <a href="https://www.instagram.com/megaboxon" target="_blank" title="MEGABOX 인스타그램 페이지로 이동">
                                <i class="icon"><img src="images/insta.png" alt="인스타그램"></i>
                            </a>
                            <a href="https://www.facebook.com/megaboxon" target="_blank" title="MEGABOX 페이스북 페이지로 이동">
                                <i class="icon"><img src="images/facebook.png" alt="페이스북"></i>
                            </a>
                            <a href="https://www.twitter.com/megaboxon" target="_blank" title="MEGABOX 트위터 페이지로 이동">
                                <i class="icon"><img src="images/twitter.png" alt="트위터"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</html>
