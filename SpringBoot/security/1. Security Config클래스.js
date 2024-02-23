Spring Security 의존성 추가시
- 인가 경로 설정이 없다면, default 로 모든 경로에 대해 로그인 페이지를 먼저띄움

-- 인가
: 특정한 경로에 요청이 오면 Controller 클래스에 도달하기 전, 필터에서 Spring Security가 검증
  1. 해당 경로의 접근은 누구에게 공개되어 있는지
  2. 로그인이 완료된 사용자인지
  3. 해당되는 role 을 가지고 있는지

----- SecurityConfig 클래스

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .authorizeHttpRequests((auth) -> auth                              | 순서가 아래로 차례대로 적용되니
                        .requestMatchers("/", "/login").permitAll()                | 순서가 중요함.
                        .requestMatchers("/admin").hasRole("ADMIN")                |
                        .requestMatchers("/my/**").hasAnyRole("ADMIN", "USER")     |
                        .anyRequest().authenticated() );                           ↓
        return http.build(); }}

-- requestMatchers("경로1",...)
: 경로에 대한 어떠한 작업을 할 수 있게하는 메서드
- 뒤에 permitAll() : 로그인 필요 X, 전체공개
       hasRole("역할") : 해당 role을 가진 사용자만 접근 가능, 지정해줄때는 "역할명" 만 붙이고, 실제 사용자 역할 생성 시에는 "ROLE_"을 앞에 붙이기
       hasAnyRole("역할1","역할2", ...) : 여러 역할 설정 가능
       authenticated() : 로그인하면 사용 가능
       denyAll() : 모든 사용자 접근 불가
   등 올수있음

-- anyRequest() : requestMatchers() 로 설정하지 않은 다른 경로 모두를 의미
   동일하게 뒤에 저 메서드들이 올 수 있음

-- 위의 인가설정 후
   http.formLogin() 을 통해 로그인 폼을 정해주지 않는다면,
   인가가 필요한 페이지 방문 시 로그인창이 뜨지않고, 접근만 거부됨
