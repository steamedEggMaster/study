AJAX(Asynchronous Javascript And Xml)
: Javascript 를 이용해 서버와 브라우져가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능
- 클라이언트와 서버 간 Xml 데이터를 주고 받는 기술
- SMLHttpRequest 객체를 통해 서버에 request
- JSON or XML 형태로 필요한 데이터만 받아 갱신 -> 자원 및 시간 단축
- 클라이언트에서 사용
- 활용부분 
  1. email or username 중복체크
  2. 좋아요 or 싫어요
  3. 찜
  4. 댓글 작성

ajax 를 사용하기 위해선
1. jQuery 가 필요하다
   - jQuery CDN 방식 사용
2. body 태그 안에서 원하는 태그에 함수 설정해주기
   ex) <body> <button onclick="ex01Fn()">ex01 함수 호출</button> </body>
3. *** <script></script> 태그 안에 함수를 작성하기 ***
   - 작성방법 예시
    <script>
      const ex01Fn = () => {
        $.ajax({  //ajax 사용방법 : $.ajax({ type: , url: , success: function , error: function }
        // 요청방식 : get
        // 요청주소 : /ex01
        type: "get",
        url: "/ex01",
        //  요청이 성공했을 때 실행되는 부분
        success: function (res) {
          console.log("성공", res); },
        // 요청 실패 시 실행되는 부분
        error: function (){
          console.log("실패"); } }) }
     </script>

4. 2, 3번 실행 시 @GetMapping("/ex01")
                 public String ex01(){
                 System.out.println("AjaxController.ex01");
                 return "index"; } //index.html 파일이 있음
   가 실행되게 설정

5. 중요!! 
   success: function (res) 에서
   매개변수 res가 받아오는 값은 페이지 변환 X
   index.html 파일의 모든 String을 받아옴.

   -> ajax의 특징 : 함수의 실행으로 페이지 변환이 아닌 실행 값을 가져옴.

