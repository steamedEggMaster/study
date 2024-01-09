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
  - @SpringBootApplication을 찾아가 하위의 모든 Bean을 스캔하여 로드
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



