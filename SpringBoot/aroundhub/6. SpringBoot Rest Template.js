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
              - UriComponentsBuilder.fromUriString(~).path(~).encode().build().expand(~).encode().build().toUri();로 사용 - 복수 개 일시 , 으로 구분
@RequestParam - '경로끝?파라미터명=~'로 보낼 시 사용                               *  
              - Uri 생성 시 UriComponentsBuilder.fromUriString(~).path(~).queryParam(name, value).encode().build().toUri();로 사용 - 경로 가장끝에 표현해야해서
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

----- 바인딩
1. restTemplate으로 수행한 요청을 내가 원하는 객체로 변환할때는 JsonProperty 로 일부만 적어도 됨.
   xml->json으로 변경 후 json을 객체로 변환할땐 복잡하고, 모든 json의 키값을 받아야 하니 사용 X.
2. xml을 객체로 변환할 때 일부값만 바인딩하는 방법은 @XmlElement(name = "~") 이고,
   Json 과 달리 xml을 객체로 바인딩할때는 생성자가 필요함. @No/AllArgumentConstructor를 써줄것.

----- 파싱
- 바인딩 대신 ResponseEntity<String> 으로 받았을 때, Json을 파싱하여 원하는 값을 얻어올 수 있음.
- 사용법 ex) 1. JsonParser parser = new JsonParser();
             2. JsonElement element = parser.parse(result);
             3. String accessToken = element.getAsJsonObject().get("access_token").getAsString();
            - n겹일때
              getAsJsonObject()로 받고 다시 get("~")
              ex) JsonParser parser = new JsonParser();
                  JsonElement element =  parser.parse(result);
			          	JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();;
			            String nickname = properties.getAsJsonObject().get("nickname").getAsString();

----------------------------------------------------------------------------------------------
WebClient 
- 한번 생성하면 immutable - mutate() 로 변경 가능
- Spring 5 이후 제공
- Publish 클래스의 자식클래스로써 stream 형식으로 데이터를 처리
- "자동으로 encoding"

- 의존성 추가
1. pom.xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
2. build.gradle
implementation 'org.springframework.boot:spring-boot-starter-webflux'

- 사용법
0. 간단한 WebClient 객체 생성
   1. WebClient w = new WebClient();
   2. WebClient w = new WebClient(String baseUrl)
1. return 객체로 Flux<T> or Mono<T> 사용
   Flux 는 값이 여러개가 올때, Mono는 단일 리소스일때
2. 기본적인 요청 예시 - naver 단축 url api
   Mono<NaverUriDto> mono = WebClient.builder()
                                     .baseUrl(baseUrl)
                                     .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                                     .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                     .defaultHeader("X-Naver-Client-Id", clientId)
                                     .defaultHeader("X-Naver-Client-Secret", clientSecret)
                                     .build()
                                    .get() //어떤 요청인가 .
                                    .uri(uriBuilder -> uriBuilder
                                                      .path(path)
                                                      .queryParam("url", originalUrl)
                                                      .build()) //.toUri() 는 안써도 됨
                                    .retrieve()
                                    .bodyToMono(NaverUriDto.class);
3. 상대측이 RequestBody 로 받을 때
ex)SomeData data = new SomeData("value1", "value2");
   webClient.post()
         .uri("/endpoint")
         .contentType(MediaType.APPLICATION_JSON)
         .body(BodyInserters.fromValue(data)) // BodyInserters.fromValue(T value) : 해당 객체를 requestBody에 해당 객체를 포함시킴
         .retrieve()                                                            // - json으로 하기 위해선 ObjectMapper 객체를생성하여 String s = ob.writeValueAsString(T) 로
         .bodyToMono(Response.class)                                            // 변환시킨 후 body 사용

4. retrieve() 메서드 : body 를 받아 decoding
- 이후 데이터는 크게 2가지 타입으로 받음
  1. Mono<ResponseEntity<T>> 를 return 하는 toEntity(T.class);
  2. Body를 T에 바인딩하여 Mono<T> 를 return 하는 toMono(T.class); / toFlux(T.class);

5. 요청 method
   1. WebClient.RequestHeadersUriSpec<?> get()
   2. WebClient.RequestBodyUriSpec post()
   3. WebClient.RequestBodyUriSpec put()
   4. WebClient.RequestHeadersUriSpec<?> delete()
   - get과 delete 는 body() 메서드 사용 불가
-------------------------------------------------------------------------------------------------
팁
1. xml -> json 변환 시 xml 의 최상위 태그가 사라짐
