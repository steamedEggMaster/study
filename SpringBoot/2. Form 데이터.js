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

----- 인텔리제이의 콘솔에 출력할때 한글이 깨진다면 파일 인코딩 설정을 UTF-8 로 변경
1. File -> Setting -> Editor > File Encodings 클릭
   -> Global Encoding 및 Project Encoding, Default encoding for properties files
      이 3가지를 전부 UTF-8 로 설정 후
      apply -> ok
2. Help -> Edit Custom VM Options 클릭
   -> idea64.exe.vmoptions 편집기 열림 -> 맨아래에 -Dfile.encoding=UTF-8 추가
   -> 닫고, intellij 종료 후 재실행
