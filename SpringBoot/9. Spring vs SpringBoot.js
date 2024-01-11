Spring이란?
- 정확한 표현 : Spring Framework - 자바에서 가장 많이 사용되는 프레임 워크
- 의존성주입(DI, Dependency Injection), 제어역전(IOC, Invension of Control), 관점지향프로그래밍(AOP)이 가장 중요한 요소
- 위 3가지 요소를 통해 느슨한결합(Loose Coupling) 달성 가능.
                        -> 단위 테스트 수행 용이

관점지향프로그래밍(AOP, Aspect Oriented Programming)
- 스프링 프레임워크에서 제공하는 강력한 기능 중 하나
- OOP를 보완하는 수단, 여러 곳에 쓰이는 공통 기능을 모듈화하여 필요한 곳에 연결함으로써 유지보수 or 재사용이 용이하도록 하는 것
- AOP를 통해 기존 프로젝트에 다양한 기능을 로직 수정 없이 추가 가능 -> 결합도 감소
*알아보면 좋은 것 : 프록시 디자인 패턴, 핵심적인 관점, 부가적인 관점, 흩어진관심사(Crosscutting Concerns)

-----스프링 프레임워크의 대표적 모듈
- Spring JDBC
- Spring MVC
- Spring AOP
- Spring ORM
- Spring Test
- Spring Expression Language (SpEL)

스프링 부트는 자동설정(AutoConfiguration)을 이용
- 어플리케이션 개발에 필요한 모든 디펜던시를 프레임워크에서 관리
- jar 파일이 클래스 path에 있는 경우 스프링부트는 Dispatcher Servlet으로 자동 구성됨
- 스프링 부트는 미리 설정되어 있는 Starter 프로젝트를 제공
- xml 설정 없이 자바 코드를 통해 설정 가능
- SpringBoot-Starter를 제공하여 자동으로 호환되는 버전 관리
- 모니터링 관리를 위한 스프링액츄에이터(Spring Actuator) 제공 - 서비스가 정상적으로 동작하는지 상태 모니터링 기능 제공
                                                           - 스프링 부트에서 제공하는 상태 정보를 보다 쉽게 모니터링 할 수 있게 기능 제공

----- 스프링 부트 프로젝트의 starter 디펜던시
1. spring-boot-starter-web-service : SOAP 웹 서비스
2. spring-boot-starter-web : RESTful 응용 프로그램
3. spring-boot-starter-test : 단위테스트, 통합테스트
4. spring-boot-starter-jdbc : 기본적인 JDBC
5. spring-boot-starter-security : 스프링 시큐리티
6. spring-boot-starter-data-jpa : Spring DATA JPA (Hibernate)
7. spring-boot-starter-cache : 캐시
