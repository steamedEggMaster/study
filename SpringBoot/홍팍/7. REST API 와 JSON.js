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

----- ResponseEntity<T>
: REST API의 응답을 위해 사용하는 클래스
- 응답 시 원하는 HTTP 상태 코드, 헤더, 본문 실어보내기 가능
  ex) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

  - HttpStatus : HTTP 상태 코드 관리 enum 클래스
               - HttpStatus.OK : 상태코드 200
               - HttpStatus.CREATED : 상태코드 201
               - HttpStatus.BAD_REQUEST : 상태코드 400
  - body() : T 에 해당하는 객체 집어넣기
