Jasypt
: 개발자가 암호화 작동 방식에 대한 깊은 지식 없이도 자신의 프로젝트에 기본 암호화 기능 추가가 가능한 라이브러리
특징
1. 간편한 단방향 및 양방향 암호화 기술 제공
2. 스레드로부터 안전 - 싱글톤환경에서 동기화 걱정없이 사용 가능
3. 원본 문자 집합에 대한 제약없이 사용 가능

스프링부트에서의 사용법
1. 라이브러리 추가
<dependency>
  <groupId>com.github.ulisesbocchio</groupId>
  <artifactId>jasypt-spring-boot-starter</artifactId>
  <version>3.0.4</version>
</dependency>
2. @Configuration 어노테이션이 정의된 클래스 생성
3. 속성값 암호화
4. application.properties에 암호화된 속성값을 넣고 Bean 등록
   암호화된 값은 ENC()를 기입하여 입력
5. ENC() 암호화 인식 동작
