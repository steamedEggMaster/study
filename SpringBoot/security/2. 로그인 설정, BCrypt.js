Config 클래스 authorizeHttpRequests() 설정 후 특정 경로에 대한 접근 권한이 없는 경우,
자동으로 로그인 페이지로 리다이렉팅 되지 않고 오류 페이지가 발생

위 문제를 해결하기 위해 formLogin()을 통해 로그인 페이지를 설정해야함.

http
    .formLogin((auth) -> auth.loginPage("/login") 
        .loginProcessingUrl("/loginProc")
        .permitAll() );

설정 후

Spring Security 는 csrf(Cross Site Request Forgery) 가 자동으로 활성화 되어있어서
         연습시에는 꺼주기

http
    .csrf((auth) -> auth.disable());

------------------------------------------------------------------------------------------
BCrypt 암호화 메서드

Spring Security 는 로그인 시 비밀번호에 대해
"단방향 해시 암호화" 를 진행하여 저장되어 있는 비밀번호와 대조
따라서, 회원가입 시 비밀번호 항목에 대해서 암호화를 진행해야함.

비밀번호 암호화를 위해 SpringSecurity는 BCrpytPasswordEncoder 를 제공하고 권장
->Config 클래스에서 BCrpytPasswordEncoder를 return 하는 메서드 생성 후 @Bean 등록

@Bean
public BCryptPasswordEncoder bCryptPasswordEncoder() {
    return new BCryptPasswordEncoder(); }
