**alt + insert 키** : 자동 getter setter등 만들어 줌

Talend API

해당 클래스 위에서 ctrl + 좌클릭

400단위 : 클라에러
500단위 : 서버에러

화면에 toString이 아닌 JSON형태로 반환되는 것은 Controller의 return 타입이 
(DTO 객체 and ResponseEntity) 이기 때문. String이면 toString()으로 작성한 내용이 나옴.
PutController의 DTO객체를 이용한 방법 3가지 자세히 볼것.

----- port번호 변경 방법
1. application.properties 파일에서 server.port=원하는 포트번호
2. Run -> Edit Configurations -> Environment variables에서 server.port=원하는 포트번호

MariaDB에 @Table 어노테이션을 통해 Entity로 테이블 생성 시
Entity의 필드가 대문자를 경계로 "~_~"(모두 소문자)로 컬럼이름이 정해짐.

----- redirect
return "redirect:/경로"
      - redirect: 라는 접두사를 사용
      - 어떤 경로에 대한 요청을 redirect 하여 설정 경로로 보내줌.

1. 웹페이지와 서버간에 데이터가 왔다갔다 할때는 @RestController
   MVC에서 변수를 받아 뷰 템플릿에 보여주기 위해 사용하는 컨트롤러는 @Controller
