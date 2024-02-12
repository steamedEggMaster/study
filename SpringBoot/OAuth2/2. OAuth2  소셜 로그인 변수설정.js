#registration
spring.security.oauth2.client.registration.서비스명.client-name=서비스명
spring.security.oauth2.client.registration.서비스명.client-id=서비스에서 발급 받은 아이디
spring.security.oauth2.client.registration.서비스명.client-secret=서비스에서 발급 받은 비밀번호
spring.security.oauth2.client.registration.서비스명.redirect-uri=서비스에 등록한 우리쪽 로그인 성공 URI - redirection 할 주소(1. 동작모식도 - 관습)
spring.security.oauth2.client.registration.서비스명.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.서비스명.scope=리소스 서버에서 가져올 데이터 범위

#provider
spring.security.oauth2.client.provider.서비스명.authorization-uri=서비스 로그인 창 주소
spring.security.oauth2.client.provider.서비스명.token-uri=토큰 발급 서버 주소
spring.security.oauth2.client.provider.서비스명.user-info-uri=사용자 정보 획득 주소
spring.security.oauth2.client.provider.서비스명.user-name-attribute=응답 데이터 변수

* 위의 변수들을 application에 설정해놓으면
  OAuth2AuthorizationRequestRedirectFilter -> OAuth2LoginAuthenticationFilter -> OAuth2LoginAuthenticationProvider 까지의 과정을
  추가 설정 없이도 자동 진행
* 사용자는 UserDetailsService와 UserDetails만 구현

* #registration 은 외부 서비스에서 우리 서비스를 특정하기 위해 등록하는 정보 - 필수!
* #provider 은 서비스 별로 정해진 값이 존재하고, 유명 서버의 경우 내부적으로 데이터 가짐 - 필수 X / 필요한 서버 ex) 네이버
