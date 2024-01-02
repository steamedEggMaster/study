@RestContorller = @Controller + @ResponseBody - 컨트롤러 클래스 하위 메서드에 @ResponseBody 어노테이션 안붙여도 문자열 및 JSON 전송 가능
                                              - VIEW를 거치지 않고 HTTP ResponseBody에 직접 Return 값 담아 보내게 됨  
@RequestMapping - value(URL 설정), method(RequestMethod.GET/POST/DELETE 등)로 정의하여 API 개발
                - 클래스와 메소드의 RequestMapping을 통해 URL을 매핑하여 경로를 설정하여 해당 메서드에서 처리  
                - 고전 방법이라 사용 X
------------------------------------------------------------------------
Get API : 서버에 있는 리소스를 가져오기 위해 사용하는 API

@GetMapping(value = "/~")
- 파라미터 받는 방식
1. @PathVariable - get형식의 요청에서 매개변수(파라미터)를 전달하기 위해 URL에 값을 담아 요청하는 방법
   방법
    -1. 파라미터의 이름 == value에서 사용된 변수이름
      @GetMapping(value = "/variable1/{variable}")
      접근제어자 반환값 함수명(@PathVariable 타입 variable) { ~ }
    -2. 파라미터의 이름 != value에서 사용된 변수이름
      @GetMapping(value = "/variable2/{variable}")
      접근제어자 반환값 함수명(@PathVariable("variable") 타입 변수명) { ~ }
2. @RequestParam - get형식의 요청에서 쿼리 문자열을 전달하기 위해 사용되는 방법
3. DTO - get형식의 요청에서 쿼리 문자열을 전달하기 위해 사용되는 방법으로 별도의 객체를 생성하여 받는 방식

GetController 예제 잘 보기
------------------------------------------------------------------------
Post API : 리소스를 추가하기 위해 사용되는 API
         - @PostMappingPOST API를 제작하기 위해 사용되는 어노테이션(annotation)
         - @RequestMapping + POST method의 조합
         - @RequestBody를 사용하여 Body에 담겨있는 값을 받아야함. - Talend API에서 JSON으로 작성함.
{ //간략한 JSON 예시
  "name" : "Flature",
  "email" : "cksdud5014@naver.com",
  "organization" : "cksdud-Studio"
}
@PostMapping(value = "~")
- 파라미터 받는 방식
1. @RequestBody Map<~,~>
2. @RequestBody DTO

PostController 예제 잘보기
------------------------------------------------------------------------
Put API - 해당 리소스 존재 시 갱신, 리소스 존재 X 시 새로 생성하는 API (=POST API)

Delete API - 서버를 통해 리소스를 삭제하기 위해 사용되는 API

ResponseEntity 클래스 - Spring Framework에서 제공하는 클래스 중 HttpEntity라는 클래스를 상속받아 사용하는 클래스
                     - 사용자의 HttpRequest에 대한 응답 데이터를 포함
------------------------------------------------------------------------
