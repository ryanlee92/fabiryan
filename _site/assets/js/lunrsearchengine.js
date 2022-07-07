
var documents = [{
    "id": 0,
    "url": "https://fabiryan.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://fabiryan.com/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "https://fabiryan.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://fabiryan.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           iOS16: 잠금화면과 집중모드                              :               2022 WWDC에서 iOS16이 공개됐다. 이번 iOS16의 가장 큰 변화는 단연 잠금화면의 커이터마이제이션 이라고 할 수 있는데, 잠금화면에 위젯을 추가할 수 있고 여러 잠금화면을 미리 만들어두고. . . :                                                                                                                                                                       Ryan                                06 Jul 2022                                                                                                                                                                                                                                                                                                                              왜 블로그를 직접 만들었을까?                              :               블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에. . . :                                                                                                                                                                       Ryan                                04 Jul 2022                                                                                                                            All Stories:                                                                                                     iOS16: 잠금화면과 집중모드              :       2022 WWDC에서 iOS16이 공개됐다. 이번 iOS16의 가장 큰 변화는 단연 잠금화면의 커이터마이제이션 이라고 할 수 있는데, 잠금화면에 위젯을 추가할 수 있고 여러 잠금화면을 미리 만들어두고 변경할 수 있는 등 다양한. . . :                                                                               Ryan                06 Jul 2022                                                                                            Fabi's story              :       이 블로그는 Ryan과 Fabi의 이야기가 모두 담겨져 있습니다. 저 Fabi가 할 이야기는 조금 더 일상적이지 않을까 싶습니다. 제가 어떤 사람인지, 이 블로그에서 무슨 이야기를 할지! 이 글에서 정리해볼게요. 저는 정리가. . . :                                                                               Fabi                05 Jul 2022                                                                                            Flutter: Resize GIF              :       현재 재직중인 회사에서는 프론트엔드 프레임워크로 Flutter를 사용하고 있다. 그런데 오늘 업무를 하다 GIF를 리사이징해야 하는 상황이 있었는데, flutter resize gif 등의 키워드로 구글링을 해도 결과가 나오지 않았다. :                                                                               Ryan                05 Jul 2022                                                                                                                                     왜 블로그를 직접 만들었을까?              :       블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에 있는 블로그 서비스들로는 나의 블로그. . . :                                                                               Ryan                04 Jul 2022                                                                                            블로그를 시작하며. .               :       개인적으로 엄청난 정리벽을 갖고 있다. 흔히 생각하는 것처럼 집을 청소하는 류의 정리벽이 아닌, 인터넷에 남겨진 것들 중 사용하지 않을 것이라고 여겨지는 것에 대한 정리벽. 아내는 디지털 결벽증 이라고 이를 부른다. . . . :                                                                               Ryan                04 Jul 2022                                            "
    }, {
    "id": 4,
    "url": "https://fabiryan.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "https://fabiryan.com/ios16-lock-screen-and-focus-mode/",
    "title": "iOS16: 잠금화면과 집중모드",
    "body": "2022/07/06 - 2022 WWDC에서 iOS16이 공개됐다. 이번 iOS16의 가장 큰 변화는 단연 잠금화면의 커이터마이제이션 이라고 할 수 있는데, 잠금화면에 위젯을 추가할 수 있고 여러 잠금화면을 미리 만들어두고 변경할 수 있는 등 다양한 기능이 추가되었다. 하지만 내가 가장 흥미롭게 보았던 기능은 집중모드마다 잠금화면을 지정해두는 기능이었다. 이 기능들을 이용한 자세한 활용법에 대해 이야기하기 전에 WWDC에서 소개된 내용들을 먼저 한번 짚고 넘어가려 한다. iOS 잠금화면 커스텀:  공식 보도자료 정리하자면 다음과 같다.  다중 레이어 효과를 통해 어떤 사진이든 인물을 추출해 시계 앞에 둘수 있다.  캘린더, 날씨, 배터리 잔량 등 다양한 위젯을 마치 애플워치의 컴플리케이션과 같은 형태로 배치할 수 있다.  여러 잠금화면을 미리 설정해두고 스와이프 하는 형태로 잠금화면을 변경할 수 있다.  잠금화면이 명확히 보이도록 알림은 화면 하단에 위치하는 것으로 변경되었다.  집중모드에 잠금화면을 대응시킬수 있게 되었다. 이번 잠금화면 업데이트의 전체적인 감상은 애플워치의 시계 화면 커스텀 기능을 iOS로 가져온것 같다는 것이었다. 자유도가 엄청 높다고 말할 수는 없지만 개인적으로는 충분한 자유도가 주어졌다고 생각한다. 다만, 아직 지원하는 위젯이 적어서 커스텀하는데 제한이 많다는 점, 다중 레이어 효과를 적용하면 위젯을 배치할 수 없다는 점 등은 아쉽게 느껴진다 iOS 집중모드: 집중모드는 iOS15에 처음 소개된 기능이다. 소개되었을 당시에 포함된 기능들은 다음과 같다.  공식 보도자료  집중하고자 하는 상황에 맞게 앱과 알림을 필터링 해준다.  맞춤형 혹은 제안형 집중모드를 설정할 수 있다.  집중 모드마다 홈화면을 다르게 구성할 수 있다. 집중모드는 출시 당시에 매력을 느꼈던 기능은 아니었다. 심미적으로 크게 변화하는게 없을 뿐더러 당시에는 집중 모드마다 홈화면을 다르게 구성할 수 있다는 사실을 제대로 인지하지 못했다. 활용편: 아이폰을 깔끔하게:  여기서 부터 소개하는 내용은 iOS16에서부터 적용된다. 이전 포스트에서 말했다시피 나는 디지털 결벽증을 갖고 있고 때문에 홈화면을 하나의 화면으로 유지한다. 그러다보니 가끔은 사용하고 싶은 앱이 화면에 떠있지 않아서 Siri Suggestion 위젯을 이용해보기도 하고 뒷면 탭을 스포트라이트로 설정해 검색하여 앱에 접근하는 방식으로 이 문제를 해결해왔다. 그런데 이번 발표를 통해 집중 모드마다 잠금화면과 바탕화면, 홈화면 구성, 그리고 애플워치 페이스까지 설정이 가능하다는 것을 인지하고 아이폰 설정을 모두 바꿨다. 먼저, 전체적인 컨셉은 다음과 같다.  필요한 만큼의 집중모드를 미리 만든다. (나의 경우에는 Work, Fitness, Game, Sleep 그리고 집중모드가 아닌 일반 모드 총 5개의 모드로 이루어져있다. ) 집중모드의 수와 동일한 수의 잠금화면, 홈화면, 애플워치 화면을 만들고 구성한다.  잠금화면, 홈화면, 애플워치 화면에 각각 하나의 집중모드를 할당하고 관련 위젯을 배치한다.  설정 &gt; 집중모드 &gt; 집중모드 선택 후 화면 사용자화 섹션에서 잠금화면, 홈화면, 애플워치 화면을 선택한다.  필요에 따라 알림이나 앱도 집중모드에 따라 설정하고, 집중모드의 종류에 따라 스마트 활성화, 수면 시간 지정등의 옵션을 통해 집중모드가 자동으로 켜지고 꺼질 수 있도록 설정한다. 이렇게 설정된 나의 집중모드는 다음과 같다.  각 모드에 대한 설명: 먼저, 모든 모드에 공통으로 들어가는 하단 네개의 앱은, 항상 사용해야 하는 전화, 메세지, 메모, 사파리로 구성했다.    기본 모드, 즉 집중 모드가 아닌 경우에는 아내의 사진을 다중 레이어 효과를 적용해 시계 앞에 배치하는 잠금화면을 설정했다. (굳이 위 사진에 포함하진 않았다. )홈 화면의 경우 애플 뮤직, 애플 TV, 애플 뉴스를 위젯으로 배치하고, 크게 4개의 섹션에 (커뮤니티, 쇼핑, 영상, 게임) 대해 2개씩의 앱을 배치하는 방식으로 홈 화면을 꾸몄다. 애플 워치 화면의 경우 인물 사진 페이스를 통해 아이폰 잠금화면과 동일한 느낌으로 구성했다.     Work 모드, 즉 업무 모드의 경우 업무 집중에 방해되지 않도록 비교적 수수한 iOS 16 기본 스틸사진을 배경으로 하고 캘린더와 뉴스 위젯을 잠금화면에 추가했다. 홈 화면의 경우 캘린더, 메일, 미리알림 위젯을 추가했고 업무용으로 사용하고 있는 카카오톡, 뉴스, 문서 스캔 앱, 그리고 회사에서 사용하는 협업툴을 홈 화면에 꺼내놓았다. 애플 워치의 경우 가장 기본적이며 WatchOS 9에 추가된 매트로폴리탄을 페이스로 설정했다.     Fitness 모드의 경우 주로 야외운동을 많이 하기 때문에 날씨 잠금화면을 선택했다. 위젯으로는 활동 위젯과 기온, 습도, 자외선 지수 등을 알려주는 날씨 위주의 위젯을 추가해서 잠금화면을 구성했다. 홈화면의 경우 운동할때 음악을 많이 듣기 때문에 애플 뮤직, 그리고 피트니스, 지도 위젯을 추가했고 여기에 건강, 날씨, 네이버 지도, 네이버 페이 등 운동하다가 필요한 앱들로 홈화면을 구성했다. 애플 워치의 경우 모듈 페이스에 활동과 날씨 관련된 위젯들을 추가해 같은 정보를 아이폰과 워치에서 동일하게 전달하도록 설정했다.     Sleep(수면) 모드는 천체 (지구) 화면을 잠금화면으로 설정했고 알람과 배터리 위젯을 추가했다. 홈 화면의 경우 두개의 서로 다른 수면 위젯을 추가했고 워치 역시 같은 천체 (지구) 페이스를 워치페이스로 설정했다.     마지막으로 게임 모드는 발랄한 이모티콘 잠금화면을 선택했고 워치페이스의 경우 WatchOS 9에 새로 소개된 플레이타임 워치페이스를 선택했다. 홈화면 구성의 경우 기본 모드와 같은 구성을 선택했다.  잠금화면 커스텀의 효용: 생각보다 적당한 시기에 적당한 집중 모드로 변환을 잘 해준다. 특히 워치를 차고 있으면 운동을 시작하고 끝낼때 자동으로 모드를 변경해주고, 스마트 활성화 라고 명명되어있는 업무 모드는 사무실 건물에 들어서면 시작되는 것 같이 보인다. 게임 모드는 게임을 실행하거나 컨트롤러를 연결할때, 수면 모드는 설정해둔 수면 시간에 맞춰 자동으로 활성화된다. 이렇게 자동으로 적절한 시기에 집중모드를 변환해주니 스포트라이트를 켜서 앱을 검색하거나 하는 일이 현저히 줄었다. 대부분의 경우 홈 화면에 필요한 앱들이 위치하고 있고, 집중하고 있는 상황과 약간 동떨어져있는 앱을 사용할 때만 검색을 통해 앱을 찾게 되었다. 무엇보다 하루 종일 자동으로 상황에 따라 잠금화면, 홈화면, 워치화면까지 자동으로 변화하니 디자인적으로 질리지 않는 맛이 있다. 마치며: 한번 설정하기가 귀찮긴 하다. 하지만 설정하고 나면 그만한 효용을 분명히 느낄 수 있을 것이라고 생각한다. 잠금화면 커스텀을 계기로 집중모드를 잘 사용하게 된 나로서는 아주 만족하면서 집중모드를 이용하고 있다. (왠지 모르게 뭔가 패턴을 학습하는것 같기도 하고…) 꼭 한 번 정도 시도해서 효용을 느껴볼 만한 기능이라고 생각한다. "
    }, {
    "id": 6,
    "url": "https://fabiryan.com/start-fabi-story/",
    "title": "Fabi's story",
    "body": "2022/07/05 - 이 블로그는 Ryan과 Fabi의 이야기가 모두 담겨져 있습니다. 저 Fabi가 할 이야기는 조금 더 일상적이지 않을까 싶습니다. 제가 어떤 사람인지, 이 블로그에서 무슨 이야기를 할지! 이 글에서 정리해볼게요. 저는 정리가 잘 안되는 사람이라 읽으시는 분들이 다소 어지러울 수 있다는 점. . 양해를 미리 부탁드립니다 ^. ^ Fabi는 어떤 사람?:  저는 박사과정 대학원생입니다. 20대 아기 주부이기도 합니다. 또 이것저것 사부작거리는 걸 좋아해요. 1. 어떤 걸 공부하나요?: 저는 전산학부 학생입니다. 더 세부적으로는 컴퓨터 그래픽스 전공입니다. 요즘은 물리 기반 시뮬레이션 연구를 하고 있어요. 2. 졸업 후에는?: 모르겠습니다. 앞으로 4년은 더 남았으니, 그 때는 또 세상이 많이 바뀌어 있지 않을까요? 그래서 나중의 저에게 맡기기로~ 3. 학교 밖에서는?: 학교에서 퇴근해서는 피아노도 치고 이것저것 사부작 뭘 만들거나 식물을 가꿔요. 저는 학교 밖 커뮤니티가 특별히 없어요. 학교가 카이스트라 제 고향 서울과 멀기도 하고. . 이미 가정을 꾸려서 서울에 잘 안올라가게 되죠. 한두달에 한번 엄마랑 조카 보러 서울에 간답니다. Fabi는 어떤 글을 쓸까요?: 1. 맛집: 저희 남편과 다르게 저는 요잘알 맛잘알이에요. 아 여긴 진짜 맛집이다 싶은 그런 집 여러분께 소개해드릴게요. 2. 대학원생의 일상: 대학원의 흉흉한 소식만 가득한데, 저는 생각보다 행복한 대학원 생활을 하고 있답니다. 카이스트의 대학원생들은 어떻게 사는지 보여드릴게요. 3. 주부의 일상: 박사과정에 들어오고 나서는 개인 시간이 많이 줄었어요. 일하다 보면 밤늦게나 새벽에 들어오는 경우가 많죠. 주부의 일상을 즐기는 시간이 많지 않지만 살림꾼 면모를 가끔 보여드릴게요. 주부의 꿀팁만큼 삶에 도움되는 게 없다는 거~ 4. 그 외 잡다한 생각들: 가치관을 드러내는 글을 쓰는 건 너무 오글거려서 자주 할 것 같진 않지만 가끔 잡다한 생각들을 끄적여 볼게요. 제가 중요하게 생각하는 것들이 몇 가지 있는데 키워드로 말하자면 선한 영향력과 교육인 것 같아요. 이 이야기를 아주 가끔 꺼내놓아 볼게요. 마치며: 그럼 Ryan만큼 자주 글을 쓸 수는 없겠지만! 여러분들께 저와 우리 부부의 가벼운 일상 이야기를 들려드릴게요. 오늘도 행복한 하루 보내세요, 아디오스 "
    }, {
    "id": 7,
    "url": "https://fabiryan.com/flutter-resize-gif/",
    "title": "Flutter: Resize GIF",
    "body": "2022/07/05 - 현재 재직중인 회사에서는 프론트엔드 프레임워크로 Flutter를 사용하고 있다. 그런데 오늘 업무를 하다 GIF를 리사이징해야 하는 상황이 있었는데, flutter resize gif 등의 키워드로 구글링을 해도 결과가 나오지 않았다. 결국 해결책을 발견했는데, 이 포스트가 같은 문제를 겪는 사람들에게 도움이 되길 바란다. 사용되는 라이브러리: 기본적으로 이미지를 고르는 image_picker를 사용하고, gif 리사이징을 위해 FFmpeg 라이브러리를 사용했다. FFmpeg 라이브러리는 크게 flutter_ffmpeg, ffmpeg_kit_flutter, ffmpeg_cli 등이 있는데, discontinued 된 라이브러리이긴 하지만 discontinued 되기 전부터 사용하고 있었던 flutter_ffmpeg를 사용하기로 했다. (기본적으로 ffmpeg를 사용하기 때문에 들어가는 쿼리는 동일하다. 따라서 어떤 라이브라리를 쓰더라도 ffmpeg를 쓰는 한 동일한 쿼리를 넣으면 된다. ) Resizing Method: 먼저 image_picker 라이브러리에서 이미지를 선택한다. 선택한 이미지는 XFile이라는 타입을 반환하게 되는데, 리사이징하는 함수는 이 XFile 과 BuildContext를 받아서 만들게 된다. 함수 코드는 아래와 같다. 1234567891011121314151617181920212223242526272829303132333435363738FutureOr&lt;Uint8List?&gt; resizeAndCropImage({required XFile image, required BuildContext context}) async {  Uint8List? data;  if (!kIsWeb &amp;&amp; image. path. split('. '). last != 'gif') {   data = await Utils. cropImage(image, context, 900, 900);  } else {   if (kIsWeb) {    data = await image. readAsBytes();   } else {    FlutterFFmpeg _flutterFFmpeg = FlutterFFmpeg();    String resizeFilePath = image. path. replaceAll('. gif', '_resize. gif');    try {     await _flutterFFmpeg. execute(       '-i ${image. path} -filter_complex  [0:v] scale=320:-1:flags=lanczos,split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse  $resizeFilePath');     data = await File(resizeFilePath). readAsBytes();    } catch (e) {     data = await image. readAsBytes();    }   }  }  return data;}Future&lt;Uint8List&gt; cropImage(XFile image, BuildContext context, int maxHeight, int maxWidth async {  CroppedFile? croppedFile;  croppedFile = await ImageCropper(). cropImage(    sourcePath: image. path,    compressFormat: ImageCompressFormat. png,    compressQuality: 100,    aspectRatio: const CropAspectRatio(ratioX: 1, ratioY: 1),    uiSettings: buildUiSettings(context),    maxHeight: maxHeight,    maxWidth: maxWidth);  Uint8List cropped = await croppedFile!. readAsBytes();  Uint8List compressedImage = await FlutterImageCompress. compressWithList(cropped, quality: 80);  return compressedImage;}함수에 대한 설명: 먼저 gif인지 아닌지에 대해 판단을 한다. path의 마지막이 gif로 끝나는지 확인하고 gif가 아닌 일반 이미지라면 FlutterImageCompress 라이브러리를 통해 그냥 압축한다. 반면 gif라면 플랫폼이 웹일때는 압축이 불가능하고 (ffmpeg 라이브러리가 support하지 않는다. ) 앱인 경우에는 _flutterFFmpeg. execute 안에 있는 쿼리를 통해 리사이즈 한다. 만약 이를 실패하면 압축을 포기하고 원래 값을 뱉는다. "
    }, {
    "id": 8,
    "url": "https://fabiryan.com/why-choose-jekyll/",
    "title": "왜 블로그를 직접 만들었을까?",
    "body": "2022/07/04 - 블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에 있는 블로그 서비스들로는 나의 블로그 운영 니즈를 채울수 없다는 것이었다. 그런 이유로 귀차니스트인 내가 귀찮음을 감수하고 오픈소스 블로그 제작 툴인 Jekyll을 통해 NAS에 직접 블로그를 구축했다. 블로그를 제작하기 위한 조건: 블로그를 시작하기에 앞서 블로그를 운영하는데 반드시 필요한 조건들을 나열했는데, 다음과 같다.  마크다운으로 작성이 가능할 것     마우스로 스타일링 하기 너무 귀찮다.     디자인이 충분히 이쁠 것     시각적으로 보기 좋아야 글을 쓸 마음도 생긴다.     유지보수와 확장이 쉬울 것     커스텀 하고 싶은 부분을 커스텀 할 수 있고, 넣고 싶은 기능을 자유롭게 넣을 수 있어야 한다.     비용이 들지 않을 것     블로그가 충분히 성장하지 않은 상태에서 비용까지 지불하면서 블로그를 만들어나갈 생각은 없었다.     아이패드로 글을 작성할 수 있을 것     노트북이 아닌 아이패드를 주력 컴퓨팅 머신으로 활용하고 있는 상황이라 (프론트엔드 개발과 같은 특수한 경우 제외) 아이패드 앱으로 유려하게 글을 작성할 수 있어야 한다.     수익화가 가능할 것     서버비에 일조하는 수준의 광고비는 트래픽이 많아졌을때 얻을 수 있어야…    서비스마다의 문제점: 위와 같은 조건을 놓고 봤을때 각각의 블로그 서비스들은 다음과 같은 문제가 있었다. 특히 가장 중요한 조건인 마크다운으로 작성이 가능할 것 에서 몇몇은 걸러졌는데, 그중 살아남은 서비스들은 다음과 같다.  티스토리 Github Pages Medium Velog Notion + Oopy Wordpress또 이 중 그 다음으로 중요한 비용이 들지 않고 수익화가 가능할 것 이라는 조건에 부합하는 서비스는  티스토리 Github Pages 설치형 Wordpress정도가 남았다. Medium의 경우 수익화가 불가능함에도 디자인이 너무 예뻐서 사용할까 고민을 많이 했지만 코드 블럭 같은 것에 대한 지원이 미흡하다는 얘기가 있어 결국 반려했다. 이렇게 남은 서비스들 중 티스토리는 일단 아이패드로 글을 작성할 맛이 나질 않았다. 아이패드 앱이 딱히 불편하다기 보단 디자인이 취향이 아닌 것에 더 가까웠던것 같다. Github Pages의 경우 채택 직전까지 갔으나, Github Pages에서 블로그를 만들때 주로 이용하는 Jekyll의 무료 테마중에 유일하게 마음에 들었던, 위에 언급했던 Medium의 디자인을 레퍼런스 삼아 제작한 Mediumish 테마 적용이 되지 않아 포기했다. 결국 디자인의 문제. 설치형 Wordpress의 경우 특별히 맘에드는 디자인 템플릿이 없었고, 오래 살펴보지 않았지만 마우스 gui로 페이지를 이쁘게 만드는게 쉽진 않았다. 이렇게 적고 보니 그다음으로 중요했던 조건은 디자인이었을지도. . ? 결과적으로: Jekyll을 직접 NAS에서 돌리면서 Mediumish 테마를 적용하는게 유일한 해결책이라는 결론을 냈고 그 결과 이런 블로그가 탄생했다. 아주 마음에 드는 디자인을 갖고 있으면서 마크다운으로 작성이 가능하며 유지보수와 확장에 용이하고 아이패드로 글을 작성하기 좋고 (이 부분은 나중에 Blink Shell에 대한 포스팅에서 다룰 예정이다. 놀랍게도 VSCode로 작성하고 있다. . !) 비용이 들지 않으며 수익화가 가능하다. 주말을 투자해서 리서치한 보람이 있는 결과다. "
    }, {
    "id": 9,
    "url": "https://fabiryan.com/start-blog/",
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