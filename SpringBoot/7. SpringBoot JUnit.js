Test 파일의 Test클래스와 경로가 같아야함

TDD(Test-Driven Development, 테스트 주도 개발)
: 테스트를 먼저 설계 및 구축 후 테스트를 통과할 수 있는 코드를 짜는 것 <-> 일반적인 방식은 코드 작성 후 테스트 진행

"애자일 개발 방식" 중 하나
- 코드 설계 시 원하는 단계적 목표에 대해 설정하여 진행하고자 하는 것에 대한 결정 방향의 갭을 줄이고자 함.
- 최초 목표에 맞춘 테스트를 구축하여 그에 맞게 코드를 설계하기 때문에 보다 적은 의견 충돌을 기대 가능.
  (방향 일치로 인한 피드백과 진행 방향의 충돌 방지)

테스트 코드의 작성 목적
1. 코드의 안정성 높힐 수 있음
2. 기능을 추가하거나 변경하는 과정에서 발생하는 Side-Effect를 줄일 수 있음.
3. 해당 코드가 작성된 목적을 명확하게 표현 가능. 
      - 코드에 불필요한 내용이 들어가는 것을 비교적 줄이기 가능

-----JUnit
: Java 진영의 대표적 "Test Framework"
- 단위 테스트(Unit Test)를 위한 도구 제공
            : 코드의 특정 모듈이 의도된 대로 동작하는지 테스트하는 절차
            : 모든 함수와 메서드에 대해 각각의 테스트 케이스(Test Case)를 작성하는 것
- 어노테이션 기반 테스트 지원
- 단정문(Assert)으로 테스트 케이스의 기대값에 대해 수행 결과 확인 가능
- JUnit 5 version 사용 - Jupiter, Platform, Vintage 모듈로 구성됨

JUnit Jupiter
- TestEngine API 구현체, JUnit 5를 구현하고 있음.
- 테스트의 실제 구현체는 별도 모듈 역할 수행, 그 모듈 중 하나가 Jupiter-Engine.
- Jupiter-Engine 은 Jupiter-API를 사용하여 작성한 테스트 코드를 발견하고 실행하는 역할 수행.
- 개발자가 테스트 코드 작성 시 사용.

JUnit Platform
- Test를 실행하기 위한 뼈대
- Test를 발견하고 테스트 계획을 생성하는 TestEngine interface를 가지고 있음.
- TestEngine을 통해 Test를 발견하고, 수행 및 결과 보고
- 각종 IDE 연동을 보조하는 역할 수행 (콘솔 출력 등)
Platform = TestEngine API + Console Launcher + JUnit 4 Based Runner 등

JUnit Vintage
- TestEngine API 구현체로 JUnit 3,4를 구현하고 있음
- 기존 JUnit 3,4 version으로 작성된 테스트 코드 실행 시 사용
- Vintage-Engine 모듈을 포함하고 있음

----- JUnit LifeCycle Annotation
1. @Test       : 테스트 메서드 표현 어노테이션
2. @BeforEach  : 각 테스트 메서드가 시작되기 전에 실행되어야 하는 메서드 표현
3. @AfterEach  : 각 테스트 메서드가 시작된 후 실행되어야 하는 메서드 표현
4. BeforeAll   : 테스트 시작 전에 실행되어야 하는 메서드를 표현(static 처리 필요)
5. AtferAll    : 테스트 종료 후에 실행되어야 하는 메서드를 표현(static 처리 필요)

----- JUnit Main Annotation
1. @SpringBootTest
  - 통합 테스트 용도로 사용
  - @SpringBootApplication을 찾아가 하위의 "모든 Bean을 스캔하여 로드"
  - 그 후 Test용 Application Context를 만들어 Bean을 추가하고, MockBean을 찾아 교체
2. @ExtendWith
  - JUnit4에서 @RunWith로 사용되던 어노테이션이 @ExtendWith로 변경됨
  - @ExtendWith는 "메인으로 실행될 Class를 지정" 가능
  - @SpringBootTest는 "기본적으로 @ExtendWith가 포함"되어 있음
3. @WebMvcTest(클래스명.class)
  - ()에 작성된 클래스만 실제로 로드하여 테스트 진행
  - 매개변수를 지정해주지 않으면 @Controller, @RestController, @RestControllerAdvice 등 "컨트롤러와 연관된 Bean이 모두 로드"됨
  - 스프링의 모든 Bean을 로드하는 @SpringBootTest 대신 "컨트롤러 관련 코드만 테스트할 경우" 사용
4. @Autowired about Mockbean
  - Controller의 API를 테스트하는 용도인 MockMvc 객체를 주입 받음
  - perform() 메서드를 활용하여 컨트롤러의 동작 확인 가능
     -- andExpect(), andDo(), andReturn() 등의 메서드 같이 활용
5. @MockBean
  - 테스트할 클래스에서 주입 받고 있는 객체에 대해 "가짜 객체를 생성"해주는 어노테이션
  - 해당 객체는 실제 행위를 하지 않음
  - given() 메서드를 활용하여 가짜 객체의 동작에 대해 정의하여 사용 가능
6. @AutoConfigureMockMvc
  - spring.test.mockmvc의 설정을 로드하면서 "MockMvc의 의존성"을 자동으로 주입
  - MockMvc 클래스는 "REST API 테스트를 할 수 있는 클래스"
7. @Import
  - 필요한 Class들을 Configuration으로 만들어 사용 가능
  - Configuration Component 클래스도 의존성 설정 가능
  - Import된 클래스는 주입으로 사용 가능

----- 통합 테스트
: 여러 기능을 조합하여 전체 비지니스 조직이 제대로 동작하는 지 확인하는 것
- @SpringBootTest를 사용하여 진행
     -> 대규모 프로젝트에서 사용 시, 테스트 실행시마다 모든 Bean을 스캔하고 로드하는 작업이 반복되어 매번 무거운 작업 수행해야함

----- 단위 테스트(Unit Test)
: 프로젝트에 필요한 모든 기능에 대한 테스트를 각각 진행하는 것 의미
- 스트링 부트에서는 일반적으로 'org.springframework.boot:spring-boot-starter-test' 디펜던시만으로 의존성 모두 가질 수 있음

F.I.R.S.T 원칙
- F(Fast) : 테스트 코드의 실행은 빠르게 진행되어야 함
- I(Independent) : 독립적인 테스트가 가능해야 함
- R(Repeatable) : 테스트는 매번 같은 결과를 만들어야 함
- S(Self-Validating) : 테스트는 그 자체로 실행하여 결과를 확인할 수 있어야함
- T(Timely) : 단위 테스트는 비지니스 코드가 완성되기 전에 구성하고 테스트가 가능해야함 - 코드 완성 전부터 테스트가 따라와야 한다는 TDD의 원칙을 담고 잇음
----------------------------------------------------------------------------------------------------------
코드 커버리지
: S/W의 테스트 수준이 충분한지 표현 가능한 지표 중 하나
- 테스트를 진행했을 때 해당 코드가 실행되었는지 표현하는 방법
- 가장 보편적으로 사용되는 도구 : Jacoco

----- Jacoco
: Java 코드의 커버리지를 체크하는 라이브러리
- 작성된 코드의 테스트 커버리지(Test Coverage) 측정 도구
- Runtime으로 Test Case를 실행하여, Coverage를 체크하는 방식으로 사용됨
- 테스트 코드를 통해 테스트를 실행하고, 그 결과를 html, xml, csv등의 형식으로 Report 제공

----- Jacoco pom.xml 파일 설정
<execution> 내부에 사용되는 값
- prepare-agent : 테스트 중인 어플리케이션에서 인수를 전달하는 Jacoco Runtime Agent에 대한 property를 준비
- merge : 여러 실행 데이터 파일들을 하나로 통합하는 명령어
- report : 하나의 프로젝트 테스트에 대한 Code Coverage 리포트를 생성하는 명령어
- check : code coverage metric이 충돌하는 지 확인하는 명령어

----- Jacoco Rule
1. Element type - 코드 커버리지 체크 기준
   -1. BUNDLE(default) : 패키지 번들
   -2. PACKAGE : 패키지
   -3. CLASS : 클래스
   -4. SOURCEFILE : 소스 파일
   -5. METHOD : 메서드

2. Counter - 코드 커버리지를 측정할 때 사용하는 지표
   -1. LINE : 빈 줄을 제외한 실제 코드의 라인 수
   -2. BRANCH : 조건문 등의 분기 수
   -3. CLASS : 클래스 수
   -4. METHOD : 메서드 수
   -5. INSTRUCTION : java 바이트 코드 명령 수
   -6. COMPLEXITY : 복잡도

3. Value - 커버리지 정도를 나타내는 지표
   -1. TOTALCOUNT : 전체 개수
   -2. MISSEDCOUNT : 커버되지 않은 개수
   -3. COVEREDCOUNT : 커버된 개수
   -4. MISSEDRATIO : 커버되지 않은 비율(0~1)
   -5. COVEREDRATIO(default) : 커버된 비율(0~1)

----- Jacoco 와 Maven LifeCycle
메이븐의 라이프 사이클 : Compile -> Test -> Package -> Install -> deploy
Jacoco 플러그인은 Maven 라이프 사이클에 의해 동작, "Test phase" 이후에 "측정" 가능 - "Package phase" 이후로 "동작" 가능
