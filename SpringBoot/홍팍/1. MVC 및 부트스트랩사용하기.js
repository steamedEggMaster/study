----- MVC 간단한 사용 순서 in mustache
1. View 페이지 만들기 in templates 파일
   - 템플릿명.mustache
   - doc 입력 + tab 클릭
2. Controller 만들기 in controller 패키지
3. Controller 에서 뷰페이지 return 하기
   - @Controller   // not RestController
     public class FirtsController {
       @GetMapping("/hi") // Get 요청임
       public String niceToMeetYou(Model model) { // String return
         model.addAttribute("username", "지호");
         - model.addAttribute(String name, Object value)
         return "greetings"; // 확장자 작성 필요 X, 서버가 알아서 templates 의 해당 뷰 템플릿 페이지를 찾아 웹 브라우져로 전송
     }}
4. 뷰 페이지에 변수 삽입
   - <h1>{{username}}님, 반갑습니다</h1>
   - {{ 변수명 }} is mustache 방식
5. Controller 의 매개변수에 Model 패키지 추가하기
   Model model
6. model 에 변수 등록하기
   - model.aadAttribute("변수명", 값);

----- 뷰 템플릿 페이지에 레이아웃 적용 - 부트스트랩 사용하기
1. 헤더-푸터 레이아웃(header-footer layout)
   - 헤더 영역 : 사이트 안내 내비게이션
   - 푸터 영역 : 사이트 정보
   - 두 영역 사이 : 콘텐츠

2. 템플릿화 하기
각 영역을 따로 템플릿에 파일을 만들어 저장하고, ex) header.mustache
사용 시 {{>경로/파일명}} 로 사용. ex) {{>layouts/header}}
