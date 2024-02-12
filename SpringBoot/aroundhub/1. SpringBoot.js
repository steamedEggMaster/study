-----------------------------------------------------------------------------------------------------------
application.properties : 프로젝트에서 DB의 위치, 아이디 등이 바뀔때마다 바꿔적어주면 자동으로 적용해주는 파일
test : 실무 적용 전 작동 상태를 확인 하는 파일
-----------------------------------------------------------------------------------------------------------
메이븐(Maven)
  - XML 기반의 빌드 스크립트
  - 라이프 사이클 도입 : 미리 정해진 빌드순서(https://m.blog.naver.com/zzang9ha/222055186683)
  - pom.xml(자동 라이브러리 관리)
대표적 태그 설명 
0. parent : 상위 pom파일의 dependency들을 상속받아 사용하기 위한 태그
1. modelVersion : 메이븐 버전 의미
2. groupId : 프로젝트 그룹 id 의미, 대표 사이트 도메인을 역순으로 적어 사용
3. artifactId : groupId외에 다른 프로젝트와는 구분될 수 있는 프로젝트의 Id를 작성
4. version : 프로젝트 버전 의미. 개발 단계에 따라 구분하여 작성
5. name : 프로젝트 이름
6. description : 해당 프로젝트의 간략한 설명
7. properties : pom.xml 파일 내 빈번하게 사용되는 중복 상수 정의 영역
                해당 영억 상수 사용을 위해선 ${태그명} 형태로 사용
8. dependendies : 해당 프로젝트에서 의존성을 가지고 사용하는 라이브러리를 정의하는 영역
                  각 라이브러리마다 <dependency> 태그를 사용하여 구분
9. build : 프로젝트 빌드 관련 정보 설정 영역

Maven Repository : https://mvnrepository.com/

-----그래이들(Gradle)
: Groovy 스크립트를 활용한 빌드 관리 도구
- 안드로이드 프로젝트의 표준 빌드 시스템으로 채택(gradle - kotlin)
- 멀티 프로젝트의 빌드에 최적화하여 설계됨
- build.gradle
대표 용어 설명
1. repositories : 라이브러리가 저장된 위치 등 설정
2. mavenCentral : 기본 Maven Repository
3. dependencies : 라이브러리 사용을 위한 의존성 설정
maven-gradle 비교
1. 속도 : <
2. 대규모 프로젝트에서의 성능 : <
3. gradle은 설치 없이 사용 가능
-----------------------------------------------------------------------------------------------------------
디자인(설계) 패턴 : 특정 문잭에서 공통적으로 발생하는 문제에 대해 쓰이는 재사용 가능한 해결책
현재 상황에 맞춰 최적화된 패턴을 결정하여 사용하는 것이 좋음.
대표적 구체화된 디자인 패턴은 GoF(Gang of Four)가 제시한 23개의 패턴 존재

GoF 디자인 패턴
- 생성패턴 : 객체 생성 관련 패턴(추상 팩토리, 빌더, 팩토리 메소드, 프로토타입, 싱글톤)
- 구조패턴 : 프로그램 내 자료구조 or 인터페이스 구조 등 프로그램 구조 설계에 사용되는 패턴
            (*어댑터, *브리지, 컴포지트, *데코레이터, *파사드, 플라이웨이트, 프록시)
- 행동패턴 : 반복적으로 사용되는 객체들의 커뮤니케이션 패턴화
            (책임 연쇄, 커맨드, 인터프리터, 반복자, 중재자, 메멘토, 옵저버, 상태, 전략, 템플릿 메소드, 방문자)
-----------------------------------------------------------------------------------------------------------
REST(Representational State Tranfer) : 자원의 이름으로 구분하여 해당 자원의 상태를 교환하는 것
 - REST는 서버와 클라이언트의 통신 방식 중 하나
 - HTTP URI(Uniform Resource Identifier)를 통해 자원을 명시하고 HTTP Method(CRUD)를 통해 자원을 교환하는 것
 - REST 아키텍쳐를 구현하는 웹서비스 : "RESTful" 이라 표현
REST 특징
1. Server-Client 구조
2. Stateless - 요청 간에 클라이언트 정보가 서버에 저장되지 않음 
3. Cacheable - HTTP 프로토콜을 사용하기에 HTTP 특징인 캐싱 기능 적용
4. 계층화(Layered System) : 클라이언트는 서버의 구성과 상관없이 REST API 서버로 요청 - 서버는 다중 계충 구성 가능(보안요소, 캐싱 등)
5. Code on Demand(Optional) : 요청을 받으면 서버에서 클라이언트로 코드 or 스크립트(로직)을 전달하여 클라이언트 기능 확장
6. 인터페이스 일관성(Uniform Interface) : HTTP 프로토콜을 따르는 모든 플랫폼에서 사용 가능하게끔 설계

REST API(Application Programming Interface) : REST 아키텍쳐의 조건을 준수하는 API
REST API 특징
1. REST 기반으로 시스템을 분산하여 확장성과 재사용성 높임
2. HTTP 표준을 따르고 있어 여러 프로그래밍 언어로 구현 가능
REST API 설계 규칙
1. 웹 기반 REST API 설계할 경우 URI를 통해 자원을 표현해야함 ex) https://thinkground.studio/member/589
                                                              Resource : member
                                                              Resource ID : 589
2. 자원에 대한 조작은 HTTP Method(CRUD)를 통해 표현해야함 - URI에 행위가 들어가선 안됨.
3. 메세지를 통한 리소스 조작 - HEADER을 통해 content-type을 지정하여 데이터 전달
4. URI에는 소문자 사용
5. Resource 이름이나 URI가 길어질 경우 하이픈(-)을 통해 가독성을 높일 수 있음
6. 언더바 사용 X
7. 파일 확장자를 표현하지 않음.

----- @RestController 와 @Controller 차이점
* @RestController 는 REST 를 수행하는 Controller 임을 명시함. 해당 Annotation 이 붙은 컨트롤러의 메서드들의 return 값은 모두 http response의 body 값에 들어감
  @Controller 는 MVC 를 수행하는 Controller 임을 명시. 해당 Annotation 이 붙은 컨트롤러의 메서드의 return 값은 template의 View 를 찾는 파일명으로 해석됨.

REST 관련 Annotation - 출처 : https://january-diary.tistory.com/entry/Spring-REST-API
1. @RestController : Controller가 REST 방식을 처리하기 위한 것임을 명시 - @Controller + @ResponseBody
2. @ResponseBody : JSP같은 view로 전달되는 것이 아닌 데이터 자체를 전달
3. @PathVariable : URI 경로에 있는 값을 파라미터로 추출
4. @CrossOrigin : Ajax 크로스 도메인 문제 해결. 기본적으로 모든 도메인, 모든 요청 방식에 대해 허용하게 됨.
5. @RequestBody : JSON 데이터를 원하는 타입으로 바인딩해서 수신
-----------------------------------------------------------------------------------------------------------
pom.xml 설정하기 - Project Object Model 정보를 담고 있음
프로젝트 관련 태그
1. <name> : 프로젝트 명
2. <url> : 프로젝트 사이트 URL
3. <decription> : 프로젝트에 대한 간략 설명
4. <organization> : 프로젝트 관리 단체 설명
프로젝트 연관 정보
1. <groupId> : 프로젝트 그룹 ID 설정
2. <artifactId> : 프로젝트 아티펙트 ID 설정
3. <version> : 프로젝트의 버전
             - SNAPSHOT : 현재 테스트 단계
             - Mx(Milestone) : 주요 기능 및 버그 수정 단계
             - RC(Release Candidate) : 전반적 기능 및 버그 모두 수정된 최종 배포 전 단계
             - GA(General Availability) : 최종 배포 단계(대부분 기능과 버그 안정화)
4. <packaging>  : 패키징 타입 설정
    - jar : 자바 프로젝트 압축 파일
    - war : 웹 어플리케이션을 위한 패키징 방식
프로젝트 의존 설정
1. <dependencies> : 라이브러리 의존성 정보를 가지고 있는 dependency 태그를 묶은 태그
2. <dependency> : 각 라이브러리의 정보를 담는 태그
3. <groupId> : 의존성 라이브러리의 group ID
4. <artifactId> : 의존성 라이브러리의 아티팩트 ID
5. <version> : 의존성 라이브러리의 버전
6. <scope> : 해당 라이브러리의 이용 범위를 지정 /compile(default), provided, runtime, test, system 옵션
7. <optional> : 다른 프로젝트에서 이 프로젝트를 의존성 설정을 할 경우 사용할지 결정

1. Spring Boot Starter Parent : 프로젝트에서 사용하는 다양한 라이브러리 간의 버전 충돌 문제 발생 방지
2. Spring Boot Starter Web : Spring MVC를 사용한 REST 서비스를 개발하는데 사용
3. Spring Boot Starter Test : JUnit, Hamcrest, Mockito를 포함한 스프링 어플리케이션의 테스트 기능 제공
-----------------------------------------------------------------------------------------------------------
MVC(Model View Controller) 패턴 : 어플리케이션을 구성할 때 그 구성요소를 세 가지 역할로 구분한 패턴
                                - 디자인 패턴 중 하나 
                                - 분업 및 협업 원활
                                - 독립적 운영 가능 -> 한 영역 업데이트 시 다른 영역에 영향 X
Controller - 모델, 뷰 사이의 브리지 역할
           - 앱의 사용자로부터 입력에 대한 응답으로 모델 및 뷰를 업데이트하는 로직을 포함
           - 사용자의 요청은 모두 컨트롤러를 통해 진행되어야 함
           - 컨트롤러로 들어온 요청은 어떻게 처리할 지 결정하여 모델로 요청을 전달함
Model - 데이터 처리 영역
      - DB와 연동을 위한 DAO, 데이터 구조를 표현하는 DO로 구성
View - 데이터를 보여주는 화면 영역 (UI 요소들) / 별도의 데이터 보관 X
-----------------------------------------------------------------------------------------------------------
--도식화--

-----------           --------------  -------> Handler Mapping
|         |  Request  | Dispatcher |                  ↓
|         |  -------> |  Servlet   |              Controller
|         |           |            |                  ↓
|  Client |           --------------           Message Converter
|         |                                           ↓
|         |  <--------------------------------   HTTP Response
-----------  

@RequestMapping
MVC의 Handler Mapping을 위해 DefaultAnnotationHandlerMapping 사용
DefaultAnnotationHandlerMapping 매핑정보로 @RequestMapping 어노테이션 활용
클래스와 메서드의 RequestMapping을 통해 URL을 매핑하여 경로를 설정하여 해당 메서드에서 처리

현재는 공동 경로 설정시 사용하고 ex) @RequestMapping("/~/~/")
  메서드에 @GetMapping("/~/~/"), @PostMapping("/~/~/"), @DeleteMapping("/~/~/")
          @PutMapping("/~/~/"), @PacthMapping("/~/~/") 등으로 붙여 사용
-----------------------------------------------------------------------------------------------------------
기존에는 서버 개발자가 변경될 때마다 문서를 만들어 프론트엔드 개발자에게 보내줘야 했음.
Swagger 라이브러리 : 서버로 요청되는 API 리스트를 HTML 화면으로 문서화하여 테스트 할 수 있는 라이브러리
                  - 서버가 가동되며 @RestController를 읽어 API를 분석하여 HTML 문서 작성.

Swagger 설정 방법
@Configuration : 어노테이션 기반 환경 구성을 돕는 어노테이션
               - IoC Container에게 해당 클래스를 Bean 구성 Class임을 알려줌
@Bean : 개발자가 직접 제어가 불가능한 외부 라이브러리 등을 Bean으로 만들 경우에 사용.
  *Bean이란? IoC(Inversion of Control) container를 사용하는 스프링에 의하여 관리당하는 자바 객체

http://localhost:8080/swagger-ui.html

SwaggerConfiguration 예제 잘보기
-----------------------------------------------------------------------------------------------------------
Lombok - 반복되는 메서드를 annotation을 사용하여 자동으로 작성해주는 라이브러리
Pom파일에서 라이브러리 의존성 설정을 해줘야함.
  <dependency>
   <groupId>org.projectlombok</groupId>
   <artifactId>lombok</artifactId>
   <optional>true</optional>
  </dependency>
@Data - getter + setter + toString + RequiredArgConstructor + equalsAndHashCode
@Getter@Setter 
@ToString - toString 메소드 자동 생성
          - @ToString(exclude = "필드명")으로 제외 가능
@NoArgConstructor - 파라미터 없는 생성자 생성
@AllArgConstructor - 모든 필드값을 파라미터로 갖는 생성자 생성
@RequiredArgsConstructor - 필드값 중 final이나 @NotNull 값을 갖는 생성자를 생성
@EqualsAndHashCode - equals(내용 동일 여부), hashCode(동일 객체 여부) 메서드 자동 생성
등등 있음.

어노테이션 우클릭 -> Refactor -> delombok을 통해 롬복을 풀기 가능
-----------------------------------------------------------------------------------------------------------
Spring Boot 서비스 구조
(F.E)  (------------------Spring Boot------------------------------)
                                                    (DB와직접통신영역, Repository 인터페이스를 사용하여 DAO 작성)
Client <-DTO-> Controller <-DTO-> Service <-Entity-> DAO(Repository) <-Entity-> DB
                                     ↑                     ↑
                                ServiceImpl             DAOImpl
Service와 DAO는 interface로 만듬. 밑의 두개는 두 interface를 구현
Service겍체에서 회원정보 기반 다른 정보를 추가하는 역할 수행 ex) 회원등급

Entity(Domain) : 실제 DB table과 1:1 매핑됨. / 이 클래스의 필드는 각 테이블 내부의 컬럼(애트리뷰트)을 의미
Repository : Entity에 의해 생성된 DB에 접근하는 메소드를 사용하기 위한 interface 
DAO(Data Access Object) : DB에 접근하는 객체를 의미(Persistence Layer) / DB를 사용하여 데이터 조회 및 조작 기능 전담.
DTO(Data Transfer Object) : VO(Value Object, VO는 읽기 전용)로 불리기도함 / 계층간 데이터 교환을 위한 객체를 의미.
-----------------------------------------------------------------------------------------------------------
ORM(Object Relational Mapping) : 어플리케이션의 객체(Java의 데이터 클래스)와 관계형 DB의 데이터를 자동으로 매핑해주는 것.
                               - 대표적으로 JPA, Hibernate 등
장점 1. "SQL 쿼리가 아닌 직관적인 코드로 조작"
     2. "재사용 및 유지보수 편리" - ORM은 독립적으로 작성됨
     3. "DBMS에 대한 종속성 감소"
단점 1. 복잡성이 커질 경우 ORM만으로 구현하기 어려움 
     2. 잘못 구현 시 속도 저하 발생
     3. 대형 쿼리는 별도로 튜닝이 필요할 수 있음.

JPA(Java Persistance API) : ORM과 관련된 interface 모음(Java 진영에서 표준 ORM) 라이브러리
                          - ORM이 큰 개념이라고 하면, JPA는 더 구체화 시킨 스펙을 포함함.
  Hibernate - ORM Framework 중 하나, JPA 실제 구현체 중 가장 많이 사용.
    Spring Data JPA : Spring Framework에서 JPA를 편리하게 사용할 수 있게 지원하는 라이브러리
                    - Hibernate에서 자주 사용되는 기능을 좀 더 쉽게 사용할 수 있게 구현.
                    - CRUD 처리용 인터페이스 제공
                    - Repository 개발 시 인터페이스만 작성하면 구현 객체를 동적으로 생성하여 주입
                    - 데이터 접근 계층 개발 시 인터페이스만 작성해도 됨.
