----- HttpServletRequest
: Java 웹 어플리케이션에서 클라이언트의 HTTP 요청을 나타내는 객체!
- javax.servlet 패키지에 속함
- 메서드
  1. 객체명.getParameter(String name) return String       : HTTP 요청의 쿼리 문자열 or POST 데이터에서 특정 매개변수 값을 가져옴
  2. 객체명.getAttribute(String name) return Object       : 요청에 대한 속성의 값을 가져옴. 주로 서버 -> 클라이언트에 데이터 전달 시 사용
  3. 객체명.getMethod() return String                     : 요청받은 HTTP 메서드 return
  4. 객체명.getRequestURI() return String                 : 요청의 URI return
  5. 객체명.getSession() return HttpSession               : 현재 요청에 대한 Session return
  6. 객체명.getHeader(String name) return String          : name에 해당하는 header 값 return
  7. 객체명.getCookies() return Cookie[]                  : 클라이언트로부터 전송된 쿠기 return
  8. 객체명.getInputStream() return ServletInputStream    : 요청의 body 데이터를 읽을 수 있는 InputStream return
  9. 객체명.getLocale() return Locale                     : 클라이언트의 지리적,문화적, 정치적 등 정보 return

Attribute : 객체에 대한 추가적인 정보를 저장하는 (Key Value) 로 구성
