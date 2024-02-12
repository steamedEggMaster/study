1.  클라이언트에서 로그인 시도
    - /oauth2/authorization/서비스명
      위의 주소로 서버에 요청함
2.  해당 요청은 OAuth2AuthorizationRequestRedirectFilter 에서 한번 잡혀 내부적 로직을 거친 후,
    등록된 외부 소셜 로그인 지원서비스의 "인증 서버" 로 전송
3.  해당 서비스의 로그인 페이지를 응답
4.  로그인에 성공 시 "인증 서버" 에 미리 등록된 우리 서버의 특정 경로로 Redirect 됨
5.  Redirection 되며 해당 서비스의 "인증 서버"에서 특정 "Code" 를 날려줌
    - /login/ouath2/code/서비스명 에 해당하는 경로로 날림
6.  이 날린 "Code" 를 우리 서버의 OAuth2LoginAuthenticationFilter에서 잡음
  
7.  해당 Filter 는 해당 Filter 뒤에 있는 OAuth2LoginAuthenticationProvider 라는 클래스로 
    "Code" 와 등록 정보를 넘겨줌
8.  이 클래스는 "Code" 와 등록 정보를 "인증 서버"로 넘겨 "Access 토큰" 을 "인증 서버" 로부터 발급받음
    - 이 과정 후 "Code"는 소멸됨
9.  "Access 토큰" 을 가지고 OAuth2LoginAuthenticationProvider 클래스는 사용자의 User 정보를 가져오기 위해
    외부 소셜 로그인 지원서비스의 "리소스 서버"에 토큰을 보내 토큰검증 후 User 정보를
    OAuth2LoginAuthenticationProvider 클래스로 넘겨줌
10. OAuth2UserService 의 구현체인 DefaultOAuth2UserService 를 상속받는 CustomOAuth2UserService 를 생성하여
    정보를 받아 처리 후 OAuth2UserDetails 에게 넘겨 로그인 마무리
11. 세션 저장과 같은 나머지 Security 로직 동작


----- 각각의 필터가 동작하는 주소 (관습)
* OAuth2AuthenticationRequestRedirectionFilter
  - /oauth2/authorization/서비스명

* OAuth2LoginAuthenticationFilter : 외부 인증 서버에 설정할 redirect_uri
  - /login/oauth2/code/서비스명

----- OAuth2 인증 및 동작을 위한 변수들
spring.security.oauth2.client.registration.서비스명.client-name=
spring.security.oauth2.client.registration.서비스명.client-id=
spring.security.oauth2.client.registration.서비스명.client-secret=
spring.security.oauth2.client.registration.서비스명.redirect-uri=
spring.security.oauth2.client.registration.서비스명.authorization-grant-type=
spring.security.oauth2.client.registration.서비스명.scope=

spring.security.oauth2.client.provider.서비스명.authorization-uri=
spring.security.oauth2.client.provider.서비스명.token-uri=
spring.security.oauth2.client.provider.서비스명.user-info-uri=
spring.security.oauth2.client.provider.서비스명.user-name-attribute=

----- 우리가 구현해야하는 부분
1. OAuth2UserDetailsService
2. OAuth2UserDetails
