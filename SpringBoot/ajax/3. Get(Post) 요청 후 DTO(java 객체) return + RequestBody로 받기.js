-- GET 요청
동일하게 템플릿을 작성하고
컨트롤러에서
@GetMapping("/ex05")
public @ResponseBody AjaxDto ex05(@ModelAttribute AjaxDto ajaxDto){
                                // ModelAttribute 어노테이션을 통해 자동으로 ajax data 프로퍼티의 JS 객체를 Java 객체에 바인딩
    System.out.println("ajaxDto = " + ajaxDto);
    return ajaxDto; }
와 같이 @ResponseBody에 객체를 담아 return 할때,

 *** res 에는 Java 객체 -> JS 객체로 변환되어 들어옴. ***

-- POST 요청
도 동일.

---------------------------------------------------------------------------------------------------------------------
--- 컨트롤러에서 @RequestBody 로 ajax data 프로퍼티 value 를 받기 위해
사용법
$.ajax({
    type: "post",
    url: "/ex05",
    // parameter 전달하기 for @RequestBody
    data: JSON.stringify(params),
    contentType: "application/json", /*밑부분 생략*/ });

1. data: JSON.stringify(JS객체명)
2. contentType: "application/json"

