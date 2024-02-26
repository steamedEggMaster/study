동일하게 템플릿을 작성하고
컨트롤러에서

@GetMapping("/ex05")
public @ResponseBody AjaxDto ex05(@ModelAttribute AjaxDto ajaxDto){
    System.out.println("ajaxDto = " + ajaxDto);
    return ajaxDto; }
와 같이 @ResponseBody에 객체를 담아 return 할때,
 *** res 에는 Java 객체 -> JS 객체로 변환되어 들어옴. ***
