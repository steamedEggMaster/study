- 로그인 과정
              ◤--------------------------------------------------------------------------------------------------------------------------------------------------------------------------◥
              |                                                                                                                                                                           |  
              |     ◤---------------------◥        ◤---------------◥            DTO           ◤---------------◥                          ◤---------------◥       ◤---------------◥   |
              |     |   UsernamePassword   |        | Authentication |      ◤------------◥     |   UserDetails  |      ◤------------◥     |                |       |                |   |
POST : login -----> | AuthenticationFilter | -----> |     Manager    |  --> | UserDetails | --> |    Service     |  --> | UserDetails | --> | UserRepository | ----> |       DB       |   |
              |     |                      |        |                |  <-- |             | <-- |                |  <-- |             | <-- |                | <---- |  (UserEntity)  |   |
              |     ◣---------------------◢        ◣---------------◢      ◣------------◢     ◣---------------◢      ◣------------◢     ◣---------------◢       ◣---------------◢   |
              |                                           ↙                                                                                                                              |
              |                 ◤---------------◥     ↙                                                                                                                                 |
    Response  |                 |   Successful   |  ↙                                                                                                                                    |
        <-----------------------| Authentication |                                                                                                                                        |
    JWT Token |                 ◣---------------◢                                                                                                                                        |
              |                          |                                                                                                                                                |
              |                 ◤---------------◥                                                                                                                                        |
              |                 |     JWTUtil    |                                                                                                                                        |
              |                 ◣---------------◢                                                                                                                                        |
              ◣--------------------------------------------------------------------------------------------------------------------------------------------------------------------------◢


JWT를 세션은 STATELESS 로 관리하지만, JWTFilter 를 통과 후 일시적으로 세션을 생성하기 때문에
값에 접근이 가능하다.
  -1. username
      코드 : String name = SecurityContextHolder.getContext().getAuthentication().getName();

  -2. role
      코드 : Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
             Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
             Iterator<? extends GrantedAuthority> iter = authorities.iterator();
             GrantedAuthority auth = iter.next();
             String role = auth.getAuthority();

------------------------------------------------------------------------------------------------
CORS(Cross-Origin Resource Sharing, 교차 출처 리소스 공유)
: 웹 페이지 상의 제한된 리소스를 최초 자원이 서비스된 도메인 밖의 다른 도메인으로부터 요청이 가능하도록 허용하는 구조

프론트 서버는 보통 3000번대 에서 띄워 테스트를 하고
웹브라우저에 제공할 내부 데이터를 API 서버(백엔드 서버)로부터 가져오는데,
백엔드 서버는 8080포트에서 응답을 함, 이로 인해 둘의 포트번호가 다르게 됨

웹브라우저에서는 CORS 를 금지시키기 때문에 내부 데이터가 보이지 않게 됨
-> 백엔드에서 CORS 를 처리해줘야함.

-- 처리 방법
1. SecurityConfig
   코드 : http
              .cors((cors) -> cors
                  .configurationSource(new CorsConfigurationSource() {
                      @Override
                      public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                          CorsConfiguration configuration = new CorsConfiguration();

                          configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
                          configuration.setAllowedMethods(Collections.singletonList("*"));
                          configuration.setAllowCredentials(true);
                          configuration.setAllowedHeaders(Collections.singletonList("*"));
                          configuration.setMaxAge(3600L);

                          configuration.setExposedHeaders(Collections.singletonList("Authorization"));

                          return configuration; }}));
2. config > CorsMvcConfig
   코드 : @Configuration
          public class CorsMvcConfig implements WebMvcConfigurer {

          @Override
          public void addCorsMappings(CorsRegistry registry) {
              registry.addMapping("/**")
                  .allowedOrigins("http://localhost:3000"); }}

2가지를 모두 처리해줘야 함
why? controller 를 통하는 데이터는 MVC 에서 처리를 해줘야하고
     SecurityFilter 를 통하는 데이터는 SecurityConfig 에서 처리를 해줘야함
