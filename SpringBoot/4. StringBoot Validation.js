유효성 검사 / 데이터 검증(Validation) : 서비스의 비지니스 로직이 올바르게 동작하기 위해 사용되는 데이터에 대한 사전 검증 작업
Validation : 들어오는 데이터에 대해 의도한 형식의 값이 제대로 들어오는지 체크하는 과정을 뜻함.

일반적인 어플리케이션에서 사용되던 Validation 방식은 몇가지 문제가 존재.
1. 어플리케이션 전체적으로 분산되어 존재.
2. 코드의 중복이 심함 -> 코드가 복잡해짐
3. 비지니스 로직에 섞여 있어 검사 로직 추적이 어려움.
->
JAVA 에서 Bean Validation이라는 데이터 유효성 검사 프레임워크를 제공
          -> 어노테이션을 통해 다양한 데이터를 검증할 수 있게 기능 제공
Hibernate Validation은 Bean Validation 명세에 대한 구현체
    -SpringBoot의 유효성 검사 표준

2.3버전 이상부턴 starter-validation dependency를 추가 해야함.

-----Validation 관련 어노테이션
1. @Size : 문자의 길이 조건 - @Size(min = 수, max = 수)
2. @NotNull : null값 불가
3. @NotEmpty : @NotNull  + ""값 불가
4. @NotBlank : @BotEmpty + " "값 불가

5. @Past : 과거 날짜
6. @PastOrPresent : @Past + 오늘 날짜
7. @Future : 미래 날짜
8. @FutureOrPresent : @Future + 오늘 날짜

9. @Pattern : 정규식을 통한 조건

10. @Max : 최대값 조건 설정
11. @Min : 최소값 조건 설정
12. @AssertTrue / AssertFalse : 참/거짓 조건 설정

13. @Valid : 해당 객체의 유효성 검사

-----
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

*****이 Validation이 동작하기 위해선 해당 메소드의 파라미터 맨 앞에 @Valid 를 써주어야함.
