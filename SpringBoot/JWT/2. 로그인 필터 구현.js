스프링 Security Filter 동작 원리
- 스프링 Security는 클라이언트의 요청이 여러 개의 필터를 거쳐 DispatcherServlet(Controller)으로 향하는 장간 필터에서
  요청을 가로 챈 후 검증(인증 / 인가) 진행

  • 클라이언트 요청 -> Servlet Filter -> DispatcherServlet(컨트롤러)
                Servlet Container(Tomcat)
                ◤------------------------------------------------------------◥
                |  Servlet Filters        ◤----------------------◥           |
                |  (FilterChain)          | SpringSecurity config |           |
                | ◤-◥ ◤-◥ ◤-◥ ◤-◥     ◣----------------------◢           |
     Client ->  | |  | |  | |  | |  |   ◤---------------------------------◥  |
                | |  | |  | |  | |  |   |  Spring Boot Application         |  |
                | |  | |  | |  | |  |   |  { }  { }  { }                   |  |
                | ◣-◢ ◣-◢ ◣-◢ ◣-◢   ◣---------------------------------◢  |
                ◣------------------------------------------------------------◢

  • Delegating Filter Proxy
    - 서블릿 컨테이너(톰캣)에 존재하는 필터체인에 DelegatingFilter 등록 후 모든 요청을 가로 챔

  • 서블릿 필터 체인의 DelegatingFilter 에서 요청 가로 챔 -> Security 필터 체인 (내부 처리 후) -> 서블릿 필터 체인의 DelegatingFilter 로 반환
    - 서블릿 필터 체인과 Security 필터 체인은 별개의 것

  • SecurityFilterChain 의 목록과 순서
  1. ChannelProcessingFilter                            2. WebAsyncManagerIntegrationFilter
  3. SecurityContextPersistenceFilter                   4. HeaderWriterFilter
  5. CorsFilter                                         6. CsrfFilter
  7. LogoutFilter                                       8. 0Auth2AuthorizationRequestRedirectFilter
  9. Saml2WebSsoAuthenticationRequestFilter            10. X509AuthenticationFilter
 11. AbstractPreAuthenticatedProcessingFilter          12. CasAuthenticationFilter
 13. 0Auth2LoginAuthenticationFilter                   14. Saml2WebSsoAuthenticationFilter
 15. UsernamePasswordAuthenticationFilter **           16. DefaultLoginPageGeneratingFilter
 17. DefaultLogoutPageGenerationFilter                 18. ConcurrentSessionFilter
 19. DigestAuthenticationFilter                        20. BearerTokenAuthenticationFilter
 21. BasicAuthenticationFilter                         22. RequestCacheAwareFilter
 23. SecurityContextHolderAwareRequestfilter           24. JaasApiIntegrationFilter
 25. RememberMeAuthenticationFilter                    26. AnonymousAuthenticationFilter
 27. 0Auth2AuthorizationCodeGrantFilter                28. SessionManagementFilter
 29. ExceptionTranslationFilter                        30. FilterSecurityInterceptor
 31. SwitchUserFilter
  
------------------------------------------------------------------------------------------------------
  Form 로그인 방식에서 UsernamePasswordAuthenticationFilter
- Form 로그인 방식에선 클라이언트에서 username, password 전송 후 Security Filter 를 통과 하는데
  UsernamePasswordAuthenticationFilter 에서 회원 검증을 시작함.
  - 회원 검증 과정 : UsernamePasswordAuthenticationFilter 가 호출한 AuthenticationManager 를 통해 진행하며,
                    DB에서 조회한 데이터를 UserDetailsService 를 통해 받음

- 내가 보는 유튜브에선 Form 로그인 방식을 disable 시켜 UsernamePasswordAuthenticationFilter 가 작동하지 않기 때문에,
                      직접 커스텀하여 JWT 에서 작동이 되게끔 한다.

1.  jwt 패키지 생성 후 UsernamePasswordAuthenticationFilter 를 상속받는 LoginFilter 클래스 생성
    3개의 메서드를 Overriding
    1. public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException
       - 사용자로부터 입력받은 username, password 를 
         String username = obtainUsername(request);
         String password = obtainPassword(request); 로 값 가져오기
       - 이 내용을 스프링시큐리티에서 검증하기 위해 토큰에 담아야함
         UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticToken(username, password, null);
       - 토큰을 검증을 위한 AuthenticationManager에게 전달
         authenticationManager.authenticate(authToken);
         - AuthenticationManager의 인스턴스는 SecurityConfig에서 
    2. protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication)
       - 로그인 성공 시 JWT 발급하는 메서드
    3. protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed)
       - 로그인 실패 시 실행하는 메서드

2.  SecurityConfig 클래스의 filterChain 메서드에서 필터를 추가해주기
    http
        .addFilterAt(new LoginFilter(), UsernamePasswordAuthenticationFilter.class);
