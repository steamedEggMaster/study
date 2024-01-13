Rest Template : 스프링에서 제공하는 HTTP 통신 기능을 쉽게 사용할 수 있도록 설계되어 있는 템플릿
              - HTTP 서버와의 통신을 단순화하고, RESTful 원칙을 지킴
              - 동기 방식으로 처리되며, 비동기 방식으로는 "AsyncRestTemplate"이 있음
              - RestTemplate 클래스는 REST 서비스를 호출하도록 설계되어 HTTP 프로토콜의 메서드에 맞게 여러 메서드를 제공.
              - HTTP 요청 후 JSON, XML, String 과 같은 응답을 받을 수 있는 템플릿
              - Header, Content-type 등을 설정하여 외부 API 호출
              - Server to Server 통신에 사용

  
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
