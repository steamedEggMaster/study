SpringSecurity로 구현 가능한 로그인 방식 2가지
1. formLogin
2. httpBasic

----- Http Basic 인증방식
: username, password 를 Base64 방식으로 Encoding 후 Http 인증 header에 부착하여 서버 측으로 Request 를 보내는 방식
- 로그인 페이지 필요없이 header에 추가하여 보냄
- 주로 사용하는 곳 : 마이크로서비스 아키텍쳐를 구현할 때, 유레카 서버 or 컨피그 서버에는 서로 내부적으로 private 망에서 통신하지만,
                    더 엄격한 보안을 위해 httpBasic 방식 사용

- 작성법
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
    http
        .httpBasic(Customizer.withDefaults());
    return http.build(); }

- 위의 코드 작성 시 httpBasic 방식으로 인증하게 됨
  -> login 창에 header에 username, password를 입력가능한 prompt 창이 나타남
