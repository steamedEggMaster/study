템플릿에서 get 과
 type: "post" 만 다름

컨트롤러에서는 @PostMapping() 으로 받고
@ResponseBody 를 통해 res에 뷰의 내용이 아닌 데이터를 전달함
                     -> res는 body 값을 가져온다는 것을 알 수 있음

- in controller
     @PostMapping("/ex02")
     public @ResponseBody String ex02(){
         System.out.println("AjaxController.ex02");
         return "index"; }

- in template
    $.ajax({
      type: "post",
      url: "/ex02",
      success: function (res) { // res 에 index가 들어옴
        console.log("성공", res); },
      error: function (){
        console.log("실패"); }
