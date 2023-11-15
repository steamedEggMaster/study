**alt + insert 키** / CRUD(Create, Review, Update, Delete)

Spring Boot 서비스 구조
(F.E)  (------------------Spring Boot------------------------------)
                                                    (DB와직접통신영역)
Client <-DTO-> Controller <-DTO-> Service <-Entity-> DAO(Repository) <-Entity-> DB
                                     |                     |
                                ServiceImpl             DAOImpl
Service와 DAO는 interface로 만듬. 밑의 두개는 두 interface를 구현.

메이븐(Maven) - pom.xml
대표적 태그 설명
1. modelVersion : 메이븐 버전 의미
2. groupId : 프로젝트 그룹 id 의미, 대표 사이트 도메인을 역순으로 적어 사용.
3. artifactId : groupId외에 다른 프로젝트와는 구분될 수 있는 프로젝트의 Id를 작성
4. version : 프로젝트 버전 의미. 개발 단계에 따라 구분하여 작성.
5. name : 프로젝트 이름.
6. description : 해당 프로젝트의 간략한 설명
7. properties : pom.xml 파일 내 빈번하게 사용되는 중복 상수 정의 영역
                해당 영억 상수 사용을 위해선 ${태그명} 형태로 사용
8. dependendies : 해당 프로젝트에서 의존성을 가지고 사용하는 라이브러리를 정의하는 영역
                  각 라이브러리마다 <dependency> 태그를 사용하여 구분.
9. build : 프로젝트 빌드 관련 정보 설정 영역

Maven Repository : https://mvnrepository.com/

안드로이드 개발 시 gradle - kotlin
------------------------------------------------------------------------
디자인(설계) 패턴 : 특정 문잭에서 공통적으로 발생하는 문제에 대해 쓰이는 재사용 가능한 해결책
현재 상황에 맞춰 최적화된 패턴을 결정하여 사용하는 것이 좋음.
대표적 구체화된 디자인 패턴 : GoF(Gang of Four)

GoF 디자인 패턴
- 생성패턴 : 객체 생성 관련 패턴(추상 팩토리, 빌더, 팩토리 메소드, 프로토타입, 싱글톤)
- 구조패턴 : 프로그램 내 자료구조 or 인터페이스 구조 등 프로그램 구조 설계에 사용되는 패턴
            (*어댑터, *브리지, 컴포지트, *데코레이터, *파사드, 플라이웨이트, 프록시)
- 행동패턴 : 반복적으로 사용되는 객체들의 커뮤니케이션 패턴화
------------------------------------------------------------------------
REST API 설계 규칙
1. 웹 기반 REST API 설계할 경우 URl을 통해 자원을 표현해야함.
2. 자원에 대한 조작은 HTTP Method(CRUD)를 통해 표현해야함
3. 메세지를 통한 리소스 조작
4. URI에는 소문자 사용.
5. Resource 이름이나 URI가 길어질 경우 하이픈(-)을 통해 가독성을 높일 수 있음.
6. 언더바 사용 X
7. 파일 확장자를 표현하지 않음.
------------------------------------------------------------------------
pom.xml 설정하기
프로젝트 관련 태그
1. <name> : 프로젝트 명
2. <url> : 프로젝트 사이트 url
3. <decription> : 프로젝트에 대한 간략 설명
4. <organization> : 프로젝트 관리 단체 설명
프로젝트 연관 정보
1. <groupId> : 프로젝트 그룹 ID 설정
2. <artifactId> : 프로젝트 아티펙트 ID 설정
3. <version> : 프로젝트의 버전
4. <packaging>  : 패키징 타입 설정
    - jar : 자바 프로젝트 압축 파일
    - war : 웹 어플리케이션을 위한 패키징 방식
프로젝트 의존 설정
1. <dependencies> : 라이브러리 의존성 정보를 가지고 있는 dependency 태그를 묶은 태그
2. <dependency> : 각 라이브러리의 정보를 담는 태그
3. <groupId> : 의존성 라이브러리의 group ID
4. <artifactId> : 의존성  라이브러리의 아티팩트 ID
5. <version> : 의존성 라이브러리의 버전
6. <scope> : 해당 라이브러리의 이용 범위를 지정 /compile(default), provided, runtime, test, system 옵션
7. <optional> : 다른 프로젝트에서 이 프로젝트를 의존성 설정을 할 경우 사용할지 결정
------------------------------------------------------------------------
MVC(Model View Controller) 패턴 - 디자인 패턴 중 하나 / 분업 및 협업 원활 / 독립적 운영 가능
Controller - 모델, 뷰 사이의 브리지 역할
Model - 데이터 처리 영역
View - 데이터를 보여주는 화면 영역
------------------------------------------------------------------------
@RequestMapping = value, method로 정의하여 API 개발 / 고전 방법이라 사용 X
@GetMapping(value = "/~")
@PathVariable - get형식의 요청에서 매개변수(파라미터)를 전달하기 위해 URL에 값을 담아 요청하는 방법
@RequestParam - get형식의 요청에서 쿼리 문자열을 전달하기 위해 사용되는 방법
DTO - get형식의 요청에서 쿼리 문자열을 전달하기 위해 사용되는 방법
------------------------------------------------------------------------
POST API - 리소스를 추가하기 위해 사용되는 API
@PostMapping : POST API를 제작하기 위해 사용되는 어노테이션(annotation) / @RequestMapping + POST method의 조합
@RequestBody를 사용하여 Body에 담겨있는 값을 받아야함. - Talend API에서 JSON으로 작성함.
{ //간략한 JSON 예시
  "name" : "Flature",
  "email" : "cksdud5014@naver.com",
  "organization" : "cksdud-Studio"
}
------------------------------------------------------------------------
기존에는 서버 개발자가 변경될 때마다 문서를 만들어 프론트엔드 개발자에게 보내줘야 했음.
Swagger 라이브러리 - 서버로 요청되는 API 리스트를 HTML 화면으로 문서화하여 테스트 할 수 있는 라이브러리
서버가 가동되며 @RestController를 읽어 API를 분석하여 HTML 문서 작성.

Swagger 설정 방법
@Configuration : 어노테이션 기반 환경 구성을 돕는 어노테이션
@Bean : 개발자가 직접 제어가 불가능한 외부 라이브러리 등을 Bean으로 만들 경우에 사용.
------------------------------------------------------------------------
Put API - 해당 리소스 존재 시 갱신, 리소스 존재 X 시 새로 생성하는 API (=POST API)
Delete API - 서버를 통해 리소스를 삭제하기 위해 사용되는 API
ResponseEntity 클래스 - Spring Framework에서 제공하는 클래스 중 HttpEntity라는 클래스를 상속받아 사용하는 클래스
------------------------------------------------------------------------
Lombok - 반복되는 메서드를 annotation을 사용하여 자동으로 작성해주는 라이브러리
Pom파일에서 라이브러리 의존성 설정을 해줘야함.
@Getter@Setter 
@ToString - toString 메소드 자동 생성
@NoArgConstructor - 파라미터 없는 생성자 생성
@AllArgConstructor - 모든 필드값을 파라미터로 갖는 생성자 생성
@RequiredArgsConstructor - 필드값 중 final이나 @NotNull 값을 갖는 생성자를 생성
등등 있음.
------------------------------------------------------------------------
Entity(Domain) : 실제 DB table과 1:1 매핑됨. / 이 클래스의 필드는 각 테이블 내부의 컬럼(애트리뷰트)을 의미
Repository : Entity에 의해 생성된 DB에 접근하는 메소드를 사용하기 위한 interface 
DAO(Data Access Object) : DB에 접근하는 객체를 의미(Persistence Layer) / DB를 사용하여 데이터 조회 및 조작 기능 전담.
DTO(Data Transfer Object) : VO(Value Object, VO일땐 읽기 전용)로 불리기도함 / 계층간 데이터 교환을 위한 객체를 의미.
