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


스프링 Security Filter Chain 에 Request 에 담긴 JWT 를 검증하기 위한 커스텀 필터를 등록해야함.

해당 필터를 통해 Request Header의 Authorization 키에 JWT가 존재하는 경우
     JWT를 검증하고, 강제로 SecurityContextHolder 에 세션을 생성한다.
                                                   (이 세션은 SecurityConfig 에서 STATELSS 로 설정했기 때문에, 해당 요청이 끝나면 세션이 소멸됨)

----- JWTFilter 구현

1.  public class JWTFilter extends OncePerRequestFilter 생성
                                 // 요청에 대해 한번만 수행하는 필터
2.  OncePerRequestFilter 의 
   protected void doFilterInternal(
     HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) 
      throws ServletException, IOException 
    을 Overriding 해주기
    -1. request에서 Authorization 헤더의 내용을 가져오기
        코드 : String authorization= request.getHeader("Authorization");
    -2. Authorization 헤더의 내용을 검증
        코드 : if (authorization == null || !authorization.startsWith("Bearer ")) {
               System.out.println("token null");
               filterChain.doFilter(request, response); //
               return; } //조건이 해당되면 메소드 종료 (필수) Why? 해당 토큰의 내용이 다른 것이라면, 접근을 거부하기 위해
    -3. Bearer 부분을 제거하고, 토큰 문자열만 얻기
        코드 : String token = authorization.split(" ")[1]; -- 이 방법 기억하기
    -4. JWTUtil 클래스의 isExpired() 를 통해 토큰의 만료 여부 확인
        코드 : if (jwtUtil.isExpired(token)) {
               System.out.println("token expired");
               filterChain.doFilter(request, response);
               return; } //조건이 해당되면 메소드 종료 (필수)
    -5. 헤더와 만료 여부를 검증한 후에 토큰의 내용 가져오기
        코드 : String username = jwtUtil.getUsername(token);
               String role = jwtUtil.getRole(token);
    -6. userEntity 를 생성하여 값 setting
        코드 : UserEntity userEntity = new UserEntity();
               userEntity.setUsername(username);
               userEntity.setPassword("temppassword"); //비밀번호는 토큰에 내용에 없기도 하고, 실제 비밀번호를 가져오기 위해
               userEntity.setRole(role);               //모든 요청이 올때마다 DB에 접근해야하는 것을 방지하기 위해 임시 비번을 설정
    -7. UserDetails 에 userEntity 담기
        코드 : CustomUserDetails customUserDetails = new CustomUserDetails(userEntity);
    -8. 스프링 Security 인증 토큰 생성                                                           사용자의 자격증명(일반적으로 password)
        코드 : Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
                                                                                 사용자의 주요 식별자              사용자의 권한 목록
    -9. 세션에 사용자 등록 및 진행
        코드 : SecurityContextHolder.getContext().setAuthentication(authToken);
               filterChain.doFilter(request, response);

3.  SecurityConfig 에서 Filter 추가
    http.addFilterBefore(new JWTFilter(jwtUtil), LoginFilter.class);
                               이 필터를            요 필터 앞에 추가
