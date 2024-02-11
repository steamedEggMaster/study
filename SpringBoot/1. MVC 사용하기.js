1. View 페이지 만들기 in templates 파일
   - doc 입력 + tab 클릭
2. Controller 만들기 in controller 패키지
3. Controller 에서 뷰페이지 return 하기
   - @Controller   // not RestController
     public class FirtsController {
       @GetMapping("/hi") // Get 요청임
       public String niceToMeetYou(Model model) {
         model.addAttribute("username", "지호");
         return "greetings"; }}
4. 뷰 페이지에 변수 삽입
   - <h1>{{username}}님, 반갑습니다</h1>
   - {{ 변수명 }} in mustache 방식
5. Controller 에 Model 패키지 추가하기
6. model 에 변수 등록하기
   - model.aadAttribute("변수명", "값");
