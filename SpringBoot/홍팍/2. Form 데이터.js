폼 데이터(Form Data) : HTML 요소인 <form> 태그에 실려 전송되는 데이터

이 데이터를 컨트롤러가 DTO 에 담아 받음

과정
1. 뷰 페이지 생성 후 <form> 태그의
   - action 속성으로 데이터를 어디로 보낼지 ex) action="/articles/create"
   - method 속성으로 데이터를 어떻게 보낼지 ex) method="post" //or get
   정의
2. Controller 에서 method 속성에 맞는 방식으로 Mapping 후 action의 주소 연결 ex) @PostMapping("/articles/create")
   후 메서드 생성

3. 전송 받을 데이터를 담을 객체 DTO 생성

4. 객체의 필드 명을 뷰 페이지에서 값을 적는 태그의 
   - name 속성에 지정 ex) <input type= "text" class="form-control" name="title">
4-1. Controller의 메서드에 매개변수로 해당 객체 지정


----- 로그
@Slf4j 어노테이션
(Simple Logging Facade for Java)
- 해당 어노테이션 추가 후 log.info() 로 사용 가능 //info 안은 aroundhub 에서 배운 것과 동일
