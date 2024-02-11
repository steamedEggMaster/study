Rest Template : 스프링에서 제공하는 HTTP 통신 기능을 쉽게 사용할 수 있도록 설계되어 있는 템플릿
              - HTTP 서버와의 통신을 단순화하고, RESTful 원칙을 지킴
              - 동기 방식으로 처리되며, 비동기 방식으로는 "AsyncRestTemplate"이 있음
              - RestTemplate 클래스는 REST 서비스를 호출하도록 설계되어 HTTP 프로토콜의 메서드에 맞게 여러 메서드를 제공.
              - HTTP 요청 후 JSON, XML, String 과 같은 응답을 받을 수 있는 템플릿
              - Header, Content-type 등을 설정하여 외부 API 호출
              - Server to Server 통신에 사용
              - 통신방법 : Blocking 방식 - 요청 후 응답이 올때까지 대기

  
Method                                                          HTTP       설명
1. getForObject(uri, Class<T> responseType)                     GET        GET 형식으로 요청하여 객체로 결과를 반환받음.
2. getForEntity(uri, Class<T> responseType)                     GET        GET 형식으로 요청하여 ResponseEntity로 결과를 반환받음
3. postForObject(uri, Object request, Class<T> responseType)    POST       POST 형식으로 요청하여 객체로 결과를 반환받음
4. postForEntity(uri, Object request, Class<T> responseType)    POST       POST 형식으로 요청하여 ResponseEntity로 결과를 반환받음
                      Object request - RequestBody로 인식됨
5. delete           DELETE     DLETE 형식으로 요청
6. put              PUT        PUT 형식으로 요청
7. patchForObject   PATCH      PATCH 형식으로 요청
8. exchange(requestEntity, Class<T> responseType)               any        HTTP 헤더를 생성하여 추가할 수 있고, "어떤 형식"에서도 사용 가능

- uri에 @PathVariable, @RequestParam에 해당하는 파라미터 지정 가능
- Object에 @Requestbody에 해당하는 객체 넣기 가능

@PathVariable - url에 변수가 있을때 사용                                              *
              - UriComponentsBuilder().fromUriString(~).path(~).encode().build().expand(~).encode().build().toUri();로 사용 - 복수 개 일시 , 으로 구분
@RequestParam - '경로끝?파라미터명=~'로 보낼 시 사용                               *  
              - Uri 생성 시 UriComponentsBuilder().fromUriString(~).path(~).queryParam(name, value).encode().build().toUri();로 사용 - 경로 가장끝에 표현해야해서
@@RequestBody는 restTemplate을 통해 보낼 때 설정                                                     //encode() - UTF-8 로 Encoding

----- Http 헤더에 무언가를 추가해야할 때
1. naver
HttpHeaders headers = new HttpHeaders();
headers.setAccept(Arrays.asList(new MediaType[]{MediaType.APPLICATION_JSON}));
headers.setContentType(MediaType.APPLICATION_JSON);
headers.set("X-Naver-Client-Id", clientId);
headers.set("X-Naver-Client-Secret", clientSecret);

HttpEntity<String> entity = new HttpEntity<>("", headers);

2. 


----------------------------------------------------------------------------------------------
WebClient 

의존성 추가
1. pom.xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
2. build.gradle
implementation 'org.springframework.boot:spring-boot-starter-webflux'

-------------------------------------------------------------------------------------------------
팁
1. xml -> json 변환 시 xml 의 최상위 태그가 사라짐
