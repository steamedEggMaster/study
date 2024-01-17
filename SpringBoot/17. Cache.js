----- 스프링부트에서의 캐시
스프링부트에서 사용 가능한 캐시는 대부분 JSR-107을 따름
* JSR(Java Specification Requests) : 자바 플랫폼에 대한 규격을 제안하거나 기술한 것
                                   - 그중 JSR-107은 JCACHE(Java Temporary Caching API)에 관한 내용임
JSR-107을 따르는 캐시를 사용하면 어떤 구현체 캐시를 사용하던지 상관없이 "추상화" 지원

----- 로컬 캐시와 글로벌 캐시
로컬 캐시 - 로컬(해당서버)에서만 사용하는 캐시
         - 외부 서버와의 트랜잭션 비용 없음 -> 속도 빠름
         - 로컬에서만 사용 -> 분산 서버의 구조에서 캐시 공유가 어려움(안되는 것은 아님)

글로벌 캐시 - 여러 서버에서 접근 가능한 캐시 서버를 구축하여 사용하는 방식
           - 네트워크를 통해 데이터를 가져오는 방식 -> 트랜잭션 비용 듬 -> 로컬 캐시에 비해 속도 ↓
           - 별도의 서버로 운영 -> 서버 간 데이터 공유 용이

----- Redis(Remote Dictionary Server) : '키-값' 구조의 데이터를 저장하고 관리하기 위한
                                        오픈소스 기반의 비관계형 데이터 관리 시스템
특징
1. 메모리를 사용한 data structure
2. 영속성 보장 - Persistence
3. 확장성 - Extensibility
4. Clustering
5. High availability

redis는 크게 2가지 방법으로 사용가능
1. stringboot starter JPA를 이용하여 repository 인터페이스를 만들어 사용하는 방법 - 영상에서 설명하는 방법
2. RedisTemplate를 사용하여 접근하는 방법 - '키-값'이 String 객체로만 이루어진 그러한 값으로 캐싱 할 경우 사용

----- Redis 설정 in 스프링 부트
1. pom.xml 파일에 의존성 추가
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

Java에서 사용하는 Redis Client는 크게 2가지 존재 - Jedis, Lettuce
스프링 부트 2.0 이후론 기본 클라이언트로 "Lettuce" 사용

2. application.properties에 설정 추가
spring.redis.host=
spring.redis.port=

----- Ehcache 설정 in 스프링 부트
1. RedisConfig 클래스 추가
2. redis에서 사용할 객체 설정(optional)
2. RedisRepository 설정
