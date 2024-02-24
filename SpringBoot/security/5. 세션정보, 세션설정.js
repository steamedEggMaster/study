----- 세션을 사용하고 있는 사용자의 username 을 알아내는 법
ex) String username = SecurityContextHolder.getContext().getAuthentication().getName();

----- 세션을 사용하고 있는 사용자의 role 을 알아내는 법
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
Collection<? extends GrantedAuthority> collection = authentication.getAuthorities();
Iterator<? extends GrantedAuthority> iterator = collection.iterator();
GrantedAuthority auth = iterator.next();
String role = auth.getAuthority();

----------------------------------------------------------------------------
사용자가 로그인 후, 사용자 정보는 SecurityContextHolder 에 의해 서버 Session 에 관리됨.
  이때 세션의 소멸시간, 아이디당 세션 개수 등을 설정 가능

1. 세션 소멸 시간 설정 in application.properties
   - 세션 타임아웃 설정을 통해 로그인 후 세션 유지 및 소멸 시간 설정 가능
   - 세션 소멸 시점 : 서버에 마지막 특정 요청 수행 후 설정한 시간만큼 유지됨 (기본 1800 초)

   -1. second 기반 작성법
       ex) server.servlet.session.timeout=1800
   -2. minute 기반 작성법
       ex) server.servlet.session.timeout=90m

2. 다중 로그인 설정 in SecurityConfig
   - 동일한 아이디로 얼마나 많은 브라우져에서 동시에 로그인이 가능한지 설정
   - 작성법 : SecurityFilterChain 반환메서드에서 sessionManagement() 를 통해 수행
     @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .sessionManagement((auth) -> auth
                    .maximumSessions(1) // .maximumSessions(정수) : 하나의 아이디에 대한 다중 로그인 허용 개수
                    .maxSessionsPreventsLogin(true)); // .maxSessionsPreventsLogin(true | false) : 다중 로그인 개수 초과 시 처리 방법
        return http.build(); }                                                   //true : 초과 시 새로운 로그인 차단
                                                                                 //false : 초과 시 기존 세션 하나 삭제
3. 세션 고정 보호 in SecurityConfig
   - 세션이 고정되어 있으면       3. user 에게 심기          6. 해당 쿠키가 user가 가진 권한 획득
     User   --------------------------------------------------------------
                           ↗         ↘ 4. user 로그인   ↗
     Hacker ------------↗---------------↘------------↗------------------
          1. 접속 ↘  ↗ 2. 세션 쿠키 획득   ↘       ↗          ↘ 7. 해커가 그 권한을 악용
     Server --------------------------------------------------------------
                                              5. user에게 세션 부여
     의 문제가 발생함.
     -> 방지하기 위해 sessionManagement() 를 통해 Session 정보 변경 수행

  - 작성법
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http
            .sessionManagement((session) - session
                .sessionFixation((sessionFixation) -> sessionFixation
                    .newSession()));
        return http.build(); }
  - 3개의 메서드 존재
    1. .sessionManagement.sessionFixation.none() : 로그인 시 세션 안함
    2. .sessionManagement.sessionFixation.newSession() : 로그인 시 세션 새로 생성
    3. .sessionManagement.sessionFixation.changeSessionId() : 로그인 시 동일한 세션에 대한 id 변경 - many 사용
