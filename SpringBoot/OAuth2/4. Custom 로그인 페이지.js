----- 기존 /login 경로는 설정 없이도, SecurityConfig 에서 제공하는 로그인 페이지임.
      -> OAuth2 를 사용중이기 때문에 /login 경로 입력 시
      -> OAuth2 가 제공하는 기본 로그인 창이 나옴

-- Custom login page
1. templates 에 내가 보여주고 싶은 로그인 페이지를 만든다
   ex) login.mustache
2. 컨트롤러에 @Controller 를 붙이고
   @GetMapping("/login") 메서드를 만든 후 return "login" 을 한다
3. SecurityConfig 에 커스텀 로그인 페이지를 추가한다
   코드 - http
              .oauth2Login(oauth2 -> oauth2
                  .loginPage("/login") //사용자가 로그인할때 redirection 될 페이지 url 지정
                  .userInfoEndpoint(userInfoEndpointConfig ->
                      userInfoEndpointConfig.userService(customOAuth2UserService)));
