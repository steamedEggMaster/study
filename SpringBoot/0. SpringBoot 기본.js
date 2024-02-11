1. 프로젝트명Application.java : 스프링부트 애플리케이션의 시작점.
                          - 이 파일에서 @SpringBootApplication 어노테이션을 통해 애플리케이션을 구성하고 실행
2. application.properties : 애플리케이션의 전반적 설정 저장 파일.
                       - 필요한 경우 application.yml 로 변경 가능
3. static : 정적 리소스(HTML, CSS, JavaScript 등)를 저장하는 디렉토리. 웹 브라우저에 의해 직접 지정하여 요청되는 파일 저장
          - ex) http://localhost:8080/hello.html

4. template : 타임리프(Thymeleaf) 와 같은 서버 사이드 템플릿 엔진이 사용하는 뷰 템플릿 파일들을 저장하는 디렉토리
5. 프로젝트명ApplicationTests.java : 애플리케이션의 테스트 코드 작성 파일.
                                  - 스프링부트 프로젝트는 기본적으로 JUnit 테스트 프레임워크 사용
6. .gitignore : Git 버전 관리 시 무시할 파일과 디렉토리 지정 파일
7. build.gradle (또는 pom.xml) : 프로젝트의 빌드 설정과 의존성 관리를 담당.
8. README.md : 프로젝트에 대한 설명, 사용법 기록 - Markdown 형식

----- 자동구성
- 스프링부트는 개발자가 최소한의 설정만으로도 프로젝트 구성이 가능하도록 자동 구성 기능 제공.
  스프링부트는 @EnableAutoConfiguration 으로 자동 구성 활성화, 보통 @SpringBootApplication 에 포함됨

- 자동구성 : 스프링부트가 애플리케이션의 의존성 및 설정을 분석하여 필요한 Bean 자동 등록해주는 기능
           - ex) SpringBoot Web Starter -> 내장 톰캣 서버 + 기본적 웹 MVC 설정 자동 구성됨

----- 내장서버 
- 기본적으로 내장 톰캣 사용, 필요한 경우 Jetty, Undertow 등으로 변경 가능

----- form data(폼 데이터)
: HTML 요소인 <form> 태그에 실려 전송되는 데이터
- 웹 브라우저에서 서버로 데이터 전송 시 사용
