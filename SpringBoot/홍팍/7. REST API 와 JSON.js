REST API
: 서버의 자원을 클라이언트에 구애받지 않고 사용 간으하게 하는 설계 방식
- HTTP 요청에 대한 응답으로 서버 resource 반환
  - 이때의 응답 데이터 : JSON

----- HTTP 상태 코드
1XX(정보)                : 요청이 수신되어 처리 중
2XX(성공)                : 요청이 정상적으로 처리됨
3XX(리다이렉션 메세지)    : 요청을 완료하려면 추가 행동 필요
4XX(클라이언트 요청 오류) : 클라이언트의 요청이 잘못되어 서버가 요청 수행 불가
5XX(서버 response 오류)  : 서버 내부 에러 발생 -> 클라이언트 요청을 적절히 수행 못함

----- HTTP Response, Request 메시지
-HTTP 메시지 구성
1. 시작라인(start line) : HTTP 요청 or 응답 내용 있음. always 한줄로 끝남
2. 헤더(header)         : HTTP 전송에 필요한 부가 정보 존재
3. 빈 라인(blank line)  : 헤더의 끝을 알리는 빈줄, 헤더가 모두 전송되었음을 알림
4. 본문(body)           : 실제 전송하는 데이터 존재

----- ResponseEntity<T> extends HttpEntity<T>
: REST API의 응답을 위해 사용하는 클래스
- 응답 시 원하는 HTTP 상태 코드, 헤더, 본문 실어보내기 가능
  ex) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

  - HttpStatus : HTTP 상태 코드 관리 enum 클래스
               - HttpStatus.OK : 상태코드 200
               - HttpStatus.CREATED : 상태코드 201
               - HttpStatus.BAD_REQUEST : 상태코드 400
  - body() : T 에 해당하는 객체 집어넣기
  - build() : body 가 비어있는 ResponseEntity 생성
    ex) return ResponseEntity.status(HttpStatus.OK).build();

----- HttpEntity<T>
- set메서드 존재 X -> 생성자가 중요
생성자
1. HttpEntity()
2. HttpEntity(MultiValueMap<String,String> headers)
3. HttpEntity(T body)
4. HttpEntity(T body, MultiValueMap<String,String> headers)

- HttpHeaders 클래스는  MultiValueMap<String,String> 클래스를 구현하고 있음.
  HttpHeaders의 객체로 header값을 지정하기

----- HttpEntity 와 ResponseEntity
1. HttpEntity : HTTP 요청 or 응답의 Header, Body 등 다루기 가능
              - 주로 HTTP 요청을 보낼 시 사용 -> RestTemplate 으로 외부 API 호출 or 클라 요청 처리 시 자주 사용
2. ResponseEntity  : HTTP 응답을 나타내는 클래스
                   - 주로 컨트롤러 -> 클라이언트로 응답 보낼 시 사용. -> 응답의 StatusCode, Header, Body를 포함

** 요청 보낼때는 HttpEntity, 응답을 받거나 클라이언트로 응답 보낼 때는 ResponseEntity**

----- HttpHeaders
- 생성자(1개) : HttpHeaders()
- 메서드
  1. 객체명.add(String name, String value);              : 주어진 헤더명, 값으로 새로운 헤더 추가
  2. 객체명.set(String name, String value);              : 주어진 헤더명, 값으로 새로운 헤더 추가, 있다면 덮어씀
  3. 객체명.get(String name);                            : 주어진 헤더명에 해당되는 모든 헤더 중 첫번째 값 return
  4. 객체명.remove(String name);                         : 주어진 헤더명에 해당되는 모든 헤더 제거
  5. 객체명.containsKey(String name);                    : 주어진 헤더명이 있는지 검사
  6. 객체명.setAccept(List<MediaType> list);             : Accept 헤더 설정 -> 클라이언트가 서버로부터 허용 가능한 미디어 타입 지정
  7. 객체명.setContentType(MediaType mediaType);         : 요청 or 응답 body의 MediaType 지정
  8. 객체명.setContentLength(Long contentLength);        : 요청 or 응답 body의 길이 지정    
  9. 객체명.setBearerAuth(String token);                 : Authorization 헤더를 설정하여 Bearer 토큰 지정
  10. 객체명.setBasicAuth(String name, String password); : Authorization 헤더를 설정하여 Basic 인증 수행
