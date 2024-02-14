----- Bean 자동 등록에 사용할 수 있는 Annotation 종류
1. @Repository - Data Access Layer의 DAO or Repository 클래스에 사용
               - DataAccessException 자동변환 같은 AOP의 적용 대상을 선정하기 위해 사용
2. @Service - Service Layer의 클래스에 사용
            - impl 사용시 impl 에 붙이기
3. @Controller - Presentation Layer의 MVC Controller에 사용
4. @Component - 위의 Layer 구분을 적용하기 어려운 일반적인 경우에 설정

Bean 자동인식을 위한 Annotationa 종류가 여러가지인 이유 - 계층별로 Bean의 특성이나 종류를 구분하고 AOP PointCut 표현식 사용시 특정 Annotation이 달린 클래스만 설정 가능
                                                     - 특정 계층의 Bean에 부가기능 부여 가능

----- Spring Bean 의존 관계 설정
1. @Resource - JNDI 리소스와 연관지어 생각 가능하고, 특정 Bean이 JNDI 리소스에 대한 주입을 필요로 하는 경우에 사용할 것을 권장
2. @Autowired - Spring Framework 에서 지원하는 Dependency 정의 용도의 Annotation
              - Spring Framework에 종속적이나 정밀한 DI가 필요한 경우 유용
3. @Injection - 특정 Framework에 종속되지 않는 Application 구성 시 사용 권장

----- @Aspect 관련 Annotation
@Aspect Annotation을 이용해 Aspect 클래스에 직접 Advice 및 Pointcut 등을 설정 가능
1. @Aspect - Aspect 클래스 선언
2. @Before("pointcut")
3. @AfterReturning(pointcut="", returning="")
4. @AfterThrowing(pointcut="", returning="")
5. @After("pointcut")
6. @Around("pointcut")

----- @Controller 관련 Annotation
1. @Controller
2. @RequestMapping
3. @PathVariable
4. @RequestParam
5. @RequestHeader
6. @CookieValue
7. @RequestBody - HTTP 요청의 본문(body)을 메서드의 파라미터로 바인딩할 때 사용
8. @ResponseBody

----- @View 관련 Annotation
1. @ModelAttribute : RequestMapping 어노테이션이 적용되지 않은 별도 method로 모델이 추가될 객체를 생성

----- REST 관련 Annotation
1. @RestController - Controller가 REST방식을 처리하기 위한 것임을 명시한다.
2. @ResponseBody - JSP 같은 뷰로 전달되는 것이 아니라 데이터 자체를 전달
3. @PathVariable - URL 경로에 있는 값을 파라미터로 추출한다.
4. @CrossOrigin - Ajax의 크로스 도메인 문제를 해결한다
5. @RequestBody - JSON 데이터를 원하는 타입으로 바인딩한다. - REST에서 BODY의 json 을 객체로 받기 위한 어노테이션

----- Property 관련 Annotation
1. beans의 @Value("${property명}") : 프로퍼티에 설정된 값을 변수에 넣어줌

------ JPA 관련 Annotation
1. @MappedSuperclass : 상속하는 클래스의 필드들이 상속받은 엔티티클래스의 컬럼으로 매핑됨.
                     - 해당 어노테이션을 정의한 상속하는 클래스는 @Entity없이 필드들을 컬럼으로써 사용 가능 -> @Column, @Id 등 사용가능
2. @EntityListeners(엔티티에 이벤트가 발생했을때 사용할 리스너클래스)
                    - 1. AuditingEntityListener.class : 엔티티의 생성일시, 마지막 수정 일시 자동관리 -> Application 파일에 @EnableJpaAuditing 추가해야함
                                                        @CreatedDate, @LastModifiedDate, @CreaetedBy, @LastModifiedBy 등을 컬럼에 붙여 사용
------ Hibernate 관련 Annotation
1. @Entity
2. @Table(name = "~")
3. @Id
4. @GeneratedValue(strategy = GenerationType.AUTO/.IDENTITY/.SEQUENCE/.TABLE)
                              .AUTO : DB에 맞는 자동 생성 전략 사용
                              .IDENTITY : DB의 자동 증가 컬럼 사용
                              .SEQUENCE : DB의 시퀀스(일련의 유일한 값을 생성하는 DB 객체)를 사용하여 기본 키 생성
                              .TABLE : 특별한 테이블을 사용하여 기본 키 생성
5. @Column(name/nullable/unique/updatable/length/columnDefinition/precision/scale)
  
