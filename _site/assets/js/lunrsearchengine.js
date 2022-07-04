
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           왜 블로그를 직접 만들었을까?                              :               블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에. . . :                                                                                                                                                                       Ryan                                04 Jul 2022                                                                                                                            All Stories:                                                                                                     왜 블로그를 직접 만들었을까?              :       블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에 있는 블로그 서비스들로는 나의 블로그. . . :                                                                               Ryan                04 Jul 2022                                                                                            블로그를 시작하며. .               :       개인적으로 엄청난 정리벽을 갖고 있다. 흔히 생각하는 것처럼 집을 청소하는 류의 정리벽이 아닌, 인터넷에 남겨진 것들 중 사용하지 않을 것이라고 여겨지는 것에 대한 정리벽. 아내는 디지털 결벽증 이라고 이를 부른다. . . . :                                                                               Ryan                04 Jul 2022                                            "
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/why-choose-jekyll/",
    "title": "왜 블로그를 직접 만들었을까?",
    "body": "2022/07/04 - 블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에 있는 블로그 서비스들로는 나의 블로그 운영 니즈를 채울수 없다는 것이었다. 그런 이유로 귀차니스트인 내가 귀찮음을 감수하고 오픈소스 블로그 제작 툴인 Jekyll을 통해 NAS에 직접 블로그를 구축했다. 블로그를 제작하기 위한 조건: 블로그를 시작하기에 앞서 블로그를 운영하는데 반드시 필요한 조건들을 나열했는데, 다음과 같다.  마크다운으로 작성이 가능할 것     마우스로 스타일링 하기 너무 귀찮다.     디자인이 충분히 이쁠 것     시각적으로 보기 좋아야 글을 쓸 마음도 생긴다.     유지보수와 확장이 쉬울 것     커스텀 하고 싶은 부분을 커스텀 할 수 있고, 넣고 싶은 기능을 자유롭게 넣을 수 있어야 한다.     비용이 들지 않을 것     블로그가 충분히 성장하지 않은 상태에서 비용까지 지불하면서 블로그를 만들어나갈 생각은 없었다.     아이패드로 글을 작성할 수 있을 것     노트북이 아닌 아이패드를 주력 컴퓨팅 머신으로 활용하고 있는 상황이라 (프론트엔드 개발과 같은 특수한 경우 제외) 아이패드 앱으로 유려하게 글을 작성할 수 있어야 한다.     수익화가 가능할 것     서버비에 일조하는 수준의 광고비는 트래픽이 많아졌을때 얻을 수 있어야…    서비스마다의 문제점: 위와 같은 조건을 놓고 봤을때 각각의 블로그 서비스들은 다음과 같은 문제가 있었다. 특히 가장 중요한 조건인 마크다운으로 작성이 가능할 것 에서 몇몇은 걸러졌는데, 그중 살아남은 서비스들은 다음과 같다.  티스토리 Github Pages Medium Velog Notion + Oopy Wordpress또 이 중 그 다음으로 중요한 비용이 들지 않고 수익화가 가능할 것 이라는 조건에 부합하는 서비스는  티스토리 Github Pages정도가 남았다. Medium의 경우 수익화가 불가능함에도 디자인이 너무 예뻐서 사용할까 고민을 많이 했지만 코드 블럭 같은 것에 대한 지원이 미흡하다는 얘기가 있어 결국 반려했다. 이렇게 남은 서비스들 중 티스토리는 일단 아이패드로 글을 작성할 맛이 나질 않았다. 아이패드 앱이 딱히 불편하다기 보단 디자인이 취향이 아닌 것에 더 가까웠던것 같다. Github Pages의 경우 채택 직전까지 갔으나, Github Pages에서 블로그를 만들때 주로 이용하는 Jekyll의 무료 테마중에 유일하게 마음에 들었던, 위에 언급했던 Medium의 디자인을 레퍼런스 삼아 제작한 Mediumish테마 적용이 되지 않아 포기했다. 결국 디자인의 문제. 결론: Jekyll을 직접 NAS에서 돌리면서 Mediumish테마를 적용하는게 유일한 해결책이라는 결론을 냈고 그 결과 이런 블로그가 탄생했다. 현재 사용하고 있는 Synology NAS에 Jekyll을 구축하는게 마냥 쉬운 일은 아니었기에 구축하는 방법을 담은 포스팅을 추후에 업로드 하려고 한다. 결론적으로는 아주 마음에 드는 디자인의 블로그가 탄생했고 마크다운으로 작성이 가능하며 유지보수와 확장에 용이하고 아이패드로 글을 작성하기 좋고 (이 부분은 나중에 Blink Shell에 대해 다룬 포스팅에서 다룰 예정이다. 놀랍게도 VSCode로 작성하고 있다. . !) 비용이 들지 않으며 수익화가 가능하다. 주말을 투자해서 리서치한 보람이 있는 결과다. "
    }, {
    "id": 6,
    "url": "/start-blog/",
    "title": "블로그를 시작하며..",
    "body": "2022/07/04 - 개인적으로 엄청난 정리벽을 갖고 있다. 흔히 생각하는 것처럼 집을 청소하는 류의 정리벽이 아닌, 인터넷에 남겨진 것들 중 사용하지 않을 것이라고 여겨지는 것에 대한 정리벽. 아내는 디지털 결벽증 이라고 이를 부른다. 얼마나 이 디지털 결벽증이 심하냐면 카톡 친구는 아내와 친한 친구 그룹을 제외한 모두를 숨김처리했고, 더이상 대화하지 않는 채팅방에서는 모두 나가서 카톡 채팅방 탭의 스크롤이 없도록 유지하고 있다. 또 최근엔 쓰지 않는 페북, 인스타를 포함한 모든 소셜 서비스에서 탈퇴했고, 아이폰 홈화면은 한 화면을 넘기지 않는다. 이런 상황에서 생각에 대한 정리 혹은 짧은 메모들도 항상 지워가면서 살아왔는데 문득 아깝다는 생각이 들었다. . ! 그 결과, iOS 기본 메모 앱에 생각을 정리하기 시작했다. (왜 기본앱을 선택했는지에 대해선 다른 포스트에서 다룰 예정이다. ) 그런던 와중에 디지털 결벽증과 귀차니즘이 만들어낸 나만의 시스템이 주변인들에게 소개했을때 좋은 반응을 이끌어내는 것을 보면서 “이건 메모앱에 적을만한 컨텐츠는 아닌데 기록했을때 미래의 나와 내 주변인들에게 충분히 좋은 정보가 될것 같다” 라는 생각이 들어 블로그를 시작하기로 했다. 무엇을 포스팅할 예정인가?:  일단 이 블로그는 나와 내 아내의 포스팅, 두가지로 종류가 나뉜다. 나는 Ryan이라는 필명으로, 아내는 Fabi라는 필명으로 글을 쓸 예정이다. 그 중에서도 이 글에선 내가 어떤 내용을 다룰지에 대해 얘기한다. 1. IT 관련 정보 및 리뷰 글: 결국 살아가면서 내가 가장 관심있는 분야는 IT분야이다. 그중에서도 특별히 내 삶을 자동화 해줄수 있는 제품과 서비스에 열광한다. 그러다보니 선호하는 브랜드나 제품들이 존재하는데, 이 블로그에서는 그중에서도 주로 애플과 관련된 정보 및 리뷰 글을 다룰 예정이다. 사용하고 있는 디바이스와 앱, 서비스의 많은 비중을 애플의 제품이 차지하고 있고, 특히 가족 공용이 아닌 개인이 쓰는 제품은 모두 애플의 제품인 상황에서 다른 브랜드를 다루기는 힘들것 같고… 대신 심도 있게 어떤 기능이 출시되었는지, 내가 어떻게 그 기능을 활용하고 있는지 등에 대한 내용을 주로 쓸 예정이다. 특히 하드웨어보다는 소프트웨어를 우선적으로 다룰 예정이다. 2. NAS 활용 관련 정보 글: 애플의 제품만으로는 삶의 자동화를 만들어내기에는 아직 부족하다. 따라서 나는 개인 서버인 NAS를 운영하고 있는데, 특이하게도 외장하드로서의 기능은 거의 사용하고 있지 않다. 이 블로그도 해당 NAS에서 돌아가고 있고, 삶의 많은 부분들 특히 홈어시스턴트나 홈브릿지, 훕스 등을 이용해서 스마트홈을 구축하는데 나스를 활용하고 있다. 그 외에도 Kodi 라는 앱을 이용하여 애플TV에서 실시간 TV등을 시청하는데, 관련 스크립트도 NAS에서 돌리고 있다. NAS 유저들 중에서 NAS를 하드하게 쓰는 편은 아니지만, 나와 비슷한 라이프스타일을 가진 라이트 사용자들에겐 꽤나 괜찮은 정보를 제공해줄수 있지 않을까? 라고 생각하고 있다. 3. 개발이나 스타트업과 관련된 글: 비중은 정말 작겠지만, 현재 하고 있는 업무인 개발에 관련한 포스팅도 가끔 올라올 예정이다. 그저 다른 개발 블로그처럼 누군가에게 도움이 되길 바라는 마음으로. 또, 지난 7년간 몸 담아왔던 스타트업이라는 업계나 대표로서 느꼈던 바에 대해서도 아주 가끔 올라올지도 모른다. 4. 그 외 정리된 생각: 메모 앱에는 아주 두서 없는 생각들이 적혀지고 있다. 때문에 공개되면 안되는 일기장 같은 느낌이다. 반면 생각들 중에 공개하고 정리해두고 싶은 내용들도 생기기 마련인데, 이런 내용들을 자주는 아니지만 가끔 적어볼 예정이다. 마치며: 2022년은 개인적으로 많은 변화가 생긴 해이다. 7년간 운영했던 회사를 내려놓았고 피폐해졌던 정신을 회복하는 회복의 해기도 하다. 또, 만 30세로 시작한 해이기도 하고 흔적을 남기고자 노력하기 시작한 한 해이다. 이 블로그가 언제까지 쓰여질지, 누구에게 읽힐지는 아무도 모른다. 다만, 블로그에 적힌 내용들이 내가 어떻게 살아갔는지에 대한 중요한 흔적 중 하나가 되길 바란다. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});