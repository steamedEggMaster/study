JWTUtil을 만들고 나서
1. LoginFilter 클래스에 생성자로 주입시키기
   -> 이 경우, 기존의 SecurityConfig 에서 http.addFilterAt(new LoginFilter()) 에서 에러 발생
   -> 동일하게 JWTUtil 클래스를 SecurityConfig에 생성자로 주입 후 JWTUtil 객체를 new LoginFilter() 에 넣어주기

2. successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) 구현하기

   -1. AuthenticationManager은 로그인 성공 시 Authentication 객체를 successfulAuthentication 메서드로 넘김.
       authentication.getPrincipal(); 을 통해 user의 주요(principal) 내용을 가져옴
       코드 : CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
              String username = customUserDeatils.getUsername();

   -2. authentication.getAuthorities(); 를 통해 user의 권한들(Authorities)을 가져옴
       코드 : ollection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
              Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
              GrantedAuthority auth = iterator.next();
              String role = auth.getAuthority();

   -3. JWT 토큰 생성 요청                                      //만료시간
       코드 : String token = jwtUtil.createJwt(username, role, 60*60*10L);
            //토큰은 Json String 타입임.

   -4. JWT 토큰을 response의 헤더부분에 넣어주기
       코드 : response.addHeader("Authorization", "Bearer " + token);
                               //Authorization 이라는 키에
                               //인증방식(Bearer)을 접두사로 붙이고, 띄어쓰기 한칸 필수, 후 토큰 이어쓰기
              //response의 header 또한 Json 임
